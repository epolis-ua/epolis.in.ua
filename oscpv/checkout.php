<?php
require_once( "eua_connect.php" );
global $headers;
global $salepoint;
global $saledt;
global $startdt;
global $enddt;
$categ = array(
  "1" => "Мотоцикл / моторолер, до 300 см<sup>3</sup>",
  "2" => "Мотоцикл / моторолер, від 300 см<sup>3</sup>",
  "3" => "Легковий а/м, до 1600 см<sup>3</sup>",
  "4" => "Легковий а/м, 1601 - 2000 см<sup>3</sup>",
  "5" => "Легковий а/м, 2001 - 3000 см<sup>3</sup>",
  "6" => "Легковий а/м, від 3001 см<sup>3</sup>",
  "7" => "Електромобіль",
  "8" => "Вантажний а/м, до 2т",
  "9" => "Вантажний а/м, більше 2т",
  "10" => "Пасажирський автобус, до 20 осіб",
  "11" => "Пасажирський автобус, більше 20 осіб",
  "12" => "Причіп до легкового а/м",
  "13" => "Причіп до грузового а/м"
);
$priv = array(
  "0" => "Відсутні",
  "1" => "Так",
);
$CityName = explode( ",", $_POST[ "CityName" ] )[ 0 ];
?>
<!DOCTYPE html>
<html>
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7VL78TN49N"></script> 
<script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7VL78TN49N');
  </script> 
<script>
      function unpriv() {
        var $priv = document.getElementById("priv"),
            $minus = document.getElementById("minus"),
            $bpriv = document.getElementById("bpriv"),
            $regAbr = document.getElementById("registeredAbroad");
            $uaregCity = document.getElementById("uaregCity");
            $abrregCity = document.getElementById("abrregCity");
            $type = $("#vehicleForm input[name='type']:checked").val();
            $typev = $("#vehicleForm input[name='vehicle']:checked").val();
        if ((($type === "6") || $regAbr.checked) || (($typev !== "0") && ($typev !== "4"))){
          $priv.checked = false;
          $minus.classList.remove("fa-check-square-o");
          $minus.classList.add("fa-minus-square-o");
          $bpriv.style.cursor = "auto";
        } else {
          $minus.classList.remove("fa-minus-square-o");
          $minus.classList.add("fa-check-square-o");
          $priv.checked = false;
          $bpriv.style.cursor = "";
        }
        if ($regAbr.checked) {
          $uaregCity.style.display = "none";
          $abrregCity.style.display = "inline-block";
        } else {
          $uaregCity.style.display = "inline-block";
          $abrregCity.style.display = "none";
        }
      }
    </script>
<meta charset="utf-8"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<title>Сервіс продажу електронних полісів ОСЦПВ</title>
<meta name="keywords" content="Онлайн, онлайн, Страхування, страхування, Страхование, страхование, Електронний, електронний, Электронный, электронный, Поліс, поліс, Полис, поліс, ОСЦПВ, ОСАГО, Автоцивілка, автоцивілка, Автогражданка, автогражданка, Європротокол, європротокол, Европротокол, европротокол"/>
<meta name="description" content="Онлайн страхування ОСЦПВ."/>
<meta property="og:url" content="https://epolis.in.ua"/>
<meta property="og:title" content="Сервіс з продажу електронних полісів ОСЦПВ"/>
<meta property="og:description" content="Онлайн страхування ОСЦПВ."/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Epolis"/>
<meta property="og:image" content="assets/images/epolis.png"/>
<meta name="format-detection" content="telephone=no"/>
<meta http-equiv="x-dns-prefetch-control" content="on"/>
<meta name="robots" content="nofollow"/>
<link rel="canonical" href="/"/>
<link rel="shortcut icon" href="assets/icons/epolis_favicon.png" type="image/x-icon"/>
<link href="assets/css/bootstrap-4.4.1.css" rel="stylesheet" type="text/css">
<link href="assets/css/grid-3.0.css?v=1.0.1" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/blocks-2.15.css?v=1.0.1" rel="stylesheet"  type="text/css" media="all"/>
<link href="assets/css/animation-1.0.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/menusub-1.0.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/font-awesome.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/normalize.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/jquery.auto-complete.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/default.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/default.date.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/ion.rangeSlider.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/ion.rangeSlider.skin.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/styles.css" rel="stylesheet" type="text/css" media="all"/>
<style type="text/css">
.tab_header {
	height: 32px;
	text-align: left;
}
</style>
<script src="assets/js/jquery-1.10.2.js"></script>
<!--
      <script type="text/javascript">
      document.ondragstart = noselect;
      // запрет на перетаскивание
      document.onselectstart = noselect;
      // запрет на выделение элементов страницы
      document.oncontextmenu = noselect;
      // запрет на выведение контекстного Меню
      function noselect() {return false;}
      </script>
    -->
