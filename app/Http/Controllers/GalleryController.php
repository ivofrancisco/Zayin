<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

use App\Models\Gallery;

use App\Http\Requests\StoreGalleryRequest;
use App\Http\Requests\EditGalleryRequest;
use App\Http\Services\CreateGalleryService;
use App\Http\Services\MediaService;

class GalleryController extends Controller
{
    /**
     * Display list of galleries.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $galleries = Gallery::all();
        return response()->json($galleries);
    }

    /**
     * Create a new gallery.
     *
     * @param StoreGalleryRequest $request
     * @param CreateGalleryService $createGalleryService
     * 
     */
    public function store(StoreGalleryRequest $request, CreateGalleryService $createGalleryService): JsonResponse
    {
        // Save new gallery
        Gallery::create($createGalleryService->getRequestItems($request->all()));
        // Redirect user to galleries main page
        return Response()->json([
            'message_success' => 'The gallery was successfully created.',
            'galleries' => Gallery::all()
        ]);
    }

    /**
     * Display form to edit a 
     * specific gallery.
     *
     * @param $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        // Gallery
        $gallery = Gallery::where(['id' => $id])->firstOrFail();
        return Response()->json([
            'gallery' => $gallery
        ]);
    }

    /**
     * Update a specific gallery.
     *
     * @param EditGalleryRequest $request
     * @return JsonResponse
     */
    public function update(Request $request, MediaService $mediaService, $id): JsonResponse
    {
        //dd($request);

        //$mediaService = new MediaService();
        // Current photos
        $currentPhotos = $request->current_photos;
        // Photos to be deleted
        $toDelete = $request->remove;
        // New photos
        $newPhotos = $request->photos;
        // Updated photos
        $updatedPhotos = isset($updatedPhotos) ? $updatedPhotos : $currentPhotos;

        // Remove files from folder
        if ($toDelete) {
            $currentPhotos = $mediaService->removeMultipleFiles($toDelete, $currentPhotos);
        }

        // If there are new photos
        if ($newPhotos) {
            $newPhotos = $mediaService->addPhotos($request->photos);
            // Updated photos
            $updatedPhotos = array_merge($currentPhotos, $newPhotos);
        }

        // Update gallery
        $gallery = Gallery::find($id);

        $gallery->title = $request->input('title');
        $gallery->body = $request->input('body');
        $gallery->photos = $updatedPhotos;
        $gallery->update();
        
        // Redirect user to galleries main page
        return Response()->json([
            'message_success' => 'The gallery was successfully updated.',
            'galleries' => Gallery::all()
        ]);
    }

    /**
     * Delete a specific gallery.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id, MediaService $mediaService): JsonResponse
    {
        // Gallery
        $gallery = Gallery::where('id', $id)->firstOrFail();

        // Remove all image files
        // from folder
        $mediaService->removeMultipleFiles($gallery->photos);

        // Delete gallery
        $gallery->delete();

        // Redirect user to galleries main page
        return Response()->json([
            'message_success' => 'The gallery was successfully deleted.',
            'galleries' => Gallery::all()
        ]);
    }

}
