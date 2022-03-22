<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Contracts\View\View;

class GalleryPageController extends Controller
{
    /**
     * Display site's Gallery page
     *
     * @return View
     */
    public function index(): view 
    {
        return view('site.gallery')->with([
            'title' => 'Gallery',
            // 'gallery' => $gallery,
        ]);
    }
}