<!DOCTYPE html>
<html lang="en">
<head>
    <title>International House Weary</title>

    <!-- BEGIN META -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="your,keywords">
    <meta name="description" content="Short explanation about this website">
    <!-- END META -->

    <!-- BEGIN STYLESHEETS -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:300italic,400italic,300,400,500,700,900' rel='stylesheet' type='text/css'/>
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/bootstrap.css?1422792965" />
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/materialadmin.css?1425466319" />
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/font-awesome.min.css?1422529194" />
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/material-design-iconic-font.min.css?1421434286" />
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/libs/rickshaw/rickshaw.css?1422792967" />
    <link type="text/css" rel="stylesheet" href="assets/css/theme-default/libs/morris/morris.core.css?1420463396" />
    <!-- END STYLESHEETS -->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script type="text/javascript" src="assets/js/libs/utils/html5shiv.js?1403934957"></script>
    <script type="text/javascript" src="assets/js/libs/utils/respond.min.js?1403934956"></script>
    <![endif]-->

    <script src="assets/js/libs/jquery/jquery-1.11.2.min.js"></script>
    <script src="assets/js/libs/jquery/jquery-migrate-1.2.1.min.js"></script>
    <script src="assets/js/libs/bootstrap/bootstrap.min.js"></script>
    <script src="assets/js/libs/spin.js/spin.min.js"></script>
    <script src="assets/js/libs/autosize/jquery.autosize.min.js"></script>
    <script src="assets/js/libs/moment/moment.min.js"></script>
    <script src="assets/js/libs/flot/jquery.flot.min.js"></script>
    <script src="assets/js/libs/flot/jquery.flot.time.min.js"></script>
    <script src="assets/js/libs/flot/jquery.flot.resize.min.js"></script>
    <script src="assets/js/libs/flot/jquery.flot.orderBars.js"></script>
    <script src="assets/js/libs/flot/jquery.flot.pie.js"></script>
    <script src="assets/js/libs/flot/curvedLines.js"></script>
    <script src="assets/js/libs/jquery-knob/jquery.knob.min.js"></script>
    <script src="assets/js/libs/sparkline/jquery.sparkline.min.js"></script>
    <script src="assets/js/libs/nanoscroller/jquery.nanoscroller.min.js"></script>
    <script src="assets/js/libs/d3/d3.min.js"></script>
    <script src="assets/js/libs/d3/d3.v3.js"></script>
    <script src="assets/js/libs/rickshaw/rickshaw.min.js"></script>
    <script src="assets/js/core/source/App.js"></script>
    <script src="assets/js/core/source/AppNavigation.js"></script>
    <script src="assets/js/core/source/AppOffcanvas.js"></script>
    <script src="assets/js/core/source/AppCard.js"></script>
    <script src="assets/js/core/source/AppForm.js"></script>
    <script src="assets/js/core/source/AppNavSearch.js"></script>
    <script src="assets/js/core/source/AppVendor.js"></script>
    <script src="assets/js/core/demo/Demo.js"></script>

    <script src="assets/js/canvasjs.min.js"></script>
    <!--<script src="assets/js/sales_qty3.js"></script>-->
    <script>
        function chart_generate(){


            var jsonData = $.ajax({
                url: "getData2.php",
                dataType: "json",
                async: false
            }).responseText;




            var chart = new CanvasJS.Chart("chartContainer",
                {

                    title:{
                        /*text: "Music Album Sales by Year"*/
                    },
                    animationEnabled: true,
                    axisY: {
                        title: "Sales(Qty)",
                        valueFormatString: "#0,.",
                        suffix: " "
                    },

                    data: [
                        {
                            toolTipContent: "{y} qty",
                            type: "splineArea",
                            markerSize: 5,
                            color: "rgba(54,158,173,.7)",

                            dataPoints: [
                             {x: new Date(2016,0) , y: 10000},
                             {x: new Date(2016,1), y: 11000},
                             {x: new Date(2016,2), y: 12000},
                             {x: new Date(2016,3), y: 15000},
                             {x: new Date(2016,4), y: 13000},
                             {x: new Date(2016,5), y: 11500},
                             {x: new Date(2016,6), y: 11500},
                             {x: new Date(2016,7), y: 12000},
                             {x: new Date(2016,8), y: 14000},
                             {x: new Date(2016,9), y: 15000},
                             {x: new Date(2016,10), y: 14200},
                             {x: new Date(2016,11), y: 13500},
                             {x: new Date(2016,12), y: 13000}
                             ]




                        }
                    ]
                });

            chart.render();
        }
    </script>
</head>
<body class="menubar-hoverable header-fixed " onload="chart_generate();">

