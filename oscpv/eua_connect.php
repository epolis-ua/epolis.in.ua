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

/**
 * @param string $url
 * @param array $headers
 * @return mixed
 */
function replyEUA(string $url, array $headers): mixed
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $out = curl_exec($ch);
    curl_close($ch);
    try {
        $repl = json_decode($out, true, 512, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        echo '{"Caught exception: ' . $e->getMessage() . '"}';
        exit(254);
    }
    return $repl;
}

$url = "https://web.eua.in.ua/eua/api/v15/user/current";
$eua = replyEUA($url, $headers);
$salepoint = $eua["user"]["salePoint"]["id"];
date_default_timezone_set("Europe/Kiev");
$tom=strtotime("tomorrow");
$startdt = date("Y-m-d", $tom);
$nxty  = strtotime('+ 1 year', $tom);
$enddt = date("Y-m-d", $nxty);
