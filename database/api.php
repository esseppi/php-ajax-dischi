<?php
include_once  './data.php';
$genre = strtolower($_GET['search'] ?? '');

if ($genre) {
    $arr_results = [];
    foreach ($albums as $album) {
        if (strtolower($album['genre']) === $genre) {
            $arr_results = $album;
        }
    }
} else {
    $arr_results = $albums;
}

header('Content-Type: application/json');

echo json_encode($arr_results);
