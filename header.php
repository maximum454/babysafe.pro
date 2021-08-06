<?
/*
if($_SERVER['REMOTE_ADDR'] == '93.185.77.51')
{

}
else
{
  echo '<br><br><br><center>Сайт временно недоступен!</center>'; exit;
}
*/
?>

<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="utf-8">
    <title><?=$title;?></title><!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE = edge"><![endif]-->
    <link rel="icon" href="favicon.png" type="image/x-icon">
    <meta name="yandex-verification" content="139d7355db910325" />
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css?att=<?=time();?>" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./css/styles.min.css?att=<?=time();?>"><!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script><![endif]-->

    <link rel="stylesheet" href="/css/plyr.css?att=<?=time();?>">
    <link rel="stylesheet" href="/css/app.css?att=<?=time();?>">

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7J3VTQ');</script>
<!-- End Google Tag Manager -->

  </head>
  <body class="index-page">

	  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7J3VTQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <!--include ../../blocks/modules/header/header-->
    <!--include ../../blocks/modules/landing/first-->
    <main class="main">
      <!--You section or content-->
    <header id="header">
<!--nav class="navbar navbar-expand-lg navbar-light bg-light"-->
<nav class="navbar navbar-expand-lg pt-lg-0 pb-lg-0">
<a class="navbar-brand d-none d-lg-block" href="/"><img src="./img/images/logopng.png" class="logo" /></a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="d-block d-lg-none mr-auto ml-md-auto mobile-logo">
	<a href="/"><img src="./img/images/logo-new.png" alt=""></a>
 </div>


<div class="collapse navbar-collapse nav-block" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">

<? if($type == '') { ?>
<li class="nav-item dropdown <?=$active_1;?>">
	<a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Защита детей</a>

    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    	<a class="dropdown-item" href="/">Защита детей</a>
        <a class="dropdown-item" href="/animals.php">Защита животных</a>
    </div>
</li>
<? } ?>

<? if($type == 1) { ?>
<li class="nav-item dropdown <?=$active_1;?>">
	<a class="nav-link dropdown-toggle" href="/animals.php" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Защита животных</a>

    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    	<a class="dropdown-item" href="/">Защита детей</a>
        <a class="dropdown-item" href="/animals.php">Защита животных</a>
    </div>
</li>
<? } ?>

<li class="nav-item <?=$active_3;?>">
<a class="nav-link" href="/about.php">О компании</a>
</li>
<li class="nav-item <?=$active_4;?>">
<a class="nav-link" href="/reviews.php">Отзывы</a>
</li>
<li class="nav-item <?=$active_5;?>">
<a class="nav-link" href="/partnership.php">Условия сотрудничества</a>
</li>
<!--li class="nav-item <?=$active_6;?>">
<a class="nav-link" href="/regions.php">Представители в регионах</a>
</li!-->
<!--li class="nav-item <?=$active_7;?>">
<a class="nav-link" href="/blog.php">Блог</a>
</li!-->
</ul>
<div class="form-inline my-2 my-lg-0">
<div class="telephone"><a href="tel:+77774748494">8 777 474 84 94</a></div>
<button class="btn btn-call my-2 my-sm-0" type="button" data-toggle="modal" data-target="#callModal">Обратный звонок</button>
</div>
</div>
</nav>
