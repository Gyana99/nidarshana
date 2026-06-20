<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function index(Request $request)
    {
        $date = $request->input('date');

        $files = glob(storage_path('logs/*.log'));

        if (empty($files)) {
            return 'No log files found';
        }

        rsort($files);

        if ($date) {
            foreach ($files as $file) {
                if (strpos($file, $date) !== false) {
                    $logFile = $file;
                    break;
                }
            }
        }

        $logFile = $logFile ?? $files[0];

        $logs = file_get_contents($logFile);

        if ($request->filled('search')) {
            $search = $request->search;
            $lines = explode("\n", $logs);

            $lines = array_filter($lines, function ($line) use ($search) {
                return stripos($line, $search) !== false;
            });

            $logs = implode("\n", $lines);
        }

        return view('logs', [
            'logs' => $logs,
            'currentFile' => basename($logFile)
        ]);
    }
}