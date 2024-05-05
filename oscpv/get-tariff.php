<?php

use Random\RandomException;

require_once("eua_connect.php");
global $headers;
global $salepoint;
global $startdt;
global $enddt;
$categ = array(
  "1" => "A1",
  "2" => "A2",
  "3" => "B1",
  "4" => "B2",
  "5" => "B3",
  "6" => "B4",
  "7" => "B5",
  "8" => "C1",
  "9" => "C2",
  "10" => "D1",
  "11" => "D2",
  "12" => "E",
  "13" => "F"
);
$regplace = $_GET["city"];
$franch = $_GET["franshiza"];
$priv = $_GET["priv"];
$number = $_GET["number"];
if (!empty($number)) {
  $url = "https://web.eua.in.ua/eua/api/v15/auto/mtibu/number?query=" . urlencode($number);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  $out = curl_exec($ch);
  curl_close($ch);
  $auto = json_decode($out, true);
  if (count($auto)) {
    $autocat = $auto[0]["category"];
	$automodel = $auto[0]["modelText"];
	$autovin = $auto[0]["bodyNumber"];
	$autoyear = $auto[0]["year"];
    $outua = false;
	echo '
		<div class="vehicle-info-wrapper b-container__calculator_vehicle">
			<div class="b-calculator_vehicle">
				<div class="vehicle-info" style="display:block; padding:40px 16px 24px; border-radius:12px; background-color:rgb(255, 255, 255);">
					<h2 style="text-align:center; font:400 18px / 130% latoregular, Arial, sans-serif; margin-bottom:16px;">Транспортний засіб</h2>
					<div>
						<div id="toPropos" style="width:fit-content; margin:1px auto 1px; border:2px solid #1aaa89; text-align:center; font:400 16px latoregular, Arial, sans-serif; border-radius:16px; background-color:#eeebeb; padding:12px 32px; text-transform:none;">
	';
	echo $automodel;
	if (!empty($autoyear)) {
		echo ', ' . $autoyear;
	}
	if (!empty($autovin)) {
		echo ', ' . $autovin;
	}
	echo '
						</div>
					</div>
					<p style="font-size:12px; line-height:115%; color:#9eafc6; margin-top:20px; margin-bottom:10px; text-align:center;">Не Ваше авто?</p>
					<div id="notMyVehicle" style="cursor:pointer; width:fit-content; font-size:12px; text-decoration:underline; text-align:center; margin:4px auto 4px; padding:4px 8px; background-color:rgb(255, 255, 255); transition:all 0.3s ease 0s;">
						Виправити
					</div>
					<div id="toParams" style="cursor:pointer; width:fit-content; font-size:12px; text-decoration:underline; text-align:center; margin:4px auto 4px; padding:4px 8px; background-color:rgb(255, 255, 255); transition:all 0.3s ease 0s;">
						Розрахувати по параметрам
					</div>
					<div class="b-choose-steps" style="border:0">
						<input type="radio" class="sr-only" id="toCont" checked/>
						<label class="b-choose-step b-choose-step_active js-choose-step_active" for="toCont" style="display:block; border:0; margin: auto;">
						<span class="b-choose-step__back">
							<span class="b-choose-step__title">Продовжити</span>
						</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	';
  } else {
	echo '
		<div class="vehicle-info-wrapper b-container__calculator_vehicle">
			<div class="b-calculator_vehicle">
				<div class="vehicle-info" style="display:block; padding:40px 16px 24px; border-radius:12px; background-color:rgb(255, 255, 255);">
					<h2 style="text-align:center; font:400 18px / 130% latoregular, Arial, sans-serif; margin-bottom:16px;">Цього авто не існує у БД МТСБУ</h2>
					<div id="notMyVehicle" style="cursor:pointer; width:fit-content; font-size:12px; text-decoration:underline; text-align:center; margin:4px auto 4px; padding:4px 8px; background-color:rgb(255, 255, 255); transition:all 0.3s ease 0s;">
						Виправити
					</div>
					<div id="toParams" style="cursor:pointer; width:fit-content; font-size:12px; text-decoration:underline; text-align:center; margin:4px auto 4px; padding:4px 8px; background-color:rgb(255, 255, 255); transition:all 0.3s ease 0s;">
						Розрахувати по параметрам
					</div>
				</div>
			</div>
		</div>
	';
	exit(254);
  }
} else {
  $autocat = $categ[$_GET["type"]];
  $outua = $_GET["registeredAbroad"];
}

