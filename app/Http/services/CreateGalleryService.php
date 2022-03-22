<?php

namespace App\Http\Services;

class CreateGalleryService
{
	/**
     * Store all request's entries:
     *
     * @var array
     */
    public $requestItems = [];
    public $mediaService;

    public function getRequestItems($request): array
    {
    	// Organize gallery photos
	    $this->mediaService = new MediaService();

    	// Loop over all request entries
        foreach ($request as $item => $value) {
        	// Check for image file
            if ($item == 'photos') {
            	// Generate an array from 
                // gallery's photos
                $this->requestItems[$item] = $this->mediaService->addPhotos($value);
            } else {
                // Nor media file or icons found
                $this->requestItems[$item] = $value;
            }
        }
        // New request array with photo
        // fnamesincluded
        return $this->requestItems;
    }

}