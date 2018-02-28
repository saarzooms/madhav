<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <meta name="description" content="Bootstrap Admin App + jQuery">
   <meta name="keywords" content="app, responsive, jquery, bootstrap, dashboard, admin">
   <title>Index Page</title>
   <link rel="stylesheet" href="app/css/styles.css">
   
   <!-- =============== VENDOR STYLES ===============-->
   
   <!-- FONT AWESOME-->
   <link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.min.css">
   <!-- SIMPLE LINE ICONS-->
   <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
   <!-- ANIMATE.CSS-->
   <link rel="stylesheet" href="vendor/animate.css/animate.min.css">
   <!-- WHIRL (spinners)-->
   <link rel="stylesheet" href="vendor/whirl/dist/whirl.css">
   <!-- =============== PAGE VENDOR STYLES ===============-->
   <!-- WEATHER ICONS-->
   <link rel="stylesheet" href="vendor/weather-icons/css/weather-icons.min.css">
   <!-- =============== BOOTSTRAP STYLES ===============-->
   <link rel="stylesheet" href="app/css/bootstrap.css" id="bscss">
   <!-- =============== APP STYLES ===============-->
   <link rel="stylesheet" href="app/css/app.css" id="maincss">
  <link rel="stylesheet" href="app/css/bootstrap-drawer.css">
 
  <style>
  .client-detail {width:98%; height:auto; float:right; border:1px solid #23b7e5; padding:15px 0px 15px 0px;margin-bottom:10px;margin-right:5px;box-shadow:5px 5px 2.5px #23b7e5}
.client-detail-text {font-size:12px; color:#000; }
.circle {
  display: block;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  border: 5px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);  
}
  .profile_icon {width:60px; height:60px; float:left; border:0px solid #000;}
.profile_icon img {width:100%; height:auto; float:left;}

.extra {
		display: none;
	}
	tr.hide_all > td, td.hide_all{
        border-style:hidden;
      }
	   body {
    overflow: scroll;
}
  </style>
 <script type="text/javascript">
	function toggleSibling(sibling){
		sibling = sibling.nextSibling;
		while(!/tr/i.test(sibling.nodeName)){
			sibling = sibling.nextSibling;
		}
		sibling.style.display = sibling.style.display == 'table-row' ? 'none' : 'table-row';
	}
	</script> 
</head>

<body>
<div class="wrapper">
   <?php include('header.php');?>
 </div>
 
  <script src="app/js/jquery.min.js"></script>
  <script src="app/js/scripts.js"></script>
   <!-- =============== VENDOR SCRIPTS ===============-->
   <!-- MODERNIZR-->
   <script src="vendor/modernizr/modernizr.custom.js"></script>
   <!-- MATCHMEDIA POLYFILL-->
   <script src="vendor/matchMedia/matchMedia.js"></script>
   <!-- JQUERY-->
   <script src="vendor/jquery/dist/jquery.js"></script>
   <!-- BOOTSTRAP-->
   <script src="vendor/bootstrap/dist/js/bootstrap.js"></script>
   <!-- STORAGE API-->
   <script src="vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
   <!-- JQUERY EASING-->
   <script src="vendor/jquery.easing/js/jquery.easing.js"></script>
   <!-- ANIMO-->
   <script src="vendor/animo.js/animo.js"></script>
   <!-- SLIMSCROLL-->
   <script src="vendor/slimScroll/jquery.slimscroll.min.js"></script>
   <!-- SCREENFULL-->
   <script src="vendor/screenfull/dist/screenfull.js"></script>
   <!-- LOCALIZE-->
   <script src="vendor/jquery-localize-i18n/dist/jquery.localize.js"></script>
   <!-- RTL demo-->
   <script src="app/js/demo/demo-rtl.js"></script>
   <!-- =============== PAGE VENDOR SCRIPTS ===============-->
   <!-- SPARKLINE-->
   <script src="vendor/sparkline/index.js"></script>
   <!-- FLOT CHART-->
   <script src="vendor/flot/jquery.flot.js"></script>
   <script src="vendor/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
   <script src="vendor/flot/jquery.flot.resize.js"></script>
   <script src="vendor/flot/jquery.flot.pie.js"></script>
   <script src="vendor/flot/jquery.flot.time.js"></script>
   <script src="vendor/flot/jquery.flot.categories.js"></script>
   <script src="vendor/flot-spline/js/jquery.flot.spline.min.js"></script>
   <!-- EASY PIE CHART-->
   <script src="vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.js"></script>
   <!-- MOMENT JS-->
   <script src="vendor/moment/min/moment-with-locales.min.js"></script>
   <!-- DEMO-->
   <script src="app/js/demo/demo-flot.js"></script>
   <!-- =============== APP SCRIPTS ===============-->
   <script src="app/js/app.js"></script>
   <script src="app/js/drawer.js"></script>
   <script src="js/index.js"></script>
   
</body>

</html>
