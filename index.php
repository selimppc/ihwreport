<!DOCTYPE html>
<html lang="en">
<head>
    <title>International House Weary</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="your,keywords">
    <meta name="description" content="Short explanation about this website">

    <?php include 'header.php';?>


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

    <!-- BEGIN CONTENT-->
    <div id="content">
        <section>
            <div class="section-body"></div>
            <div class="row">
                <!-- BEGIN SITE ACTIVITY -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="panel">
                                            <div id="report-button">
                                                <div class="panel-heading" style="text-align: center">
                                                    <span class="panel-title"><h1>Welcome To International House Wear</h1></span>
                                                </div>
                                                <div class="panel-body no-padding-t text-center">
                                                    <h6 class="text-light-gray text-semibold text-xs text-center" style="margin:20px 0 10px 0;">Target Achivement - Deficit</h6>
                                                    <a class="btn btn-primary" href="sales_qty_1.php">
                                                        <strong>Target Achivement - Deficit</strong>
                                                    </a>

                                                    <hr>

                                                    <h6 class="text-light-gray text-semibold text-xs text-center" style="margin:20px 0 10px 0;">Growth Chart Comparison</h6>
                                                    <a class="btn btn-primary" href="sales_comparison.php">
                                                        <strong>Growth Chart Comparison</strong>
                                                    </a>

                                                    <hr>

                                                    <h6 class="text-light-gray text-semibold text-xs text-center" style="margin:20px 0 10px 0;">Contribution Chart</h6>
                                                    <a class="btn btn-primary" href="contribution_pie.php">
                                                        <strong>Contribution Chart</strong>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!--end .col -->

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

<?php include 'footer.php';?>
<script src="assets/js/core/demo/DemoDashboard.js"></script>

</body>
</html>
