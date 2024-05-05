<?php
$email = "igor287@gmail.com";
$token = "a928b578-1a52-4f1b-81fb-a5e133d7bdc5";
global $headers;
global $salepoint;
global $startdt;
global $enddt;
$headers = array(
    "content-type: application/json",
    "X-AUTH-USER: " . $email,
    "X-AUTH-TOKEN: " . $token
);
$url = "https://web.eua.in.ua/eua/api/v15/user/current";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$out = curl_exec($ch);
curl_close($ch);
$eua = json_decode($out, true);
$salepoint = $eua["user"]["salePoint"]["id"];
date_default_timezone_set("Europe/Kiev");
$tom=strtotime("tomorrow");
$startdt = date("Y-m-d", $tom);
$nxty  = strtotime('+ 1 year', $tom);
$enddt = date("Y-m-d", $nxty);
