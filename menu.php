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

            <li>
                <a href="sales_qty_1.php" class="active">
                    <div class="gui-icon"><i class="glyphicon glyphicon-list-alt"></i></div>
                    <span class="title">Target Achivement - Deficit</span>
                </a>
            </li>

            <li>
                <a href="sales_comparison.html" class="active">
                    <div class="gui-icon"><i class="glyphicon glyphicon-list-alt"></i></div>
                    <span class="title">Growth Chart Comparison</span>
                </a>
            </li>

            <!-- Multiple Chart -->

            <li class="gui-folder">
                <a>
                    <div class="gui-icon"><i class="glyphicon glyphicon-list-alt"></i></div>
                    <span class="title">Charts</span>
                </a>
                <ul>
                    <li><a href="line_chart.php"><span class="title">Line Chart</span></a></li>
                    <li><a href="donut_chart.php" ><span class="title">Donut Chart</span></a></li>
                    <li><a href="default_column_chart.php" ><span class="title">Default Column Chart</span></a></li>
                    <li><a href="combo.php" ><span class="title">Combo Chart</span></a></li>
                </ul>
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