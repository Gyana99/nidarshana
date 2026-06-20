<!DOCTYPE html>
<html>

<head>
    <title>Lumen Log Viewer</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body {
            background: #f8f9fa;
        }

        .log-container {
            height: 700px;
            overflow: auto;
            background: #1e1e1e;
            color: #fff;
            padding: 20px;
            font-family: Consolas;
            border-radius: 10px;
        }

        .error {
            color: #ff4d4d;
            font-weight: bold;
        }

        .warning {
            color: #ffc107;
            font-weight: bold;
        }

        .info {
            color: #28a745;
            font-weight: bold;
        }

        .debug {
            color: #17a2b8;
            font-weight: bold;
        }

        .critical {
            color: #ff00ff;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <div class="container mt-4">

        <div class="card">

            <div class="card-header">
                <h4>Log Viewer</h4>
                <small><?php echo isset($currentFile)? $currentFile : '' ?></small>
            </div>

            <div class="card-body">

                <form class="row mb-3">

                    <div class="col-md-4">
                        <input
                            type="text"
                            name="search"
                            class="form-control"
                            placeholder="Search error...">
                    </div>

                    <div class="col-md-3">
                        <input
                            type="date"
                            name="date"
                            class="form-control">
                    </div>

                    <div class="col-md-2">
                        <button class="btn btn-primary">
                            Search
                        </button>
                    </div>

                </form>

                <div class="log-container">

                    <?php

                    $lines = explode("\n", isset($logs) ? $logs : '' );

                    foreach ($lines as $line) {

                        $class = '';

                        if (stripos($line, 'ERROR') !== false) {
                            $class = 'error';
                        } elseif (stripos($line, 'WARNING') !== false) {
                            $class = 'warning';
                        } elseif (stripos($line, 'INFO') !== false) {
                            $class = 'info';
                        } elseif (stripos($line, 'DEBUG') !== false) {
                            $class = 'debug';
                        } elseif (stripos($line, 'CRITICAL') !== false) {
                            $class = 'critical';
                        }

                        echo '<div class="' . $class . '">' . htmlspecialchars($line) . '</div>';
                    }

                    ?>

                </div>

            </div>

        </div>

    </div>

</body>

</html>