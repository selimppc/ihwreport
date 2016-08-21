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

    <?php include 'header.php';?>
    <?php include 'footer.php';?>

    <script src="assets/js/canvasjs.min.js"></script>
    <script src="assets/js/sales_qty3.js"></script>
    <link type="text/css" rel="stylesheet" href="assets/css/custom.css" />

</head>
<body class="menubar-hoverable header-fixed ">

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
    <style>


    </style>
    <!-- BEGIN CONTENT-->
    <div id="content">
        <section>
            <div class="section-body"></div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="row line-chart" id="site-activity">
                            <div class="banner"><h1>Target Achivement Deficit</h1></div>
                            <div class="col-md-12 graph">
                                <div class="col-md-10">
                                    <div id="chartContainer_sales" style="height: 350px; width: 100%;"></div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-head">
                                        <header>Today's stats</header>
                                    </div>
                                    <br>
                                    <div class="chart-color">
                                        <b>Year(2016) :</b>
                                        <div class="line_1">&nbsp;</div>
                                        <br>
                                        <b>Year(2017) :</b>
                                        <div class="line_2">&nbsp;</div>
                                    </div>

                                    <br>
                                    <b>Success</b> :
                                    <span class="pull-right text-success text-sm">37% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:50%"></div>
                                        <!--<div class="progress-bar progress-bar-danger" style="width:93%"></div>-->
                                    </div>

                                    <b>Sale :</b>
                                    <span class="pull-right text-success text-sm">46240000</span>
                                    <br>
                                    <b>Cost :</b>
                                    <span class="pull-right text-success text-sm">35000000</span>
                                    <br>
                                    <b>Revenue :</b>
                                    <span class="pull-right text-success text-sm">11240000</span>
                                    <br>
                                    <b>Improvement :</b>
                                    <span class="pull-right text-success text-sm">20% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:20%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-body"></div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="row line-chart" id="site-activity">
                            <div class="banner"><h1>Target Achivement Deficit</h1></div>
                            <div class="col-md-12 graph">
                                <div class="col-md-10">

                                    <div id="chartContainer" style="height: 350px; width: 100%;"></div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-head">
                                        <header>Today's stats</header>
                                    </div>
                                    <br>
                                    <div class="chart-color">
                                        <b>Sales Qty. :</b>
                                        <div class="line_1">&nbsp;</div>
                                        <br>
                                    </div>

                                    <br>
                                    <b>Success</b> :
                                    <span class="pull-right text-success text-sm">37% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:50%"></div>
                                        <!--<div class="progress-bar progress-bar-danger" style="width:93%"></div>-->
                                    </div>

                                    <b>No. Of Product :</b>
                                    <span class="pull-right text-success text-sm">396000</span>
                                    <br>
                                    <b>Cost :</b>
                                    <span class="pull-right text-success text-sm">35000000</span>
                                    <br>
                                    <b>Revenue :</b>
                                    <span class="pull-right text-success text-sm">11240000</span>
                                    <br>
                                    <b>Improvement :</b>
                                    <span class="pull-right text-success text-sm">25% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:30%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-body"></div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="row line-chart" id="site-activity">
                            <div class="banner"><h1>Target Achivement Deficit</h1></div>
                            <div class="col-md-12 graph">
                                <div class="col-md-10">

                                    <div id="chartContainer_product" style="height: 350px; width: 100%;"></div>

                                </div>
                                <div class="col-md-2">
                                    <div class="card-head">
                                        <header>Today's stats</header>
                                    </div>
                                    <br>
                                    <div class="chart-color">
                                        <b>Product Qty. :</b>
                                        <div class="line_2">&nbsp;</div>
                                        <br>
                                    </div>

                                    <br>
                                    <b>Success</b> :
                                    <span class="pull-right text-success text-sm">35% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:50%"></div>
                                        <!--<div class="progress-bar progress-bar-danger" style="width:93%"></div>-->
                                    </div>

                                    <b>No. Of Product :</b>
                                    <span class="pull-right text-success text-sm">396000</span>
                                    <br>
                                    <b>Cost :</b>
                                    <span class="pull-right text-success text-sm">35000000</span>
                                    <br>
                                    <b>Revenue :</b>
                                    <span class="pull-right text-success text-sm">11240000</span>
                                    <br>
                                    <b>Improvement :</b>
                                    <span class="pull-right text-success text-sm">25% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:30%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-body"></div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="row line-chart" id="site-activity">
                            <div class="banner"><h1>Target Achivement Deficit</h1></div>
                            <div class="col-md-12 graph">
                                <div class="col-md-10">
                                    <div id="chartContainer_profit" style="height: 350px; width: 100%;"></div>

                                </div>
                                <div class="col-md-2">
                                    <div class="card-head">
                                        <header>Today's stats</header>
                                    </div>
                                    <br>
                                    <div class="chart-color">
                                        <b>Profit :</b>
                                        <div class="line_1">&nbsp;</div>
                                        <br>
                                    </div>

                                    <br>
                                    <b>Success</b> :
                                    <span class="pull-right text-success text-sm">29% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:50%"></div>
                                        <!--<div class="progress-bar progress-bar-danger" style="width:93%"></div>-->
                                    </div>

                                    <b>No. Of Product :</b>
                                    <span class="pull-right text-success text-sm">396000</span>
                                    <br>
                                    <b>Cost :</b>
                                    <span class="pull-right text-success text-sm">35000000</span>
                                    <br>
                                    <b>Revenue :</b>
                                    <span class="pull-right text-success text-sm">11240000</span>
                                    <br>
                                    <b>Improvement :</b>
                                    <span class="pull-right text-success text-sm">21% <i class="md md-trending-up"></i></span>
                                    <div class="progress progress-hairline">
                                        <div class="progress-bar progress-bar-primary-dark" style="width:30%"></div>
                                    </div>
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
    <?php include 'menu.php';?>
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