</head>
<body style="padding-top: 0">
<div id="rec195768390" class="r t-rec t-rec_pb_0" style="padding-bottom:0px; " data-animationappear="off" data-record-type="446">
  <div class="t446__mobile">
    <div class="t446__mobile_container">
      <div class="t446__mobile_text t-name t-name_md" field="text" style="font-family:epolis; font-size:14px;">epolis</div>
      <div class="t446__mobile_burger"> </div>
    </div>
  </div>
  <div id="nav195768390" class="t446 t446__hidden t446__positionfixed " style="background-color: rgba(33,33,33,1); height:80px; " data-bgcolor-hex="#212121" data-bgcolor-rgba="rgba(33,33,33,1)" data-navmarker="nav195768390marker" data-appearoffset="" data-bgopacity-two="70" data-menushadow="" data-bgopacity="1" data-bgcolor-rgba-afterscroll="rgba(33,33,33,0.70)" data-menu-items-align="center" data-menu="yes">
    <div id="rec" class="r t-rec t-rec_pb_0" style="padding-bottom:0px; " data-animationappear="off" data-record-type="446">
      <div class="t446__mobile">
        <div class="t446__mobile_container">
          <div class="t446__mobile_text t-name t-name_md" field="text" style="font-family:epolis; font-size:14px;">epolis</div>
          <div class="t446__mobile_burger"> </div>
        </div>
      </div>
      <div id="nav" class="t446 t446__hidden t446__positionfixed " style="background-color: rgba(33,33,33,1); height:80px; " data-bgcolor-hex="#212121" data-bgcolor-rgba="rgba(33,33,33,1)" data-navmarker="nav195768390marker" data-appearoffset="" data-bgopacity-two="70" data-menushadow="" data-bgopacity="1" data-bgcolor-rgba-afterscroll="rgba(33,33,33,0.70)" data-menu-items-align="center" data-menu="yes">
        <div class="t446__maincontainer">
          <div class="t446__logowrapper">
            <div class="t446__logowrapper2">
              <div style="display: block;"> <a href="/" style="color:#ffffff;font-weight:600;"> <img src="../assets/images/logo-epolis.png" class="t446__imglogo t446__imglogomobile" imgfield="img" style="max-width: 130px; width: 130px;" alt=""> </a> </div>
            </div>
          </div>
          <div class="t446__leftwrapper" style=" padding-right:115px; text-align: left;">
            <div class="t446__leftmenuwrapper">
              <ul class="t446__list">
                <li class="t446__list_item"> <a class="t-menu__link-item t-active" href="" data-menu-submenu-hook="" style="color:#ffffff;font-size:14px;font-weight:600;padding:0 0px;" data-menu-item-number="2">ОСЦПВ</a> </li>
              </ul>
            </div>
          </div>
          <div class="t446__rightwrapper" style=" padding-left:100px; text-align: right;">
            <div class="t446__additionalwrapper">
              <div class="t446__right_descr">
                <ul class="header__tels">
                  <li class="header__tels-item first">
                    <svg class="header__tels-icon first" width="22" height="20" viewBox="0 0 65 75" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="#00a0ff" stroke-width="8" stroke-linecap="round">
                        <path d="M36,9 V23.5"/>
                        <path d="M36,9 V23.5" transform="rotate(72 36 37)"/>
                        <path d="M36,9 V23.5" transform="rotate(144 36 37)"/>
                        <path d="M36,9 V23.5" transform="rotate(216 36 37)"/>
                        <path d="M36,9 V23.5" transform="rotate(288 36 37)"/>
                      </g>
                    </svg>
                    <a class="op-hover" href="tel:+380675776618" style="color: #ffffff; font-size:14px;">(067) 577−66−18</a> </li>
                  <li class="header__tels-item second">
                    <svg class="header__tels-icon second" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path d="M19.6135 18.8085L18.9498 21.2854C18.8892 21.5156 18.7811 21.7306 18.6325 21.9166C18.4839 22.1026 18.2982 22.2555 18.0871 22.3655C17.876 22.4756 17.6442 22.5403 17.4067 22.5556C17.1691 22.5709 16.931 22.5364 16.7075 22.4544C14.2409 21.4976 12.0331 19.9755 10.2615 18.0105C8.60628 16.2084 7.36817 14.0639 6.63507 11.7294C5.81687 9.20159 5.60562 6.51662 6.01842 3.89199C6.05897 3.65815 6.14776 3.43531 6.27914 3.23766C6.41053 3.04002 6.58163 2.87189 6.78155 2.74399C6.98147 2.6161 7.20583 2.53123 7.44035 2.49479C7.67487 2.45835 7.9144 2.47115 8.1437 2.53236L10.6206 3.19604C11.0223 3.29946 11.3728 3.54543 11.6066 3.88811C11.8404 4.23079 11.9416 4.64679 11.8913 5.05858C11.7835 5.87925 11.7688 6.70949 11.8476 7.53346C11.8795 7.85873 11.8175 8.18634 11.6689 8.47745C11.5204 8.76856 11.2914 9.01098 11.0093 9.17598L9.67981 9.94358C10.3013 12.3255 11.5542 14.4955 13.3062 16.2247L14.6357 15.4571C14.9197 15.2953 15.2441 15.2183 15.5705 15.2351C15.8969 15.252 16.2116 15.3621 16.4774 15.5524C17.1515 16.0326 17.8779 16.435 18.6425 16.752C19.0284 16.916 19.3406 17.2162 19.5196 17.5954C19.6986 17.9745 19.7321 18.4063 19.6135 18.8085Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <a class="op-hover" href="tel:+380577523240" style="color: #ffffff; font-size:14px;">(057) 752−32−40</a> </li>
                  <li class="header__tels-item third">
                    <svg class="header__tels-icon third" width="102" height="32" viewBox="-10 -10 46 46" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path fill="#fff" d="M0 16C0 7.16 7.337 0 16.387 0 25.445 0 32.78 7.16 32.78 16s-7.335 16-16.393 16c-1.787 0-3.505-.28-5.114-.792 1.165-6.604 5.436-11.99 11.08-14.275a3.675 3.675 0 0 0 2.76 1.233c2.011 0 3.64-1.593 3.64-3.56 0-1.965-1.629-3.558-3.64-3.558-2.012 0-3.64 1.588-3.645 3.551-7.203 2.115-13.039 7.024-16 13.333a16.091 16.091 0 0 1-2.506-2.755c.17-6.144 3.283-11.513 7.944-14.677a3.675 3.675 0 0 0 2.725 1.197c2.013 0 3.643-1.598 3.643-3.56 0-1.967-1.63-3.559-3.643-3.559-2.015 0-3.645 1.592-3.645 3.56 0 .102.007.207.015.305C5.66 9.93 2.096 12.872.011 16.62.001 16.418 0 16.207 0 16"/>
                        <path fill="#fff" d="M96.78 20.488V8.04c0-.164-.084-.235-.285-.235h-3.338c-.195 0-.279.071-.279.235v13.342c0 2.4 1.107 2.813 3.655 2.813.078 0 .142-.007.2-.058.058-.044.047-.169.047-.169v-3.48zM44.488 20.486V8.041c0-.163-.09-.236-.286-.236h-3.334c-.196 0-.283.073-.283.236v13.34c0 2.4 1.107 2.814 3.649 2.814.085 0 .143-.006.205-.057.053-.046.049-.168.049-.168v-3.484zM52.816 24.195c-.164 0-.234-.07-.234-.235v-8.755c0-.094-.047-.14-.139-.14h-.7c-.163 0-.23-.068-.23-.234v-1.937c0-.161.067-.234.23-.234h.7c.092 0 .139-.046.139-.138v-.816c0-2.732 1.26-3.901 3.96-3.901h1.759c.164 0 .236.071.236.235v2.108c0 .166-.072.233-.236.233h-1.198c-1.028 0-1.28.257-1.28 1.216v.925c0 .092.046.138.137.138h1.487c.163 0 .234.073.234.234v1.937c0 .166-.071.235-.234.235H55.96c-.091 0-.137.045-.137.139v8.755c0 .165-.073.235-.234.235h-2.773zM46.328 10.146c-.194 0-.28-.063-.28-.212V8.02c0-.15.086-.215.28-.215h3.345c.193 0 .278.065.278.215v1.914c0 .15-.085.212-.278.212h-3.345zM46.328 24.195c-.194 0-.28-.071-.28-.239V12.724c0-.163.086-.236.28-.236h3.345c.193 0 .278.073.278.236v11.232c0 .168-.085.24-.278.24h-3.345zM71.34 21.027c-.23-.673-.316-1.576-.316-2.687 0-1.11.085-2.013.316-2.682.644-2.06 2.413-3.17 4.804-3.17 1.834 0 3.374.835 4.2 2.105.068.117.068.232-.045.326l-2 1.316c-.137.092-.253.072-.342-.045-.463-.647-1.058-.972-1.77-.972-.897 0-1.469.395-1.723 1.203-.138.392-.205 1.043-.205 1.92 0 .88.067 1.525.205 1.922.254.808.826 1.201 1.723 1.201.712 0 1.307-.322 1.77-.97.09-.115.205-.14.342-.046l2 1.319c.113.09.113.206.045.325-.826 1.267-2.366 2.103-4.2 2.103-2.391 0-4.16-1.111-4.804-3.168M88.635 17.162c.1 0 .144-.047.147-.138 0-.302-.046-.58-.123-.834-.292-.81-.897-1.225-1.93-1.225-.916 0-1.755.416-2.05 1.225-.073.255-.12.532-.12.834 0 .09.047.138.143.138h3.933zm-7.076 3.843c-.268-.79-.388-1.67-.388-2.665 0-1.038.092-1.942.364-2.682.689-2.013 2.58-3.17 5.109-3.17 2.578 0 4.447 1.182 5.138 3.148.265.785.316 1.94.316 3.448 0 .16-.098.228-.274.228h-7.057c-.098 0-.147.05-.147.139.026.232.012.44.082.624.318.996 1.154 1.481 2.461 1.483.951.002 1.71-.283 2.187-.595.437-.287.43-.387.674-.2l1.829 1.235c.165.113.147.208.023.322-1.251 1.251-2.922 1.875-5.06 1.875-2.677 0-4.568-1.158-5.257-3.19zM66.001 17.162c.1 0 .148-.047.148-.138 0-.302-.048-.58-.124-.834-.292-.81-.896-1.225-1.926-1.225-.923 0-1.758.416-2.05 1.225a2.876 2.876 0 0 0-.124.834c0 .09.046.138.148.138h3.928zm-7.076 3.843c-.268-.79-.388-1.67-.388-2.665 0-1.038.093-1.942.365-2.682.688-2.013 2.58-3.17 5.11-3.17 2.576 0 4.447 1.182 5.133 3.148.269.785.318 1.94.318 3.448 0 .16-.097.228-.268.228h-7.061c-.098 0-.144.05-.144.139.019.232.01.44.083.624.317.996 1.15 1.481 2.456 1.483.956.002 1.713-.283 2.192-.595.434-.287.429-.387.67-.2l1.83 1.235c.162.113.147.208.026.322-1.256 1.251-2.923 1.875-5.06 1.875-2.681 0-4.575-1.158-5.262-3.19zM101.463 20.488V8.04c0-.164-.085-.235-.284-.235H97.84c-.195 0-.28.071-.28.235v13.342c0 2.4 1.107 2.813 3.65 2.813.079 0 .142-.007.204-.058.054-.044.048-.169.048-.169v-3.48z"/>
                      </g>
                    </svg>
                    <a class="op-hover" href="tel:+380933505353" style="color: #ffffff; font-size:14px;">(093) 350−53−53</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
          @media screen and (max-width: 980px) {
          #rec195768390 .t446__leftcontainer {
          padding: 20px;
          }
          }
          
          @media screen and (max-width: 980px) {
          #rec195768390 .t446__imglogo {
          padding: 20px 0;
          }
          }
        </style>
      <script type="text/javascript">
          var t446__doResize;
          $(window).resize(function() {
            t446_checkOverflow('195768390', '100');
            clearTimeout(t446__doResize);
            t446__doResize = setTimeout(function() {
              t446_checkOverflow('195768390', '100');
            }, 200);
          });
          $(window).load(function() {
            t446_checkOverflow('195768390', '100');
          });
          $(document).ready(function() {
            t446_checkOverflow('195768390', '100');
          });
          $(document).ready(function() {
            t446_highlight();
            t446_checkAnchorLinks('195768390');
          });
          $(window).resize(function() {
            t446_setBg('195768390');
          });
          $(document).ready(function() {
            t446_setBg('195768390');
          });
          $(document).ready(function() {
            t446_changebgopacitymenu('195768390');
            $(window).bind('scroll', t_throttle(function() {
              t446_changebgopacitymenu('195768390')
            }, 200));
          });
        </script> 
      <script type="text/javascript">
          $(document).ready(function() {
            t446_createMobileMenu('195768390');
          });
        </script>
      <style>
          #rec195768390 .t-menu__link-item {
          -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
          transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
          position: relative;
          }
          
          #rec195768390 .t-menu__link-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 20%;
          opacity: 0;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #ffffff;
          -webkit-box-shadow: inset 0px -1px 0px 0px #ffffff;
          -moz-box-shadow: inset 0px -1px 0px 0px #ffffff;
          box-shadow: inset 0px -1px 0px 0px #ffffff;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          }
          
          #rec195768390 .t-menu__link-item.t-active {
          color: #1aa989 !important;
          }
          
          #rec195768390 .t-menu__link-item.t-active::after {
          opacity: 1;
          bottom: -0px;
          border-bottom: 0px solid #1aa989;
          -webkit-box-shadow: inset 0px -1px 0px 0px #1aa989;
          -moz-box-shadow: inset 0px -1px 0px 0px #1aa989;
          box-shadow: inset 0px -1px 0px 0px #1aa989;
          }
          
          #rec195768390 .t-menu__link-item:not(.t-active):not(.tooltipstered):hover::after {
          opacity: 1;
          bottom: -1px;
          }
          
          @supports (overflow: -webkit-marquee) and (justify-content:inherit) {
          #rec195768390 .t-menu__link-item, #rec195768390 .t-menu__link-item.t-active {
          opacity: 1 !important;
          }
          }
        </style>
      <script type="text/javascript">
          $(document).ready(function() {
            setTimeout(function() {
              t_menusub_init('195768390');
            }, 500);
          });
        </script>
      <style>
          @media screen and (max-width: 980px) {
          #rec195768390 .t-menusub__menu .t-menusub__link-item {
          color:#ffffff !important;
          }
          
          #rec195768390 .t-menusub__menu .t-menusub__link-item.t-active {
          color: #ffffff !important;
          }
          }
        </style>
      <!--[if IE 8]><style>#rec195768390 .t446 { filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#D9212121', endColorstr='#D9212121');
        }</style><![endif]--> 
    </div>
    <div class="t446__maincontainer">
      <div class="t446__logowrapper">
        <div class="t446__logowrapper2">
          <div style="display: block;"> <a href="/" style="color:#ffffff;font-weight:600;"> <img src="../assets/images/logo-epolis.png" class="t446__imglogo t446__imglogomobile" imgfield="img" style="max-width: 130px; width: 130px;" alt=""> </a> </div>
        </div>
      </div>
      <div class="t446__leftwrapper" style=" padding-right:115px; text-align: left;">
        <div class="t446__leftmenuwrapper">
          <ul class="t446__list">
            <li class="t446__list_item"> <a class="t-menu__link-item t-active" href="" data-menu-submenu-hook="" style="color:#ffffff;font-size:14px;font-weight:600;padding:0 0px;" data-menu-item-number="2">ОСЦПВ</a> </li>
          </ul>
        </div>
      </div>
      <div class="t446__rightwrapper" style=" padding-left:100px; text-align: right;">
        <div class="t446__additionalwrapper">
          <div class="t446__right_descr">
            <ul class="header__tels">
              <li class="header__tels-item first">
                <svg class="header__tels-icon first" width="22" height="20" viewBox="0 0 65 75" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#00a0ff" stroke-width="8" stroke-linecap="round">
                    <path d="M36,9 V23.5"/>
                    <path d="M36,9 V23.5" transform="rotate(72 36 37)"/>
                    <path d="M36,9 V23.5" transform="rotate(144 36 37)"/>
                    <path d="M36,9 V23.5" transform="rotate(216 36 37)"/>
                    <path d="M36,9 V23.5" transform="rotate(288 36 37)"/>
                  </g>
                </svg>
                <a class="op-hover" href="tel:+380675776618" style="color: #ffffff; font-size:14px;">(067) 577−66−18</a> </li>
              <li class="header__tels-item second">
                <svg class="header__tels-icon second" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M19.6135 18.8085L18.9498 21.2854C18.8892 21.5156 18.7811 21.7306 18.6325 21.9166C18.4839 22.1026 18.2982 22.2555 18.0871 22.3655C17.876 22.4756 17.6442 22.5403 17.4067 22.5556C17.1691 22.5709 16.931 22.5364 16.7075 22.4544C14.2409 21.4976 12.0331 19.9755 10.2615 18.0105C8.60628 16.2084 7.36817 14.0639 6.63507 11.7294C5.81687 9.20159 5.60562 6.51662 6.01842 3.89199C6.05897 3.65815 6.14776 3.43531 6.27914 3.23766C6.41053 3.04002 6.58163 2.87189 6.78155 2.74399C6.98147 2.6161 7.20583 2.53123 7.44035 2.49479C7.67487 2.45835 7.9144 2.47115 8.1437 2.53236L10.6206 3.19604C11.0223 3.29946 11.3728 3.54543 11.6066 3.88811C11.8404 4.23079 11.9416 4.64679 11.8913 5.05858C11.7835 5.87925 11.7688 6.70949 11.8476 7.53346C11.8795 7.85873 11.8175 8.18634 11.6689 8.47745C11.5204 8.76856 11.2914 9.01098 11.0093 9.17598L9.67981 9.94358C10.3013 12.3255 11.5542 14.4955 13.3062 16.2247L14.6357 15.4571C14.9197 15.2953 15.2441 15.2183 15.5705 15.2351C15.8969 15.252 16.2116 15.3621 16.4774 15.5524C17.1515 16.0326 17.8779 16.435 18.6425 16.752C19.0284 16.916 19.3406 17.2162 19.5196 17.5954C19.6986 17.9745 19.7321 18.4063 19.6135 18.8085Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a class="op-hover" href="tel:+380577523240" style="color: #ffffff; font-size:14px;">(057) 752−32−40</a> </li>
              <li class="header__tels-item third">
                <svg class="header__tels-icon third" width="102" height="32" viewBox="-10 -10 46 46" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#fff" d="M0 16C0 7.16 7.337 0 16.387 0 25.445 0 32.78 7.16 32.78 16s-7.335 16-16.393 16c-1.787 0-3.505-.28-5.114-.792 1.165-6.604 5.436-11.99 11.08-14.275a3.675 3.675 0 0 0 2.76 1.233c2.011 0 3.64-1.593 3.64-3.56 0-1.965-1.629-3.558-3.64-3.558-2.012 0-3.64 1.588-3.645 3.551-7.203 2.115-13.039 7.024-16 13.333a16.091 16.091 0 0 1-2.506-2.755c.17-6.144 3.283-11.513 7.944-14.677a3.675 3.675 0 0 0 2.725 1.197c2.013 0 3.643-1.598 3.643-3.56 0-1.967-1.63-3.559-3.643-3.559-2.015 0-3.645 1.592-3.645 3.56 0 .102.007.207.015.305C5.66 9.93 2.096 12.872.011 16.62.001 16.418 0 16.207 0 16"/>
                    <path fill="#fff" d="M96.78 20.488V8.04c0-.164-.084-.235-.285-.235h-3.338c-.195 0-.279.071-.279.235v13.342c0 2.4 1.107 2.813 3.655 2.813.078 0 .142-.007.2-.058.058-.044.047-.169.047-.169v-3.48zM44.488 20.486V8.041c0-.163-.09-.236-.286-.236h-3.334c-.196 0-.283.073-.283.236v13.34c0 2.4 1.107 2.814 3.649 2.814.085 0 .143-.006.205-.057.053-.046.049-.168.049-.168v-3.484zM52.816 24.195c-.164 0-.234-.07-.234-.235v-8.755c0-.094-.047-.14-.139-.14h-.7c-.163 0-.23-.068-.23-.234v-1.937c0-.161.067-.234.23-.234h.7c.092 0 .139-.046.139-.138v-.816c0-2.732 1.26-3.901 3.96-3.901h1.759c.164 0 .236.071.236.235v2.108c0 .166-.072.233-.236.233h-1.198c-1.028 0-1.28.257-1.28 1.216v.925c0 .092.046.138.137.138h1.487c.163 0 .234.073.234.234v1.937c0 .166-.071.235-.234.235H55.96c-.091 0-.137.045-.137.139v8.755c0 .165-.073.235-.234.235h-2.773zM46.328 10.146c-.194 0-.28-.063-.28-.212V8.02c0-.15.086-.215.28-.215h3.345c.193 0 .278.065.278.215v1.914c0 .15-.085.212-.278.212h-3.345zM46.328 24.195c-.194 0-.28-.071-.28-.239V12.724c0-.163.086-.236.28-.236h3.345c.193 0 .278.073.278.236v11.232c0 .168-.085.24-.278.24h-3.345zM71.34 21.027c-.23-.673-.316-1.576-.316-2.687 0-1.11.085-2.013.316-2.682.644-2.06 2.413-3.17 4.804-3.17 1.834 0 3.374.835 4.2 2.105.068.117.068.232-.045.326l-2 1.316c-.137.092-.253.072-.342-.045-.463-.647-1.058-.972-1.77-.972-.897 0-1.469.395-1.723 1.203-.138.392-.205 1.043-.205 1.92 0 .88.067 1.525.205 1.922.254.808.826 1.201 1.723 1.201.712 0 1.307-.322 1.77-.97.09-.115.205-.14.342-.046l2 1.319c.113.09.113.206.045.325-.826 1.267-2.366 2.103-4.2 2.103-2.391 0-4.16-1.111-4.804-3.168M88.635 17.162c.1 0 .144-.047.147-.138 0-.302-.046-.58-.123-.834-.292-.81-.897-1.225-1.93-1.225-.916 0-1.755.416-2.05 1.225-.073.255-.12.532-.12.834 0 .09.047.138.143.138h3.933zm-7.076 3.843c-.268-.79-.388-1.67-.388-2.665 0-1.038.092-1.942.364-2.682.689-2.013 2.58-3.17 5.109-3.17 2.578 0 4.447 1.182 5.138 3.148.265.785.316 1.94.316 3.448 0 .16-.098.228-.274.228h-7.057c-.098 0-.147.05-.147.139.026.232.012.44.082.624.318.996 1.154 1.481 2.461 1.483.951.002 1.71-.283 2.187-.595.437-.287.43-.387.674-.2l1.829 1.235c.165.113.147.208.023.322-1.251 1.251-2.922 1.875-5.06 1.875-2.677 0-4.568-1.158-5.257-3.19zM66.001 17.162c.1 0 .148-.047.148-.138 0-.302-.048-.58-.124-.834-.292-.81-.896-1.225-1.926-1.225-.923 0-1.758.416-2.05 1.225a2.876 2.876 0 0 0-.124.834c0 .09.046.138.148.138h3.928zm-7.076 3.843c-.268-.79-.388-1.67-.388-2.665 0-1.038.093-1.942.365-2.682.688-2.013 2.58-3.17 5.11-3.17 2.576 0 4.447 1.182 5.133 3.148.269.785.318 1.94.318 3.448 0 .16-.097.228-.268.228h-7.061c-.098 0-.144.05-.144.139.019.232.01.44.083.624.317.996 1.15 1.481 2.456 1.483.956.002 1.713-.283 2.192-.595.434-.287.429-.387.67-.2l1.83 1.235c.162.113.147.208.026.322-1.256 1.251-2.923 1.875-5.06 1.875-2.681 0-4.575-1.158-5.262-3.19zM101.463 20.488V8.04c0-.164-.085-.235-.284-.235H97.84c-.195 0-.28.071-.28.235v13.342c0 2.4 1.107 2.813 3.65 2.813.079 0 .142-.007.204-.058.054-.044.048-.169.048-.169v-3.48z"/>
                  </g>
                </svg>
                <a class="op-hover" href="tel:+380933505353" style="color: #ffffff; font-size:14px;">(093) 350−53−53</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="order">