<!-- BEGIN HEADER-->
<header id="header" >
    <div class="headerbar">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="headerbar-left">
            <ul class="header-nav header-nav-options">
                <li class="header-nav-brand" >
                    <div class="brand-holder">
                        <a href="#">
                            <span class="text-lg text-bold text-primary">International House Wear</span>
                        </a>
                    </div>
                </li>
                <li>
                    <a class="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
                        <i class="fa fa-bars"></i>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="headerbar-right">
            <ul class="header-nav header-nav-profile">
                <li class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle ink-reaction" data-toggle="dropdown">
                        <img src="assets/img/avatar1.jpg?1403934956" alt="" />
								<span class="profile-info">
									Admin
									<small>Administrator</small>
								</span>
                    </a>
                    <ul class="dropdown-menu animation-dock">
                        <li><a href="login.html"><i class="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
                    </ul>
                </li><!--end .dropdown -->
            </ul><!--end .header-nav-profile -->
            <ul class="header-nav header-nav-toggle">
                <li>
                    <a class="btn btn-icon-toggle btn-default" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
                        <i class="fa fa-ellipsis-v"></i>
                    </a>
                </li>
            </ul><!--end .header-nav-toggle -->
        </div><!--end #header-navbar-collapse -->
    </div>
</header>
<!-- END HEADER-->