if ($outua == "1") {
  $url = "https://web.eua.in.ua/eua/api/v15/tariff/choose/policy?autoCategory=" . $autocat . "&franchise=" . $franch . "&outsideUkraine=true&customerCategory=NATURAL&dateFrom=" . $startdt . "&dateTo=" . $enddt . "&usageMonths=0&taxi=false&crossSell=false&salePoint=" . $salepoint;
} elseif ($priv == "1") {
  $url = "https://web.eua.in.ua/eua/api/v15/tariff/choose/policy?autoCategory=" . $autocat . "&registrationPlace=" . $regplace . "&franchise=" . $franch . "&customerCategory=PRIVILEGED&dateFrom=" . $startdt . "&dateTo=" . $enddt . "&usageMonths=0&taxi=false&crossSell=false&salePoint=" . $salepoint;
} else {
  $url = "https://web.eua.in.ua/eua/api/v15/tariff/choose/policy?autoCategory=" . $autocat . "&registrationPlace=" . $regplace . "&franchise=" . $franch . "&customerCategory=NATURAL&dateFrom=" . $startdt . "&dateTo=" . $enddt . "&usageMonths=0&taxi=false&crossSell=false&salePoint=" . $salepoint;
}
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$out = curl_exec($ch);
curl_close($ch);
$tariffs = json_decode($out, true);
$hard = 0.75;
$m_percent = 0.15;
$t_data = array();
$tariff_data = array();
$reduced_tariff = array();
$i = 0;
foreach ($tariffs as $propos => $tariff_item){
  $pmt = $tariff_item['payment'];
  if ($pmt == 0) continue;
  $edrpou = $tariff_item['tariff']['insurer']['code'];
  if ($edrpou == "12345678") continue;
  $insur_id = $tariff_item['tariff']['insurer']['id'];
  $img = 'assets/logos/' . $edrpou . '.png';
  $tariff_id = $tariff_item['tariff']['id'];
  $fullprice = round($pmt);
  $comis = $tariff_item['commission'];
  $n_pmt = $fullprice - $comis;
  $percent = round($comis / $fullprice, 2);
  $n_comis = round($comis - (0.03 * $pmt + 0.05 * $comis), 2);
  $percent = round($comis / $fullprice, 2);
  $n_percent = round($n_comis / $fullprice, 2);
  if ($n_percent < $m_percent) continue;
  $price = $fullprice;
  $discount = 0;  
  $fullname = htmlspecialchars($tariff_item['tariff']['insurer']['namePrint'], ENT_QUOTES | ENT_HTML5);
  $name = $tariff_item['tariff']['insurer']['name'];
  if ($price < 1000) {
    $pad_l = 50;
  } else {
    $pad_l = 37;
  }
  $t_data = array($tariff_id, 'fullprice' => $fullprice, 'price' => $price, $fullname, $name, $img, 'discount' => $discount, $pad_l, 'comis' => $comis, 'insur_id' => $insur_id, 'n_pmt' => $n_pmt, $percent, 'n_comis' => $n_comis, $n_percent);
  $tariff_data[$i] = $t_data;
  $i++;
}
$r_insur_id = array_column($tariff_data, 'insur_id');
$r_n_comis = array_column($tariff_data, 'n_comis');
array_multisort($r_insur_id, SORT_ASC, $r_n_comis, SORT_DESC, $tariff_data);
$insur_ids = array_unique($r_insur_id);
$searchKey = 'insur_id';
foreach ($insur_ids as $insur_id) {
  $t_data = null;
  $searchValue = $insur_id;
  $i = 0;
  foreach ($tariff_data as $subarray) {
    if (isset($subarray[$searchKey]) && $subarray[$searchKey] === $searchValue) {
      if ($i ==0) $t_data[] = $subarray;
      $t_data[0]['price'] = round($t_data[0]['n_pmt'] + $subarray['comis']);
	  $i++;
    }
  }
  $reduced_tariff[] = $t_data;
}
$t_data = null;
$tariff_data = null;
foreach ($reduced_tariff as $t_data) {
  if ($t_data[0]['price'] == $t_data[0]['fullprice']) {
	$t_data[0]['price'] = round($t_data[0]['n_pmt'] + $hard * $t_data[0]['n_comis']);
  }
  $t_data[0]['discount'] = round(1 - ($t_data[0]['price'] / $t_data[0]['fullprice']),2) * 100;
  $tariff_data[] = $t_data[0];
}
$r_price = array_column($tariff_data, 'price');
array_multisort($r_price, SORT_ASC, $tariff_data);
echo '<div class="b-calculator_propos" id="propositions">
        <div class="t594__container t-container">'; 
