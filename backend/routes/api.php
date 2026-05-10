<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\HomeBanner;
use App\Models\BestsellerProduct;
use App\Models\SoloBanner;
use App\Models\NewArrivalProduct;
use App\Models\Testimonial;
use App\Models\Feature;
use App\Models\AboutHero;
use App\Models\AboutStory;
use App\Models\AboutStatistic;
use App\Models\AboutValue;
use App\Models\AboutTeam;
use App\Models\AboutCta;
use App\Models\BlogPost;
use App\Models\ContactSubmission;
use App\Models\Faq;
use App\Models\ContactInfo;
use Illuminate\Support\Facades\DB;

// ===================== HOME PAGE API =====================

// Get all home page data (banners, bestsellers, solo banner, new arrivals, testimonials, features)
Route::get('/home-data', function() {
    return response()->json([
        'success' => true,
        'data' => [
            'banners' => HomeBanner::where('active', 1)->orderBy('order')->get(),
            'bestsellers' => BestsellerProduct::where('active', 1)->orderBy('order')->get(),
            'soloBanner' => SoloBanner::where('active', 1)->first(),
            'newArrivals' => NewArrivalProduct::where('active', 1)->orderBy('order')->get(),
            'testimonials' => Testimonial::where('active', 1)->get(),
            'features' => Feature::where('active', 1)->orderBy('order')->get()
        ]
    ]);
});