<!-- BEGIN BASE-->
<div id="base">

    <!-- BEGIN OFFCANVAS LEFT -->
    <div class="offcanvas">
    </div><!--end .offcanvas-->
    <!-- END OFFCANVAS LEFT -->

    <!-- BEGIN CONTENT-->
    <div id="content">
        <section>
            <div class="section-body">
                <div class="row">
                    <div class="sparkline-revenue"></div>
                    <div class="sparkline-visits"></div>
                </div>
            </div>
            <div class="row">
                <!-- BEGIN SITE ACTIVITY -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-8">
                                <div class="card-head">
                                    <header>Sales(Qty) Per Month</header>
                                </div>
                                <!--<div class="card-body height-12">
                                    <div id="flot-visitors-legend" class="flot-legend-horizontal stick-top-right no-y-padding"></div>
                                    <div id="flot-visitors" class="flot height-7" data-title="Activity entry" data-color="#7dd8d2,#0aa89e"></div>
                                </div>-->


                                <div id="chartContainer" style="height: 300px; width: 100%;"></div>





                            </div><!--end .col -->
                            <div class="col-md-4">
                                <div class="card-head">
                                    <header>Today's stats</header>
                                </div>
                                <div class="card-body height-12>
											<strong>214</strong> members
											<span class="pull-right text-success text-sm">0,18% <i class="md md-trending-up"></i></span>
                                <div class="progress progress-hairline">
                                    <div class="progress-bar progress-bar-primary-dark" style="width:43%"></div>
                                </div>
                                756 pageviews
                                <span class="pull-right text-success text-sm">0,68% <i class="md md-trending-up"></i></span>
                                <div class="progress progress-hairline">
                                    <div class="progress-bar progress-bar-primary-dark" style="width:11%"></div>
                                </div>
                                291 bounce rates
                                <span class="pull-right text-danger text-sm">21,08% <i class="md md-trending-down"></i></span>
                                <div class="progress progress-hairline">
                                    <div class="progress-bar progress-bar-danger" style="width:93%"></div>
                                </div>
                                32,301 visits
                                <span class="pull-right text-success text-sm">0,18% <i class="md md-trending-up"></i></span>
                                <div class="progress progress-hairline">
                                    <div class="progress-bar progress-bar-primary-dark" style="width:63%"></div>
                                </div>
                                132 pages
                                <span class="pull-right text-success text-sm">0,18% <i class="md md-trending-up"></i></span>
                                <div class="progress progress-hairline">
                                    <div class="progress-bar progress-bar-primary-dark" style="width:47%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div><!--end #content-->
    <!-- END CONTENT -->

    <!-- BEGIN MENUBAR-->
    <div id="menubar" class="menubar-inverse ">
        <div class="menubar-fixed-panel">
            <div>
                <a class="btn btn-icon-toggle btn-default menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        <div class="menubar-scroll-panel">
            <!-- BEGIN MAIN MENU -->
            <ul id="main-menu" class="gui-controls">

                <!-- BEGIN DASHBOARD -->
                <li>
                    <a href="dashboard.html" class="active">
                        <div class="gui-icon"><i class="md md-home"></i></div>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <!-- END DASHBOARD -->

                <!-- Multiple Chart -->

                <li class="gui-folder">
                    <a>
                        <div class="gui-icon"><i class="glyphicon glyphicon-list-alt"></i></div>
                        <span class="title">Charts</span>
                    </a>
                    <ul>
                        <li><a href="line_chart.html" ><span class="title">Line Chart</span></a></li>
                        <!--<li><a href="pie_chart.html" ><span class="title">Pie Chart</span></a></li>
                        <li><a href="3d_pie_chart.html" ><span class="title">3D Pie Chart</span></a></li>-->
                        <li><a href="donut_chart.html" ><span class="title">Donut Chart</span></a></li>
                        <!--<li><a href="exploding_slice.html" ><span class="title">Exploding a Slice</span></a></li>-->
                        <li><a href="default_column_chart.html" ><span class="title">Default Column Chart</span></a></li>
                        <!--<li><a href="multiple_column_chart.html" ><span class="title">Multiple Column Chart</span></a></li>
                        <li><a href="stacked_column_chart.html" ><span class="title">Stacked columns Chart</span></a></li>-->
                        <li><a href="combo.html" ><span class="title">Combo Chart</span></a></li>
                    </ul>
                </li>

                <li class="gui-folder">
                    <a>
                        <div class="gui-icon"><i class="glyphicon glyphicon-list-alt"></i></div>
                        <span class="title">Target Achivement - Deficit</span>
                    </a>
                    <ul>
                        <li><a href="sales_qty_1.html" ><span class="title">Sales/Qty - 1</span></a></li>
                        <li><a href="sales_qty_2.html" ><span class="title">Sales/Qty - 2</span></a></li>
                        <li><a href="sales_qty_3.html" ><span class="title">Sales/Qty - 3</span></a></li>
                        <li><a href="product_qty_time.html" ><span class="title">Product Qty/Time</span></a></li>
                        <li><a href="breakdown_chart.html" ><span class="title">Breakdown Chart</span></a></li>

                    </ul>
                </li>

                <!-- Individual Shop Growth -->
                <li>
                    <a href="individual_shop_growth.html">
                        <div class="gui-icon"><i class="md md-email"></i></div>
                        <span class="title">Individual Shop Growth</span>
                    </a>
                </li>


                <!-- Product Compare -->
                <li>
                    <a href="product_compare.html">
                        <div class="gui-icon"><i class="md md-web"></i></div>
                        <span class="title">Product Compare</span>
                    </a>
                </li>


                <!-- Same product Compare -->
                <li>
                    <a href="same_product_compare.html">
                        <div class="gui-icon"><i class="fa fa-puzzle-piece fa-fw"></i></div>
                        <span class="title">Same product Compare</span>
                    </a>
                </li>


                <!-- Discount as per sales -->
                <li>
                    <a href="discount_as_per_sales.html">
                        <div class="gui-icon"><i class="fa fa-table"></i></div>
                        <span class="title">Discount as per sales</span>
                    </a>
                </li>


                <!-- Brand Compare -->
                <li>
                    <a href="brand_compare.html">
                        <div class="gui-icon"><span class="glyphicon glyphicon-list-alt"></span></div>
                        <span class="title">Brand Compare</span>
                    </a>
                </li>


                <!-- Brand Best Selling -->
                <li>
                    <a href="brand_best_selling.html">
                        <div class="gui-icon"><i class="md md-computer"></i></div>
                        <span class="title">Brand Best Selling</span>
                    </a>
                </li>


                <!-- Balance Report for all Store / Branch -->
                <li>
                    <a href="balance_report_for_all_store_branch.html">
                        <div class="gui-icon"><i class="md md-assessment"></i></div>
                        <span class="title">Balance Report for all Store / Branch</span>
                    </a>
                </li>


                <!-- Check Life Cycle for each Product -->
                <li>
                    <a href="check_life_cycle_for_each_product.html">
                        <div class="gui-icon"><i class="fa fa-folder-open fa-fw"></i></div>
                        <span class="title">Check Life Cycle for each Product</span>
                    </a>
                </li>

                <!-- Growth Overtime -->
                <li>
                    <a href="growth_overtime.html">
                        <div class="gui-icon"><span class="glyphicon glyphicon-list-alt"></span></div>
                        <span class="title">Growth Overtime</span>
                    </a>
                </li>

                <!--Growth Over incentive-->
                <li>
                    <a href="growth_over_incentive.html">
                        <div class="gui-icon"><i class="fa fa-puzzle-piece fa-fw"></i></div>
                        <span class="title">Growth Over incentive</span>
                    </a>
                </li>

                <!--Growth Over to Promotion-->
                <li>
                    <a href="growth_over_to_promotion.html">
                        <div class="gui-icon"><i class="md md-assessment"></i></div>
                        <span class="title">Growth Over to Promotion</span>
                    </a>
                </li>

                <!--Sales Promotion-->
                <li>
                    <a href="sales_promotion.html">
                        <div class="gui-icon"><i class="md md-web"></i></div>
                        <span class="title">Sales Promotion</span>
                    </a>
                </li>


            </ul>
            <!-- END MAIN MENU -->

            <div class="menubar-foot-panel">
                <small class="no-linebreak hidden-folded">
                    <span class="opacity-75">Copyright &copy; 2014</span> <strong>CodeCovers</strong>
                </small>
            </div>
        </div><!--end .menubar-scroll-panel-->
    </div><!--end #menubar-->
    <!-- END MENUBAR -->

    <!-- BEGIN OFFCANVAS RIGHT -->
    <div class="offcanvas">

        <!-- BEGIN OFFCANVAS SEARCH -->
        <div id="offcanvas-search" class="offcanvas-pane width-8">
            <div class="offcanvas-head">
                <header class="text-primary">Search</header>
                <div class="offcanvas-tools">
                    <a class="btn btn-icon-toggle btn-default-light pull-right" data-dismiss="offcanvas">
                        <i class="md md-close"></i>
                    </a>
                </div>
            </div>
            <div class="offcanvas-body no-padding">
                <ul class="list ">
                    <li class="tile divider-full-bleed">
                        <div class="tile-content">
                            <div class="tile-text"><strong>A</strong></div>
                        </div>
                    </li>
                    <li class="tile">
                        <a class="tile-content ink-reaction" href="#<!--offcanvas-chat-->" data-toggle="offcanvas" data-backdrop="false">
                            <div class="tile-icon">
                                <img src="assets/img/avatar4.jpg?1404026791" alt="" />
                            </div>
                            <div class="tile-text">
                                International House Wear
                                <small>123-123-3210</small>
                            </div>
                        </a>
                    </li>
                </ul>
            </div><!--end .offcanvas-body -->
        </div><!--end .offcanvas-pane -->
        <!-- END OFFCANVAS SEARCH -->

        <!-- BEGIN OFFCANVAS CHAT -->
        <div id="offcanvas-chat" class="offcanvas-pane style-default-light width-12">
            <div class="offcanvas-head style-default-bright">
                <header class="text-primary">Chat with Ann Laurens</header>
                <div class="offcanvas-tools">
                    <a class="btn btn-icon-toggle btn-default-light pull-right" data-dismiss="offcanvas">
                        <i class="md md-close"></i>
                    </a>
                    <a class="btn btn-icon-toggle btn-default-light pull-right" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
                        <i class="md md-arrow-back"></i>
                    </a>
                </div>
                <form class="form">
                    <div class="form-group floating-label">
                        <textarea name="sidebarChatMessage" id="sidebarChatMessage" class="form-control autosize" rows="1"></textarea>
                        <label for="sidebarChatMessage">Leave a message</label>
                    </div>
                </form>
            </div>
            <div class="offcanvas-body">
                <ul class="list-chats">
                    <li>
                        <div class="chat">
                            <div class="chat-avatar"><img class="img-circle" src="assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div class="chat-body">
                                Yes, it is indeed very beautiful.
                                <small>10:03 pm</small>
                            </div>
                        </div><!--end .chat -->
                    </li>
                    <li class="chat-left">
                        <div class="chat">
                            <div class="chat-avatar"><img class="img-circle" src="assets/img/avatar9.jpg?1404026744" alt="" /></div>
                            <div class="chat-body">
                                Did you see the changes?
                                <small>10:02 pm</small>
                            </div>
                        </div><!--end .chat -->
                    </li>
                    <li>
                        <div class="chat">
                            <div class="chat-avatar"><img class="img-circle" src="assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div class="chat-body">
                                I just arrived at work, it was quite busy.
                                <small>06:44pm</small>
                            </div>
                            <div class="chat-body">
                                I will take look in a minute.
                                <small>06:45pm</small>
                            </div>
                        </div><!--end .chat -->
                    </li>
                    <li class="chat-left">
                        <div class="chat">
                            <div class="chat-avatar"><img class="img-circle" src="assets/img/avatar9.jpg?1404026744" alt="" /></div>
                            <div class="chat-body">
                                The colors are much better now.
                            </div>
                            <div class="chat-body">
                                The colors are brighter than before.
                                I have already sent an example.
                                This will make it look sharper.
                                <small>Mon</small>
                            </div>
                        </div><!--end .chat -->
                    </li>
                    <li>
                        <div class="chat">
                            <div class="chat-avatar"><img class="img-circle" src="assets/img/avatar1.jpg?1403934956" alt="" /></div>
                            <div class="chat-body">
                                Are the colors of the logo already adapted?
                                <small>Last week</small>
                            </div>
                        </div><!--end .chat -->
                    </li>
                </ul>
            </div><!--end .offcanvas-body -->
        </div><!--end .offcanvas-pane -->
        <!-- END OFFCANVAS CHAT -->

    </div><!--end .offcanvas-->
    <!-- END OFFCANVAS RIGHT -->

</div><!--end #base-->
<!-- END BASE -->

<!-- BEGIN JAVASCRIPT -->



<!-- END JAVASCRIPT -->

</body>
</html>
