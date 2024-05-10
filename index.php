<?php

use Detection\MobileDetect;

require_once "assets/libs/MobileDetect.php";
    $detect = new MobileDetect;
    ?>
<!DOCTYPE html>
<html lang="UA">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7VL78TN49N');
        </script>
        <meta charset="utf-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <!--metatextblock-->
        <title>Сервіс продажу електронних страхових полісів</title>
        <meta name="keywords" content="Онлайн, онлайн, Страхование, страхование, Страхування, страхування, Електронний, електронний, Электронный, электронный, Поліс, поліс, ОСАГО, ОСЦПВ, Автоцивілка, автоцивілка, Автогражданка, автогражданка, Европротокол, европротокол, Зеленая карта, зеленая карта, Зелена карта, зелена карта"/>
        <meta name="description" content="Онлайн страхування"/>
        <meta property="og:url" content="https://epolis.in.ua"/>
        <meta property="og:title" content="Сервіс продажу електронних страхових полісів"/>
        <meta property="og:description" content="Онлайн страхування"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Epolis">
        <meta property="og:image" content="assets/images/logo-polis.png"/>
        <!-- <meta property="fb:app_id" content="257953674358265"/> -->
        <meta name="format-detection" content="telephone=no"/>
        <meta http-equiv="default-style" content="on">
        <!-- <meta name="robots" content="nofollow"/> -->
        <link rel="shortcut icon" href="assets/icons/epolis_favicon.png" type="image/x-icon"/>
        <link rel="canonical" href="/">
        <!--metatextblock-->
        <!-- Assets -->
		<link rel="stylesheet" href="assets/css/grid.css" type="text/css" media="all"/>
		<link rel="stylesheet" href="assets/css/blocks.css?v1.0.2" type="text/css" media="all"/>
		<link rel="stylesheet" href="assets/css/animation.css" type="text/css" media="all"/>
        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/blocks.js"></script>
        <script src="assets/js/lazyload.js" charset="utf-8"></script>
        <script src="assets/js/scripts.js"></script>
        <script src="assets/js/forms.js" charset="utf-8"></script>
        <script type="text/javascript">
            window.dataLayer = window.dataLayer || [];
        </script>
    </head>
    <body class="t-body" style="margin:0;">
        <!--allrecords-->
        <div id="allrecords" class="t-records">
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
            <div id="nav195768390" class="t446 t446__hidden t446__positionfixed" style="background-color: #212121; height:80px;"
                <div class="t446__maincontainer">
                    <div class="t446__logowrapper">
                        <div class="t446__logowrapper2">
                            <div style="display: block;">
                                <a href="/" style="color:#ffffff;font-weight:600;">
                                <img src="assets/images/logo-epolis.png" class="t446__imglogo t446__imglogomobile" style="max-width: 130px; width: 130px;" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="t446__leftwrapper" style=" padding-right:115px; text-align: left;">
                        <div class="t446__leftmenuwrapper">
                            <ul class="t446__list">
                                <li class="t446__list_item">
                                    <a class="t-menu__link-item" href="oscpv">ОСЦПВ</a>
                                </li>
                                <li class="t446__list_item">
                                    <a class="t-menu__link-item" href="assets/pdf/public_offer.pdf" target="_blank">Публічна оферта</a>
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
                                    <img class="header__tels-icon first" src="assets/icons/viber.png" alt=""/>
                                    <a class="op-hover" href="tel:+380679465625" style="color: #ffffff; font-size:14px;">(067) 946−56−25</a>
                                </li>
                                <li class="header__tels-item second">
                                    <?php
                                        if ( $detect->isMobile() && !$detect->isTablet() ) {
                                          echo '<img class="header__tels-icon" src="assets/icons/whatsapp.png" alt=""/>';
                                        }
                                        else {
                                          echo '
										    <img class="header__tels-icon-second" src="assets/icons/whatsapp.png" alt=""/>
                                            <svg class="header__tels-icon-sec" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none">
                                              <path d="M19.6135 18.8085L18.9498 21.2854C18.8892 21.5156 18.7811 21.7306 18.6325 21.9166C18.4839 22.1026 18.2982 22.2555 18.0871 22.3655C17.876 22.4756 17.6442 22.5403 17.4067 22.5556C17.1691 22.5709 16.931 22.5364 16.7075 22.4544C14.2409 21.4976 12.0331 19.9755 10.2615 18.0105C8.60628 16.2084 7.36817 14.0639 6.63507 11.7294C5.81687 9.20159 5.60562 6.51662 6.01842 3.89199C6.05897 3.65815 6.14776 3.43531 6.27914 3.23766C6.41053 3.04002 6.58163 2.87189 6.78155 2.74399C6.98147 2.6161 7.20583 2.53123 7.44035 2.49479C7.67487 2.45835 7.9144 2.47115 8.1437 2.53236L10.6206 3.19604C11.0223 3.29946 11.3728 3.54543 11.6066 3.88811C11.8404 4.23079 11.9416 4.64679 11.8913 5.05858C11.7835 5.87925 11.7688 6.70949 11.8476 7.53346C11.8795 7.85873 11.8175 8.18634 11.6689 8.47745C11.5204 8.76856 11.2914 9.01098 11.0093 9.17598L9.67981 9.94358C10.3013 12.3255 11.5542 14.4955 13.3062 16.2247L14.6357 15.4571C14.9197 15.2953 15.2441 15.2183 15.5705 15.2351C15.8969 15.252 16.2116 15.3621 16.4774 15.5524C17.1515 16.0326 17.8779 16.435 18.6425 16.752C19.0284 16.916 19.3406 17.2162 19.5196 17.5954C19.6986 17.9745 19.7321 18.4063 19.6135 18.8085Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
										  ';
                                        }
                                    ?>
                                    <a class="op-hover" href="tel:+380679465625" style="color: #ffffff; font-size:14px;">(067) 946−56−25</a>
                                </li>
                                <li class="header__tels-item third">
                                    <img class="header__tels-icon third" src="assets/icons/telegram.png" alt=""/>
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
            <script type="text/javascript">
                $(document).ready(function() {
                  setTimeout(function() {
                    t_menusub_init('195768390');
                  }, 500);
                });
            </script>
            <div id="rec195768391" class="r t-rec t-rec_pt_0 t-rec_pb_0" style="padding-top:0;padding-bottom:0; " data-animationappear="off" data-record-type="18">
                <!-- cover -->
                <div class="t-cover" id="recorddiv195768391" style="height:100vh; background-image:url('assets/images/static/welcome/-/resize/20x/welcome.jpg');">
                    <div class="t-cover__carrier" id="coverCarry195768391" data-content-cover-id="195768391" data-content-cover-bg="assets/images/static/welcome/welcome.jpg" data-content-cover-height="100vh" data-content-cover-parallax="" style="height:100vh;background-attachment:scroll; "></div>
                    <div class="t-cover__filter"></div>
                    <div class="t-container">
                        <div class="t-col t-col_12 ">
                            <div class="t-cover__wrapper t-valign_middle" style="height:100vh;">
                                <div class="t001 t-align_center">
                                    <div class="t001__wrapper">
                                        <div class="t001__descr t-descr t-descr_xl t001__descr_center t-animate" style="color:#ffffff;font-size:36px;font-weight:500;padding-bottom:1px;">Сервіс продажу електронних страхових полісів в Україні</div>
                                        <span class="space"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding-top:15px;padding-bottom:10px;background-color:#e6e6e6;">
                <!-- t574-->
                <div class="t574">
                    <div class="t-container">
                        <div class="t-col t-col_8 t-prefix_2 t-align_center">
                            <div class="t574__text t-text t-descr_xl" style="font-family:Roboto,serif;font-size:18px;font-weight:500;">
<!--                                <a href="tel:+380679465625" style="color:#435062;font-size:22px;line-height:32px;font-family:Roboto;font-weight:bold;text-decoration:none;display:block;">+380(67)946-56-25</a> -->
                                <a href="mailto:service@epolis.in.ua" style="color:#435062;font-size:22px;line-height:32px;font-family:Roboto,serif;font-weight:bold;text-decoration:none;display:block;">support@epolis.in.ua</a>
                                <!--
                                    <p style="color:#435062;font-family:Roboto;font-size:14px;font-weight:400;">©&nbsp;<span style="color:#1aa989;font-family:epolis;font-size:10px;">epolis</span></p>
                                -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