$t_data = null;
foreach ($tariff_data as $t_data) {
  list($tariff_id, $fullprice, $price, $fullname, $name,  $img, $discount, $pad_l) = array_values($t_data);
    try {
        $pos_right = (string)random_int(0, 9);
    } catch (RandomException $e) {
    }
    echo '  <div class="js-proposition t594__item t594__item_4-in-row">
            <div class="b-proposition_row js-proposition__buy" data-name="' . $name . '" data-tariff-id="' . $tariff_id  . '" price="' . $price  . '">
              <div class="b-container__filter b-proposition__company">
                <img src="' . $img . '" title="' . $fullname . '" class="b-img_company">
                <svg version="1.1"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px" y="0px" viewBox="0 0 237 227.7" 
                  style="enable-background:new 0 0 237 227.7;right:' . $pos_right . '%"
                  xml:space="preserve"
                  class="b-img_note">
                  <rect id="rect4857" x="14.1" y="16.3" class="st0" width="212" height="205.4"></rect>
                  <g id="path4843" class="st1">
                    <path d="M26.5,23.4l187.9-0.1l3,185.8c0,0-147.6-3.1-197.6-1.3C24.7,161.8,26.5,23.4,26.5,23.4L26.5,23.4z"/>
                  </g>
                  <g>
                    <linearGradient id="path4845_1_" gradientUnits="userSpaceOnUse" x1="-12.2226" y1="291.7783" x2="-178.9697" y2="448.3435" gradientTransform="matrix(1 4.259600e-03 -4.259600e-03 1 217.241 -257.1709)">
                      <stop  offset="0" style="stop-color:#F7EC9A"/>
                      <stop  offset="0.134" style="stop-color:#F6EA8D"/>
                      <stop  offset="0.4567" style="stop-color:#F5E98A"/>
                      <stop  offset="0.8093" style="stop-color:#F8ED9D"/>
                      <stop  offset="1" style="stop-color:#F5E98A"/>
                    </linearGradient>
                    <path id="path4845" class="st2" d="M24.6,19.2L216.3,20l-0.8,185.8c0,0-165.5,3.8-188.1-10.2C22.7,172.1,24.6,19.2,24.6,19.2L24.6,19.2z"/>
                  </g>
				  <image style="overflow:visible;enable-background:new;" width="256" height="256" transform="matrix(0.1661 0 0 0.1661 101.8482 -1.153425e-05)" href="assets/icons/pin.svg"/>
                  <text transform="matrix(1 0 0 1 64 95)" class="st3 st4 st5">-' . $discount . '%</text>
                  <text transform="matrix(1 0 0 1 ' . $pad_l . ' 165)" class="st3 st4 st6"> ' . $price . ' грн</text>
                </svg>
   					    <span class="b-price_full">Базова: ' . $fullprice . ' грн</span>																																				
                </div>
              </div>
          </div>';
}
echo '    	</div>
  </div>';
?>