<table id="order_header">
        <tbody>
          <tr>
            <th width="280" class="tab_header">Тип транспортного засобу</th>
            <th width="100" class="tab_header">Франшиза</th>
            <th width="200" class="tab_header">До сплати</th>
          </tr>
          <tr>
            <td><?php echo $categ[$_POST["Type"]]; ?></td>
            <td><?php echo $_POST["Franshiza"] . '&nbsp;грн.'; ?></td>
            <td><?php echo $_POST["Price"] . '.00 грн.'; ?></td>
          </tr>
          <tr>
            <th class="tab_header">Місце реєстрації власника ТЗ</th>
            <th class="tab_header">Пільги</th>
            <th class="tab_header">Страхова компанія</th>
          </tr>
          <tr>
            <td height="4"><?php echo $CityName; ?></td>
            <td><?php echo $priv[$_POST["Priv"]]; ?></td>
            <td><?php echo htmlspecialchars($_POST["Name"]); ?></td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  <style>
          @media screen and (max-width: 980px) {
          #rec195768390 .t446__leftcontainer {
          padding: 20px;
          }
          }
          
          @media screen and (max-width: 980px) {
          #rec195768390 .t446__imglogo {
          padding: 20px 0;
          }
          }
        </style>
  <script type="text/javascript">
          var t446__doResize;
          $(window).resize(function() {
            t446_checkOverflow('195768390', '100');
            clearTimeout(t446__doResize);
            t446__doResize = setTimeout(function() {
              t446_checkOverflow('195768390', '100');
            }, 200);
          });
          $(window).load(function() {
            t446_checkOverflow('195768390', '100');
          });
          $(document).ready(function() {
            t446_checkOverflow('195768390', '100');
          });
          $(document).ready(function() {
            t446_highlight();
            t446_checkAnchorLinks('195768390');
          });
          $(window).resize(function() {
            t446_setBg('195768390');
          });
          $(document).ready(function() {
            t446_setBg('195768390');
          });
          $(document).ready(function() {
            t446_changebgopacitymenu('195768390');
            $(window).bind('scroll', t_throttle(function() {
              t446_changebgopacitymenu('195768390')
            }, 200));
          });
        </script> 
  <script type="text/javascript">
          $(document).ready(function() {
            t446_createMobileMenu('195768390');
          });
        </script>
  <style>
          #rec195768390 .t-menu__link-item {
          -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
          transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
          position: relative;
          }
          
          #rec195768390 .t-menu__link-item::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 20%;
          opacity: 0;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #ffffff;
          -webkit-box-shadow: inset 0px -1px 0px 0px #ffffff;
          -moz-box-shadow: inset 0px -1px 0px 0px #ffffff;
          box-shadow: inset 0px -1px 0px 0px #ffffff;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          }
          
          #rec195768390 .t-menu__link-item.t-active {
          color: #1aa989 !important;
          }
          
          #rec195768390 .t-menu__link-item.t-active::after {
          opacity: 1;
          bottom: -0px;
          border-bottom: 0px solid #1aa989;
          -webkit-box-shadow: inset 0px -1px 0px 0px #1aa989;
          -moz-box-shadow: inset 0px -1px 0px 0px #1aa989;
          box-shadow: inset 0px -1px 0px 0px #1aa989;
          }
          
          #rec195768390 .t-menu__link-item:not(.t-active):not(.tooltipstered):hover::after {
          opacity: 1;
          bottom: -1px;
          }
          
          @supports (overflow: -webkit-marquee) and (justify-content:inherit) {
          #rec195768390 .t-menu__link-item, #rec195768390 .t-menu__link-item.t-active {
          opacity: 1 !important;
          }
          }
        </style>
  <script type="text/javascript">
          $(document).ready(function() {
            setTimeout(function() {
              t_menusub_init('195768390');
            }, 500);
          });
        </script>
  <style>
          @media screen and (max-width: 980px) {
          #rec195768390 .t-menusub__menu .t-menusub__link-item {
          color:#ffffff !important;
          }
          
          #rec195768390 .t-menusub__menu .t-menusub__link-item.t-active {
          color: #ffffff !important;
          }
          }
        </style>
  <!--[if IE 8]><style>#rec195768390 .t446 { filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#D9212121', endColorstr='#D9212121');
        }</style><![endif]--> 
</div>
<div class="b-block_footer">
  <div class="t574">
    <div class="t-container">
      <div class="t-col t-col_8 t-prefix_2 t-align_center">
        <div class="t574__text t-text t-descr_xl" style="font-family:Roboto;font-size:18px;font-weight:500;" field="text"> <a href="/cdn-cgi/l/email-protection#36455344405f5553765346595a5f45185f58184357" style="color:#ffffff;text-decoration:none"> <span class="__cf_email__" data-cfemail="55263027233c36301530253a393c267b3c3b7b2034">[email &#160;protected]</span> </a>
          <p style="color:#8a8a8a;font-family:Roboto;font-size:14px;font-weight:400;">©&nbsp;<span style="font-family:epolis;font-size:10px;">epolis</span>,&nbsp;2010-2020</p>
        </div>
      </div>
    </div>
  </div>
</div>
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6KHPXH" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>
</html>
