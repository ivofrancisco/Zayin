<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Storage;

class MediaService
{

    /**
     * Store the media file's
     * original name
     *
     * @var $fileName
     */
    public $fileName;

    /**
     * Get media file's original name
     *
     * @param $mediaFile
     * @return mixed|string
     */
    public function setFilename($file)
    {
        $this->fileName = $file ? $file->getClientOriginalName() : 'default_pic.jpg';
        return $this->fileName;
    }

    /**
     * Upload media file
     *
     * @param $File
     */
    public function uploadFile($file)
    {
        $file->storePubliclyAs('images', $this->setFilename($file), 'public');
    }

    /**
     * Remove single image
     * file from folder
     *
     * @param $file
     * @return mixed
     */
    public function removeFile($file): bool
    {
        if ($file) {
            return Storage::disk('public')->delete("/images/$file");
        }
        return false;
    }

    /**
     * Remove multiple image
     * files from the gallery
     *
     * @param $file
     * @return mixed
     */
    public function removeMultipleFiles($rejected, $accepted = []): mixed
    {
        // Check if there are
        // image files
        // $accepted = $accepted ? $accepted : [];

        if (sizeof($accepted) > 0) {
            // Update gallery
            // Loop over rejected image files
            for ($i = 0; $i < count($rejected); $i++) {
                // Removal from array
                $updatedPhotos = array_diff($accepted, $rejected);
                // Removal from folder
                $this->removeFile($rejected[$i]);
            }
            return $updatedPhotos;

        } else {
            // Delete gallery
            // Remove all image files from folder
            foreach($rejected as $photo) {
                Storage::disk('public')->delete("/images/$photo");
            }
            return false;
        }

    }

    /**
     * Add request's image file.
     *
     * @param $photos
     * @return array
     */
    public function addPhotos($photos): array
    {
        // Store photo names
        $target = [];
        // Loop over photo names
        foreach ($photos as $photo => $value) {
            // Check for object
            if (!is_string($value)) {
                // Get photos names
                $photo = $this->setFilename($value);
                // Add photos (names) into new array
                array_push($target, $photo);
                // Upload photos
                $this->uploadFile($value);
            }
        }
        return $target;
    }

}