// Get only banners
Route::get('/banners', function() {
    return response()->json([
        'success' => true,
        'data' => HomeBanner::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get only bestsellers
Route::get('/bestsellers', function() {
    return response()->json([
        'success' => true,
        'data' => BestsellerProduct::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get only solo banner
Route::get('/solo-banner', function() {
    return response()->json([
        'success' => true,
        'data' => SoloBanner::where('active', 1)->first()
    ]);
});

// Get only new arrivals
Route::get('/new-arrivals', function() {
    return response()->json([
        'success' => true,
        'data' => NewArrivalProduct::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get only testimonials
Route::get('/testimonials', function() {
    return response()->json([
        'success' => true,
        'data' => Testimonial::where('active', 1)->get()
    ]);
});

// Get only features
Route::get('/features', function() {
    return response()->json([
        'success' => true,
        'data' => Feature::where('active', 1)->orderBy('order')->get()
    ]);
});


// ===================== ABOUT PAGE API =====================

// Get all about page data (hero, story, stats, values, team, cta)
Route::get('/about-data', function() {
    return response()->json([
        'success' => true,
        'data' => [
            'hero' => AboutHero::where('active', 1)->first(),
            'story' => AboutStory::where('active', 1)->first(),
            'statistics' => AboutStatistic::where('active', 1)->orderBy('order')->get(),
            'values' => AboutValue::where('active', 1)->orderBy('order')->get(),
            'team' => AboutTeam::where('active', 1)->orderBy('order')->get(),
            'cta' => AboutCta::where('active', 1)->first()
        ]
    ]);
});

// Get only about hero
Route::get('/about-hero', function() {
    return response()->json([
        'success' => true,
        'data' => AboutHero::where('active', 1)->first()
    ]);
});

// Get about story
Route::get('/about-story', function() {
    return response()->json([
        'success' => true,
        'data' => AboutStory::where('active', 1)->first()
    ]);
});

// Get about statistics
Route::get('/about-statistics', function() {
    return response()->json([
        'success' => true,
        'data' => AboutStatistic::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get about values
Route::get('/about-values', function() {
    return response()->json([
        'success' => true,
        'data' => AboutValue::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get about team
Route::get('/about-team', function() {
    return response()->json([
        'success' => true,
        'data' => AboutTeam::where('active', 1)->orderBy('order')->get()
    ]);
});

// Get about cta
Route::get('/about-cta', function() {
    return response()->json([
        'success' => true,
        'data' => AboutCta::where('active', 1)->first()
    ]);
});


// ===================== PRODUCTS API =====================

// Get all products
Route::get('/products', function() {
    $products = DB::table('products')
        ->where('active', 1)
        ->orderBy('order')
        ->get();
    
    return response()->json([
        'success' => true,
        'data' => $products
    ]);
});

// Get products with sorting
Route::get('/products/filter', function(Request $request) {
    $query = DB::table('products')->where('active', 1);
    
    if ($request->has('sort')) {
        switch($request->sort) {
            case 'price-low':
                $query->orderBy('price', 'asc');
                break;
            case 'price-high':
                $query->orderBy('price', 'desc');
                break;
            case 'rating':
                $query->orderBy('rating', 'desc');
                break;
            default:
                $query->orderBy('order');
        }
    } else {
        $query->orderBy('order');
    }
    
    $products = $query->get();
    
    return response()->json([
        'success' => true,
        'data' => $products
    ]);
});

// Get single product
Route::get('/product/{id}', function($id) {
    $product = DB::table('products')->where('id', $id)->where('active', 1)->first();
    
    if (!$product) {
        return response()->json([
            'success' => false,
            'message' => 'Product not found'
        ], 404);
    }
    
    return response()->json([
        'success' => true,
        'data' => $product
    ]);
});

// Get featured products
Route::get('/products/featured', function() {
    $products = DB::table('products')
        ->where('active', 1)
        ->where('is_featured', 1)
        ->orderBy('order')
        ->limit(4)
        ->get();
    
    return response()->json([
        'success' => true,
        'data' => $products
    ]);
});


// ===================== BLOG PAGE API =====================

// Get all blog posts
Route::get('/blog-posts', function() {
    $posts = BlogPost::where('active', 1)->orderBy('date', 'desc')->get();
    
    return response()->json([
        'success' => true,
        'data' => $posts
    ]);
});

// Get blog posts with filters (category, search)
Route::get('/blog-posts/filter', function(Request $request) {
    $query = BlogPost::where('active', 1);
    
    // Filter by category
    if ($request->has('category') && $request->category != 'All') {
        $query->where('category', $request->category);
    }
    
    // Search by title or excerpt
    if ($request->has('search') && $request->search) {
        $query->where(function($q) use ($request) {
            $q->where('title', 'like', '%' . $request->search . '%')
              ->orWhere('excerpt', 'like', '%' . $request->search . '%');
        });
    }
    
    $posts = $query->orderBy('date', 'desc')->get();
    
    return response()->json([
        'success' => true,
        'data' => $posts
    ]);
});

// Get featured post
Route::get('/blog-posts/featured', function() {
    $post = BlogPost::where('active', 1)->where('is_featured', 1)->first();
    
    return response()->json([
        'success' => true,
        'data' => $post
    ]);
});

// Get single blog post by slug
Route::get('/blog-post/{slug}', function($slug) {
    $post = BlogPost::where('slug', $slug)->where('active', 1)->first();
    
    if (!$post) {
        return response()->json([
            'success' => false,
            'message' => 'Post not found'
        ], 404);
    }
    
    // Increment views
    $post->increment('views');
    
    return response()->json([
        'success' => true,
        'data' => $post
    ]);
});

// Get all categories
Route::get('/blog-categories', function() {
    $categories = BlogPost::where('active', 1)
        ->select('category')
        ->distinct()
        ->get()
        ->pluck('category');
    
    $allCategories = array_merge(['All'], $categories->toArray());
    
    return response()->json([
        'success' => true,
        'data' => $allCategories
    ]);
});


// ===================== CONTACT PAGE API =====================

// Get contact page data (info + faqs)
Route::get('/contact-data', function() {
    return response()->json([
        'success' => true,
        'data' => [
            'contactInfo' => ContactInfo::where('active', 1)->first(),
            'faqs' => Faq::where('active', 1)->orderBy('order')->get()
        ]
    ]);
});

// Get contact info only
Route::get('/contact-info', function() {
    return response()->json([
        'success' => true,
        'data' => ContactInfo::where('active', 1)->first()
    ]);
});

// Get FAQs only
Route::get('/faqs', function() {
    return response()->json([
        'success' => true,
        'data' => Faq::where('active', 1)->orderBy('order')->get()
    ]);
});

// Submit contact form (store in database)
Route::post('/contact-submit', function(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'subject' => 'nullable|string|max:255',
        'message' => 'required|string'
    ]);

    $submission = ContactSubmission::create($validated);

    return response()->json([
        'success' => true,
        'message' => 'Message sent successfully! We will get back to you soon.',
        'data' => $submission
    ]);
});

// Get all contact submissions (Admin only)
Route::get('/contact-submissions', function() {
    $submissions = ContactSubmission::orderBy('created_at', 'desc')->get();
    return response()->json([
        'success' => true,
        'data' => $submissions
    ]);
});

// Mark submission as read (Admin only)
Route::put('/contact-submissions/{id}/read', function($id) {
    $submission = ContactSubmission::findOrFail($id);
    $submission->update(['is_read' => 1]);
    return response()->json([
        'success' => true,
        'message' => 'Marked as read'
    ]);
});