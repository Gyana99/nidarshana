<?php

namespace App\Http\Middleware;

use Closure;

class DecryptRequestMiddleware
{
    private $key = 'NidarshanTech012';

    public function handle($request, Closure $next)
    {
        $encryptedData = $request->input('data');

        if (!$encryptedData) {
            return response()->json([
                'status' => false,
                'message' => 'Encrypted data missing'
            ], 400);
        }

        $decrypted = openssl_decrypt(
            base64_decode($encryptedData),
            'AES-128-ECB',
            $this->key,
            OPENSSL_RAW_DATA
        );

        // dd([
        //     'encrypted' => $encryptedData,
        //     'key' => $this->key,
        //     'decoded' =>  $decrypted
        // ]);
        $data = json_decode($decrypted, true);
        $request->merge([
            'decrypted_data' => $data
        ]);

        return $next($request);
    }
}
