<?php

use Detection\MobileDetect;

require_once "../assets/libs/MobileDetect.php";
    $detect = new MobileDetect;
    ?>
<!DOCTYPE html>
<html lang="UA">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7VL78TN49N"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7VL78TN49N');
    </script>
    <script>
      function unpriv() {
          let $priv = document.getElementById("priv"),
              $minus = document.getElementById("minus"),
              $bpriv = document.getElementById("bpriv"),
              $regAbr = document.getElementById("registeredAbroad");
          let $uaregCity = document.getElementById("uaregCity");
          let $abrregCity = document.getElementById("abrregCity");
          let $type = $("#vehicleForm input[name='type']:checked").val();
          let $typev = $("#vehicleForm input[name='vehicle']:checked").val();
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
    <!--metatextblock-->
    <title>Сервіс продажу електронних полісів ОСЦПВ</title>
    <meta name="keywords" content="Онлайн, онлайн, Страхування, страхування, Страхование, страхование, Електронний, електронний, Электронный, электронный, Поліс, поліс, Полис, поліс, ОСЦПВ, ОСАГО, Автоцивілка, автоцивілка, Автогражданка, автогражданка, Європротокол, європротокол, Европротокол, европротокол"/>
    <meta name="description" content="Онлайн страхування ОСЦПВ."/>
    <meta property="og:url" content="https://epolis.in.ua"/>
    <meta property="og:title" content="Сервіс з продажу електронних полісів ОСЦПВ"/>
    <meta property="og:description" content="Онлайн страхування ОСЦПВ."/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="Epolis"/>
    <meta property="og:image" content="assets/images/epolis.png"/>
    <link rel="canonical" href="/"/>
    <!--metatextblock-->
    <!-- <meta property="fb:app_id" content="257953674358265"/> -->
    <meta name="format-detection" content="telephone=no"/>
    <meta http-equiv="default-style" content="on"/>
    <meta name="robots" content="nofollow"/>
    <link rel="shortcut icon" href="assets/icons/epolis_favicon.png" type="image/x-icon"/>
    <!-- Assets -->
    <link href="assets/css/grid-3.0.css?v1.0.1" rel="stylesheet" type="text/css" media="all"/>
    <link href="../assets/css/blocks.css?v1.0.2" rel="stylesheet"  type="text/css" media="all"/>
    <link href="assets/css/animation-1.0.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/menusub-1.0.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/font-awesome.css?v=3.2.1" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/normalize.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/jquery.auto-complete.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/default.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/default.date.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/ion.rangeSlider.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/ion.rangeSlider.skin.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="assets/css/styles.css?v=1.8.2" rel="stylesheet" type="text/css" media="all"/>

    <script src="assets/js/unpriv.js"></script>
    <script src="assets/js/jquery-1.10.2.js?v=1.10.6"></script>
    <script src="../assets/js/scripts-2.8.js"></script>
    <script src="../assets/js/blocks-2.8.js"></script>
    <script src="assets/js/lazyload-1.5.js"></script>
    <script src="assets/js/animation-1.0.js"></script>
    <script src="assets/js/forms-1.0.js"></script>
    
    <script src="assets/js/jquery.maskedinput.min.js"></script>
    <script src="assets/js/jquery.newmaskedinput.min.js"></script>
    <script src="assets/js/jquery.selectric.min.js"></script>
    <script src="assets/js/jquery.auto-complete.min.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/jQvalidateCore.js"></script>
    <script src="assets/js/jQvalidatePattern.js"></script>
    <script src="assets/js/jQvalidateMessages_ru.js"></script>
    <script src="assets/js/picker.js"></script>
    <script src="assets/js/picker.date.js"></script>
    <script src="assets/js/pickaday_rus.js"></script>
    <script src="assets/js/ion.rangeSlider.min.js"></script>
    <script src="assets/js/ep-calc.js?n=1.4.1"></script>

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
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6KHPXH" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="allrecords" class="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2206471" data-tilda-page-id="11637466" data-tilda-formskey="0d1ab035bf7ce673910d0969775be8a9">
      <div id="rec195768390" class="r t-rec t-rec_pb_0" style="padding-bottom:0; " data-animationappear="off" data-record-type="446">
        <!-- T446 -->
        <div class="t446__mobile">
          <div class="t446__mobile_container">
            <div class="t446__mobile_text t-name t-name_md" style="font-family:epolis,serif; font-size:14px;">epolis</div>
            <div class="t446__mobile_burger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
			</div>
          </div>
        </div>
        <div id="nav195768390" class="t446 t446__hidden t446__positionfixed" style="background-color: #212121; height:80px;">
          <div class="t446__maincontainer">
            <div class="t446__logowrapper">
              <div class="t446__logowrapper2">
                <div style="display: block;">
                  <a href="/">
                    <img src="../assets/images/logo-epolis.png" class="t446__imglogo t446__imglogomobile" style="max-width: 130px; width: 130px;" alt="">
                  </a>
                </div>
              </div>
            </div>
            <div class="t446__leftwrapper" style=" padding-right:115px; text-align: left;">
              <div class="t446__leftmenuwrapper">
                <ul class="t446__list">
                  <li class="t446__list_item">
                    <a class="t-menu__link-item" href="/">На головну</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="t446__rightwrapper" style=" padding-left:100px; text-align: right;">
              <div class="t446__additionalwrapper">
                            <div class="t446__right_descr">
                                <?php
                                    if ( $detect->isMobile() && !$detect->isTablet() ) {
                                      echo '<ul class="header__tels_mob">';
                                    }
                                    else {
                                      echo '<ul class="header__tels">';
                                    }
                                    ?>
                                <li class="header__tels-item first">
                                    <img class="header__tels-icon first" src="/assets/icons/viber.png" alt=""/>
                                    <a class="op-hover" href="tel:+380679465625" style="color: #ffffff; font-size:14px;">(067) 946−56−25</a>
                                </li>
                                <li class="header__tels-item second">
                                    <?php
                                        if ( $detect->isMobile() && !$detect->isTablet() ) {
                                          echo '<img class="header__tels-icon" src="/assets/icons/whatsapp.png" alt=""/>';
                                        }
                                        else {
                                          echo '
										    <img class="header__tels-icon-second" src="/assets/icons/whatsapp.png" alt=""/>
                                            <svg class="header__tels-icon-sec" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none">
                                              <path d="M19.6135 18.8085L18.9498 21.2854C18.8892 21.5156 18.7811 21.7306 18.6325 21.9166C18.4839 22.1026 18.2982 22.2555 18.0871 22.3655C17.876 22.4756 17.6442 22.5403 17.4067 22.5556C17.1691 22.5709 16.931 22.5364 16.7075 22.4544C14.2409 21.4976 12.0331 19.9755 10.2615 18.0105C8.60628 16.2084 7.36817 14.0639 6.63507 11.7294C5.81687 9.20159 5.60562 6.51662 6.01842 3.89199C6.05897 3.65815 6.14776 3.43531 6.27914 3.23766C6.41053 3.04002 6.58163 2.87189 6.78155 2.74399C6.98147 2.6161 7.20583 2.53123 7.44035 2.49479C7.67487 2.45835 7.9144 2.47115 8.1437 2.53236L10.6206 3.19604C11.0223 3.29946 11.3728 3.54543 11.6066 3.88811C11.8404 4.23079 11.9416 4.64679 11.8913 5.05858C11.7835 5.87925 11.7688 6.70949 11.8476 7.53346C11.8795 7.85873 11.8175 8.18634 11.6689 8.47745C11.5204 8.76856 11.2914 9.01098 11.0093 9.17598L9.67981 9.94358C10.3013 12.3255 11.5542 14.4955 13.3062 16.2247L14.6357 15.4571C14.9197 15.2953 15.2441 15.2183 15.5705 15.2351C15.8969 15.252 16.2116 15.3621 16.4774 15.5524C17.1515 16.0326 17.8779 16.435 18.6425 16.752C19.0284 16.916 19.3406 17.2162 19.5196 17.5954C19.6986 17.9745 19.7321 18.4063 19.6135 18.8085Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
										  ';
                                        }
                                    ?>
                                    <a class="op-hover" href="tel:+380679465625" style="color: #ffffff; font-size:14px;">(067) 946−56−25</a>
                                </li>
                                <li class="header__tels-item third">
                                    <img class="header__tels-icon third" src="/assets/icons/telegram.png" alt=""/>
                                    <a class="op-hover" href="tel:+380679465625" style="color: #ffffff; font-size:14px;">(067) 946−56−25</a>
                                </li>
                            </div>
              </div>
            </div>
          </div>
        </div>
        <script type="text/javascript">
            let t446__doResize;
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
      </div>
      <section class="b-section_calculator osago" id="calculator">
        <div class="b-container_preloader" style="display:none">
          <div class="b-wrap_preloader">
            <div class="md-preloader ">
              <svg xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewbox="0 0 75 75">
                <circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="js-ajax_calculator_old_class">
          <div class="b-container b-container__calculator_vehicle">
            <div class="b-calculator_vehicle">		
              <h1 class="b-calculator__heading_main">Електронний поліс ОСЦПВ</h1>
              <span class="b-section__subheading">Розрахувати:</span>
              <div class="b-choose-steps">
                <input type="radio" class="sr-only" id="g_number_vehicle" value="g_number_vehicle" name="g_number_vehicle" checked/>
                <label class="b-choose-step b-choose-step_active js-choose-step_active" for="g_number_vehicle">
                  <span class="b-choose-step__back">
                    <span class="b-choose-step__title">За держ. номером</span>
                  </span>
                </label>
                <input type="radio" class="sr-only" id="params_vehicle" value="params_vehicle" name="params_vehicle" checked/>
                <label class="b-choose-step" for="params_vehicle">
                  <span class="b-choose-step__back">
                    <span class="b-choose-step__title">По параметрам авто</span>
                  </span>
                </label>
              </div>
              <form action="" class="b-form_number_vehicle" id="numberVehicleForm">
                <div class="wrapper_block_params">
                  <div class="reg_number_and_franshiza_block">
                    <div class="b-block_g_number_registration">
                      <span class="b-number_vehicle__heading">
                        Реєстраційний номер авто 
                        <span class="b-icon_tolltip fa fa-question-circle hidden-xs" aria-hidden="true" style="display:none;visibility:hidden"
                        title="Тільки для авто з українською реєстрацією. Для іноземних номерів скористайтеся пошуком по параметрам.">
                        </span>
                      </span>
                      <input type="text" class="selectric" name="g_number_vehicle__input" maxlength="8" id="g_number_vehicle__input" title="Введіть номер авто" value="" autocomplete="off"/>
                    </div>
                  </div>
                  <div class="reg_place_and_checkbox_block">
                    <div class="b-block_g_select_city_registration">
                      <span class="reg_place_by_numb">
                        Місце реєстрації власника ТЗ
                      </span>
                      <div class="b-block_select b-selectBlock_registration">
                          <label for="regCityNumberForm"></label>
                          <input required type="text" class="b-autocomplete b-autocomplete_vehicle selectric" id="regCityNumberForm" value=""/>
                        <input type="hidden" class="hidden" name="regCityIdNumberForm" id="regCityIdNumberForm" value="1"/>
                        <div class="autocomplete-suggestions b-precomplete_brand js-precomplete">
                          <div class="autocomplete-suggestion" data-id="1">м. Київ, Київськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="9">м. Харків, Харківськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="15">м. Львів, Львівськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="10">м. Одеса, Одеськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="14">м. Дніпро, Дніпропетровськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="12">м. Запоріжжя, Запоріжська обл.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label class="b-block_checkbox2" id="bpriv">
                  <input type="checkbox" class="sr-only" id="priv" value="true" name="n_priv">
                  <span class="fa fa-check-square-o" id="minus" aria-hidden="true"></span>
                  <span class="fa fa-square-o" aria-hidden="true"></span>
                  <span style="font-size:20px; font-weight:400">Є пільги</span>
                </label>
                <div class="b-block_franshiza">
                  <span class="b-g_number__heading b-g_number__heading_registration" style="white-space: nowrap">
                    Виберіть франшизу
                  </span>
                    <label>
                        <input type="text" name="franshiza" class="js-range_franshiza" data-from="3200"/>
                    </label>
                </div> 
                <button id="calculate_number" type="submit" class="b-form__submit_number_vehicle">
                  <span class="b-text_btn">Розрахувати</span><span class="fa fa-caret-right" aria-hidden="true"></span>
                </button>
              </form>
              <form action="" class="b-form_calculator b-form_vehicle" style="display: none;" id="vehicleForm">
                <span class="b-calculator__heading">Тип транспортного засобу</span>
                <div class="b-vehicles">
                  <input type="radio" class="sr-only" id="car" value="0" name="vehicle" checked/>
                  <label class="b-vehicle t594__item_6-in-row b-vehicle_active js-vehicle_active" for="car">
                    <span class="b-vehicle__back">
                      <img class="svg-vehicle svg-vehicle_car" id="svg-car" type="image/svg+xml" src="assets/img/car.svg" alt="">
                      <span class="b-vehicle__title">Легковий автомобіль</span>
                    </span>
                  </label>
                  <input type="radio" class="sr-only" id="ecar" value="1" name="vehicle"/>
                  <label class="b-vehicle t594__item_6-in-row" for="ecar">
                    <span class="b-vehicle__back" >
                      <img class="svg-vehicle svg-vehicle_ecar" id="svg-ecar" type="image/svg+xml" src="assets/img/ecar.svg" alt="">
                      <span class="b-vehicle__title">Електромобіль</span>
                    </span>
                  </label>
                  <input type="radio" class="sr-only" id="truck" value="2" name="vehicle"/>
                  <label class="b-vehicle t594__item_6-in-row" for="truck">
                    <span class="b-vehicle__back">
                      <img class="svg-vehicle svg-vehicle_truck" id="svg-truck" type="image/svg+xml" src="assets/img/truck.svg" alt="">
                      <span class="b-vehicle__title">Вантажний автомобіль</span>
                    </span>
                  </label>
                  <input type="radio" class="sr-only" id="bus" value="3" name="vehicle"/>
                  <label class="b-vehicle t594__item_6-in-row" for="bus">
                    <span class="b-vehicle__back">
                      <img class="svg-vehicle svg-vehicle_bus" id="svg-bus" type="image/svg+xml" src="assets/img/bus.svg" alt="">
                      <span class="b-vehicle__title">Пасажирський автобус</span>
                    </span>
                  </label>
                  <input type="radio" class="sr-only" id="bike" value="4" name="vehicle"/>
                  <label class="b-vehicle t594__item_6-in-row" for="bike">
                    <span class="b-vehicle__back">
                      <img class="svg-vehicle svg-vehicle_bike" id="svg-bike" type="image/svg+xml" src="assets/img/bike.svg" alt="">
                      <span class="b-vehicle__title">Мотоцикл, моторолер</span>
                    </span>
                  </label>
                  <input type="radio" class="sr-only" id="trailer" value="5" name="vehicle"/>
                  <label class="b-vehicle t594__item_6-in-row" for="trailer">
                    <span class="b-vehicle__back">
                      <img class="svg-vehicle svg-vehicle_trailer" id="svg-trailer" type="image/svg+xml" src="assets/img/trailer.svg" alt="">
                      <span class="b-vehicle__title">Причіп, трейлер</span>
                    </span>
                  </label>
                </div>
                <div class="b-vehicle__params">
                  <div class="b-params b-params_car js-params_active b-params_active">
                    <span class="b-calculator__heading_registration">
                      Об&#039;єм двигуна
                    </span>
                    <input type="radio" class="radio sr-only" id="small" value="3" name="type" onclick="unpriv()" checked/>
                    <label for="small">до 1600 см<sup>3</sup></label>
                    <input type="radio" class="radio sr-only" id="middle" value="4" name="type" onclick="unpriv()"/>
                    <label for="middle">1601 - 2000 см<sup>3</sup></label>
                    <input type="radio" class="radio sr-only" id="large" value="5" name="type" onclick="unpriv()"/>
                    <label for="large">2001 - 3000 см<sup>3</sup></label>
                    <input type="radio" class="radio sr-only" id="xlarge" value="6" name="type" onclick="unpriv()"/>
                    <label for="xlarge">від 3001 см<sup>3</sup></label>
                  </div>
                  <div class="b-params b-params_ecar">
                    <span class="b-calculator__heading_registration">
                      Електромобіль (крім гібридних авто)
                    </span>
                      <label for="tesla"></label>
                      <input type="radio" class="radio sr-only" id="tesla" value="7" name="type"/>
                    <span class="b-tesla" style="font-size:16px;opacity:0"><strong>Tesla</strong></span>
                  </div>
                  <div class="b-params b-params_truck">
                    <span class="b-calculator__heading_registration">
                      Вантажопідйомність
                    </span>
                    <input type="radio" class="radio sr-only" id="light" value="8" name="type"/>
                    <label for="light">до 2т</label>
                    <input type="radio" class="radio sr-only" id="heavy" value="9" name="type"/>
                    <label for="heavy">більше 2т</label>
                  </div>
                  <div class="b-params b-params_bus">
                    <span class="b-calculator__heading_registration">
                      Кількість місць
                    </span>
                    <input type="radio" class="radio sr-only" id="few" value="10" name="type"/>
                    <label for="few">до 20 осіб</label>
                    <input type="radio" class="radio sr-only" id="many" value="11" name="type"/>
                    <label for="many">більше 20 осіб</label>
                  </div>
                  <div class="b-params b-params_moto">
                    <span class="b-calculator__heading_registration">
                      Об&#039;єм двигуна
                    </span>
                    <input type="radio" class="radio sr-only" id="motorbike" value="1" name="type"/>
                    <label for="motorbike">до 300 см<sup>3</sup></label>
                    <input type="radio" class="radio sr-only" id="motorcycle" value="2" name="type"/>
                    <label for="motorcycle">більше 300 см<sup>3</sup></label>
                  </div>
                  <div class="b-params b-params_trailer">
                    <span class="b-calculator__heading_registration">
                      Тип
                    </span>
                    <input type="radio" class="radio sr-only" id="tr_light" value="12" name="type"/>
                    <label for="tr_light">до легкового авто</label>
                    <input type="radio" class="radio sr-only" id="tr_heavy" value="13" name="type"/>
                    <label for="tr_heavy">до грузового авто</label>
                  </div>
                </div>
                <div class="b-vehicle__params_mobile">
                    <label for="params"></label>
                    <select class="js-selectric" name="type" id="params">
                    <option value="3">Легковий а/м, до 1600 см&#179</option>
                    <option value="4">Легковий а/м, 1601 - 2000 см&#179</option>
                    <option value="5">Легковий а/м, 2001 - 3000 см&#179</option>
                    <option value="6">Легковий а/м, від 3001 см&#179</option>
                    <option value="7">Електромобіль</option>
                    <option value="8">Вантажний а/м, до 2т</option>
                    <option value="9">Вантажний а/м, більше 2т</option>
                    <option value="10">Пасажирський автобус, до 20 осіб</option>
                    <option value="11">Пасажирський автобус, більше 20 осіб</option>
                    <option value="1">Мотоцикл / моторолер, до 300 см&#179</option>
                    <option value="2">Мотоцикл / моторолер, від 300 см&#179</option>
                    <option value="12">Причіп до легкового авто</option>
                    <option value="13">Причіп до грузового авто</option>
                  </select>
                </div>
                <div class="wrapper_block_params">
                  <div class="reg_place_and_franshiza_block">
                    <div class="b-block_registration">
                      <span class="b-calculator__heading_registration">
                        Місце реєстрації власника ТЗ
                      </span>
                      <div class="b-block_select b-selectBlock_registration" id="uaregCity">
                          <label for="regCity"></label>
                          <input type="text" class="b-autocomplete b-autocomplete_vehicle selectric" id="regCity" value=""/>
                        <input type="hidden" class="hidden" name="regCityId" id="cityId" value="0"/>
                        <div class="autocomplete-suggestions b-precomplete_brand js-precomplete">
                          <div class="autocomplete-suggestion" data-id="1">м. Київ, Київськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="9">м. Харків, Харківськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="15">м. Львів, Львівськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="10">м. Одеса, Одеськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="14">м. Дніпро, Дніпропетровськая обл.</div>
                          <div class="autocomplete-suggestion" data-id="12">м. Запоріжжя, Запоріжська обл.</div>
                        </div>
                      </div>
                      <div class="b-regabroad b-block_select b-selectBlock_registration" style="display: none" id="abrregCity">
                      </div>
                      <div class="b-block_checkbox_wrapper">
                        <label class="b-block_checkbox" id="bpriv">
                          <input type="checkbox" class="sr-only" id="priv" value="true" name="priv">
                          <span class="fa fa-check-square-o" id="minus" aria-hidden="true"></span>
                          <span class="fa fa-square-o" aria-hidden="true"></span>
                          <span style="font-size:20px; font-weight:400">Є пільги</span>
                        </label>
                        <label class="b-block_checkbox">
                          <input type="checkbox" class="sr-only" id="registeredAbroad" value="true" name="registeredAbroad" onclick="unpriv()">
                          <span class="fa fa-check-square-o" aria-hidden="true"></span>
                          <span class="fa fa-square-o" aria-hidden="true"></span>
                          <span style="font-size:20px; font-weight:400">ТЗ зареєстровано за кордоном</span>
                        </label>
                      </div>
                    </div>
                    <div class="b-block_franshiza">
                      <span class="b-franshiza__heading" style="white-space:nowrap;">
                        Виберіть франшизу 
                        <span class="b-icon_tolltip fa fa-question-circle hidden-xs" style="display:none;visibility:hidden" aria-hidden="true" title="Франшиза означає суму, яка при настанні страхової події не відшкодовується страховою компанією."></span>
                      </span>
                        <label>
                            <input type="text" name="franshiza" class="js-range_franshiza" data-from="3200"/>
                        </label>
                    </div>
                  </div>
                </div>
                <button id="calculate_params" type="submit" class="b-form__submit_vehicle">
                  <span class="b-text_btn">Розрахувати</span>
                  <span class="fa fa-caret-right" aria-hidden="true"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="js-ajax_calculator"></div>
      </section>
      <div class="b-block_footer" style="display:none;padding-top:15px;padding-bottom:10px;background-color:#e6e6e6;">
        <!-- t574-->
        <div class="t574">
          <div class="t-container">
            <div class="t-col t-col_8 t-prefix_2 t-align_center">
              <div class="t574__text t-text t-descr_xl" style="font-family:Roboto,serif;font-size:18px;font-weight:500;">
<!--                                <a href="tel:+380679465625" style="color:#435062;font-size:22px;line-height:32px;font-family:Roboto;font-weight:bold;text-decoration:none;display:block;">+380(67)946-56-25</a> -->
                                <a href="mailto:service@epolis.in.ua" style="color:#435062;font-size:22px;line-height:32px;font-family:Roboto,serif;font-weight:bold;text-decoration:none;display:block;">support@epolis.in.ua</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
