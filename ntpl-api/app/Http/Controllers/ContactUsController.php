<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUs;
use Illuminate\Support\Facades\Validator;

class ContactUsController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all('decrypted_data')['decrypted_data'], [
            'full_name' => 'required|max:150',
            'mobile_no' => 'required|digits_between:10,15',
            'email'     => 'required|email',
            'message'   => 'required|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }
        
        $contact = ContactUs::create($request->all('decrypted_data')['decrypted_data']);

        return response()->json([
            'status' => true,
            'message' => 'Contact form submitted successfully',
            'data' => $contact
        ], 201);
    }
}
