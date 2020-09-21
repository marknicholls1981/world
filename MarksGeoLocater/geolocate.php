<?php 

ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	include('openCage/AbstractGeocoder.php');
    include('openCage/Geocoder.php');
    $geocoder = new \OpenCage\Geocoder\Geocoder('20491c4dde2a4315877e5e84aaff06b4');
    $result = $geocoder->geocode('58.214659, 7.632473', ['language' => 'gbr']);

    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($result['results'], JSON_UNESCAPED_UNICODE);
    


?>