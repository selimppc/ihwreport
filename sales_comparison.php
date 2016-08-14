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
    <?php include("header.php"); ?>

</head>
<script type="text/javascript" src="assets/js/sales_comparison.js"></script>
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
            <ul class="header-nav header-nav-options">
                <li>
                    <!-- Search form -->
                    <form class="navbar-search" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" name="headerSearch" placeholder="Enter your keyword">
                        </div>
                        <button type="submit" class="btn btn-icon-toggle ink-reaction"><i class="fa fa-search"></i></button>
                    </form>
                </li>
                <li class="dropdown hidden-xs">
                    <a href="javascript:void(0);" class="btn btn-icon-toggle btn-default" data-toggle="dropdown">
                        <i class="fa fa-bell"></i><sup class="badge style-danger">4</sup>
                    </a>
                    <ul class="dropdown-menu animation-expand">
                        <li class="dropdown-header">Today's messages</li>
                        <li>
                            <a class="alert alert-callout alert-warning" href="javascript:void(0);">
                                <img class="pull-right img-circle dropdown-avatar" src="../../assets/img/avatar2.jpg?1404026449" alt="" />
                                <strong>International House Wear</strong><br/>
                                <small>Testing functionality...</small>
                            </a>
                        </li>
                    </ul><!--end .dropdown-menu -->
                </li><!--end .dropdown -->
                <li class="dropdown hidden-xs">
                    <a href="javascript:void(0);" class="btn btn-icon-toggle btn-default" data-toggle="dropdown">
                        <i class="fa fa-area-chart"></i>
                    </a>
                    <ul class="dropdown-menu animation-expand">
                        <li class="dropdown-header">Server load</li>
                        <li class="dropdown-progress">
                            <a href="javascript:void(0);">
                                <div class="dropdown-label">
                                    <span class="text-light">Server load <strong>Today</strong></span>
                                    <strong class="pull-right">93%</strong>
                                </div>
                                <div class="progress"><div class="progress-bar progress-bar-danger" style="width: 93%"></div></div>
                            </a>
                        </li><!--end .dropdown-progress -->
                        <li class="dropdown-progress">
                            <a href="javascript:void(0);">
                                <div class="dropdown-label">
                                    <span class="text-light">Server load <strong>Yesterday</strong></span>
                                    <strong class="pull-right">30%</strong>
                                </div>
                                <div class="progress"><div class="progress-bar progress-bar-success" style="width: 30%"></div></div>
                            </a>
                        </li><!--end .dropdown-progress -->
                        <li class="dropdown-progress">
                            <a href="javascript:void(0);">
                                <div class="dropdown-label">
                                    <span class="text-light">Server load <strong>Lastweek</strong></span>
                                    <strong class="pull-right">74%</strong>
                                </div>
                                <div class="progress"><div class="progress-bar progress-bar-warning" style="width: 74%"></div></div>
                            </a>
                        </li><!--end .dropdown-progress -->
                    </ul><!--end .dropdown-menu -->
                </li><!--end .dropdown -->
            </ul><!--end .header-nav-options -->
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
<style>
    .extra-text-bottom { text-align: left;}
    .extra-text-bottom ul { margin: 0; padding: 2% 5%; background:#d0d0d0;}
    .extra-text-bottom ul li { list-style: square inside !important; font-size: 12px; font-weight: bold;}
</style>
<!-- BEGIN BASE-->
<div id="base">
    <!-- BEGIN CONTENT-->
    <div id="content">
        <section>
            <div class="section-body"></div>
            <div class="row">
                <!-- BEGIN SITE ACTIVITY -->
                <div class="col-md-12">

                    <!--===== For Sales Comparison ===================================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Sales Comparison</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 50,00,000,000.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(66%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:66%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(77%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:77%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 48,00,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 3,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 45,00,000,000.00/=</td></tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--===== For Brand Comparison ===================================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Sales (Brand Comparison)</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_brand" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 35,00,000,000.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(44%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:44%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(56%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:56%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 33,00,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 2,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 31,00,000,000.00/=</td></tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--===== For Outlet Comparison ==================================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Sales (Outlet Comparison)</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_outlet" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 78,00,000,000.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(88%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:88%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(34%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:34%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 70,00,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 1,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 69,00,000,000.00/=</td></tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--===== For Client Comparison ==================================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Sales (Client wise Comparison)</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_client" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 6,909,098.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(66%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:66%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(77%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:77%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 5,909,098.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 1,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 4,909,098.00/=</td></tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--===== For Client Maximum Growth Pattern ======================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Sales (Client Maximum Growth Pattern)</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_client_max" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 44,00,000,000.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(66%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:66%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(77%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:77%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 40,00,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 4,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 36,00,000,000.00/=</td></tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--===== For Profit/Low Growth ==================================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Profit / Low Growth</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_profit" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 88,00,000,000.00/=</li>
                                            <li>Year : Jan, 2005 - Jan, 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(66%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:66%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(77%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:77%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 78,00,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 8,00,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 70,00,000,000.00/=</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--===== For Expense/Income Growth ==============================================================-->
                    <div class="card">
                        <div class="row" id="site-activity">
                            <div class="col-md-12">
                                <div class="col-md-9">
                                    <div class="card-head text-center">
                                        <header>Expense/Income Comparison</header>
                                    </div><!--end .card-head -->
                                    <div id="chart_div_income" style="width: 100%; height: 500px;"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card-head">
                                        <header style="padding-left:0;">Status Over view</header>
                                    </div>
                                    <div class="extra-text-bottom">
                                        <ul>
                                            <li>Total Sales Amount : Tk. 54,000,000.00/=</li>
                                            <li>Year : 2016</li>
                                        </ul>
                                    </div>
                                    <table class="table">
                                        <tr>
                                            <th colspan="3">
                                                Success(89.78%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:89.78%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="3">
                                                Improvement(72.56%)<i class="md md-trending-up"></i>
                                                <div class="progress progress-hairline">
                                                    <div class="progress-bar progress-bar-primary-dark" style="width:72.56%"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr><th>Cost</th><td>:</td><td>Tk. 54,000,000.00/=</td></tr>
                                        <tr><th>Revenue</th><td>:</td><td>Tk. 3,000,000.00/=</td></tr>
                                        <tr><th>Expense</th><td>:</td><td>Tk. 51,000,000.00/=</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--===== Graph END ====== -->
                    <!--<div class="card">
                        <div class="row" id="site-activity">


                            <div class="col-md-12">
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
                    </div>-->
                </div>
            </div>
        </section>
    </div><!--end #content-->
    <!-- END CONTENT -->

    <!-- BEGIN MENUBAR-->
    <!--<div id="menubar" class="menubar-inverse ">
        <div class="menubar-fixed-panel">
            <div>
                <a class="btn btn-icon-toggle btn-default menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        <div class="menubar-scroll-panel">
            &lt;!&ndash; BEGIN MAIN MENU &ndash;&gt;
            <ul id="main-menu" class="gui-controls">

                &lt;!&ndash; BEGIN DASHBOARD &ndash;&gt;
                <li>
                    <a href="dashboard.html" class="active">
                        <div class="gui-icon"><i class="md md-home"></i></div>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                &lt;!&ndash; END DASHBOARD &ndash;&gt;

                &lt;!&ndash; Multiple Chart &ndash;&gt;

                <li class="gui-folder">
                    <a>
                        <div class="gui-icon"><i class="md md-email"></i></div>
                        <span class="title">Charts</span>
                    </a>
                    <ul>
                        <li><a href="line_chart.html" ><span class="title">Line Chart</span></a></li>
                        &lt;!&ndash;<li><a href="pie_chart.html" ><span class="title">Pie Chart</span></a></li>
                        <li><a href="3d_pie_chart.html" ><span class="title">3D Pie Chart</span></a></li>&ndash;&gt;
                        <li><a href="donut_chart.html" ><span class="title">Donut Chart</span></a></li>
                        &lt;!&ndash;<li><a href="exploding_slice.html" ><span class="title">Exploding a Slice</span></a></li>&ndash;&gt;
                        <li><a href="default_column_chart.html" ><span class="title">Default Column Chart</span></a></li>
                        &lt;!&ndash;<li><a href="multiple_column_chart.html" ><span class="title">Multiple Column Chart</span></a></li>
                        <li><a href="stacked_column_chart.html" ><span class="title">Stacked columns Chart</span></a></li>&ndash;&gt;
                        <li><a href="sales_comparison.html" ><span class="title">Combo Chart</span></a></li>
                    </ul>
                </li>



                &lt;!&ndash; Individual Shop Growth &ndash;&gt;
                <li>
                    <a href="individual_shop_growth.html">
                        <div class="gui-icon"><i class="md md-email"></i></div>
                        <span class="title">Individual Shop Growth</span>
                    </a>
                </li>


                &lt;!&ndash; Product Compare &ndash;&gt;
                <li>
                    <a href="product_compare.html">
                        <div class="gui-icon"><i class="md md-web"></i></div>
                        <span class="title">Product Compare</span>
                    </a>
                </li>


                &lt;!&ndash; Same product Compare &ndash;&gt;
                <li>
                    <a href="same_product_compare.html">
                        <div class="gui-icon"><i class="fa fa-puzzle-piece fa-fw"></i></div>
                        <span class="title">Same product Compare</span>
                    </a>
                </li>


                &lt;!&ndash; Discount as per sales &ndash;&gt;
                <li>
                    <a href="discount_as_per_sales.html">
                        <div class="gui-icon"><i class="fa fa-table"></i></div>
                        <span class="title">Discount as per sales</span>
                    </a>
                </li>


                &lt;!&ndash; Brand Compare &ndash;&gt;
                <li>
                    <a href="brand_compare.html">
                        <div class="gui-icon"><span class="glyphicon glyphicon-list-alt"></span></div>
                        <span class="title">Brand Compare</span>
                    </a>
                </li>


                &lt;!&ndash; Brand Best Selling &ndash;&gt;
                <li>
                    <a href="brand_best_selling.html">
                        <div class="gui-icon"><i class="md md-computer"></i></div>
                        <span class="title">Brand Best Selling</span>
                    </a>
                </li>


                &lt;!&ndash; Balance Report for all Store / Branch &ndash;&gt;
                <li>
                    <a href="balance_report_for_all_store_branch.html">
                        <div class="gui-icon"><i class="md md-assessment"></i></div>
                        <span class="title">Balance Report for all Store / Branch</span>
                    </a>
                </li>


                &lt;!&ndash; Check Life Cycle for each Product &ndash;&gt;
                <li>
                    <a href="check_life_cycle_for_each_product.html">
                        <div class="gui-icon"><i class="fa fa-folder-open fa-fw"></i></div>
                        <span class="title">Check Life Cycle for each Product</span>
                    </a>
                </li>

                &lt;!&ndash; Growth Overtime &ndash;&gt;
                <li>
                    <a href="growth_overtime.html">
                        <div class="gui-icon"><span class="glyphicon glyphicon-list-alt"></span></div>
                        <span class="title">Growth Overtime</span>
                    </a>
                </li>

                &lt;!&ndash;Growth Over incentive&ndash;&gt;
                <li>
                    <a href="growth_over_incentive.html">
                        <div class="gui-icon"><i class="fa fa-puzzle-piece fa-fw"></i></div>
                        <span class="title">Growth Over incentive</span>
                    </a>
                </li>

                &lt;!&ndash;Growth Over to Promotion&ndash;&gt;
                <li>
                    <a href="growth_over_to_promotion.html">
                        <div class="gui-icon"><i class="md md-assessment"></i></div>
                        <span class="title">Growth Over to Promotion</span>
                    </a>
                </li>

                &lt;!&ndash;Sales Promotion&ndash;&gt;
                <li>
                    <a href="sales_promotion.html">
                        <div class="gui-icon"><i class="md md-web"></i></div>
                        <span class="title">Sales Promotion</span>
                    </a>
                </li>


            </ul>
            &lt;!&ndash; END MAIN MENU &ndash;&gt;

            <div class="menubar-foot-panel">
                <small class="no-linebreak hidden-folded">
                    <span class="opacity-75">Copyright &copy; 2014</span> <strong>CodeCovers</strong>
                </small>
            </div>
        </div>&lt;!&ndash;end .menubar-scroll-panel&ndash;&gt;
    </div>&lt;!&ndash;end #menubar&ndash;&gt;-->
    <?php include("menu.php"); ?>
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
<script src="assets/js/core/demo/DemoDashboard.js"></script>
<script src="assets/js/sales_comparison.js"></script>

<!-- END JAVASCRIPT -->
<?php include("footer.php"); ?>
</body>
</html>
