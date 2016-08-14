/**
 * Created by etsb on 8/7/16.
 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);


function drawVisualization() {
    // Some raw data (not necessarily accurate)

    //===== For sales Comparison
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Sales'],
        ['Jan 2005',  165],
        ['Jan 2006',  185],
        ['Jan 2007',  205],
        ['Jan 2008',  350],
        ['Jan 2009',  240],
        ['Jan 2010',  285],
        ['Jan 2011',  270],
        ['Jan 2012',  280],
        ['Jan 2013',  295],
        ['Jan 2014',  548],
        ['Jan 2015',  458],
        ['Jan 2016',  678]
    ]);

    var options = {
        //title : 'Breakdown Graph',
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    //===== For Brand Comparison
    var data_brand = google.visualization.arrayToDataTable([
        ['Month', 'Chinball', 'Ocean', 'Arc'],
        ['Jan 2005',  165,   320,          200 ],
        ['Jan 2006',  185,   320,          300 ],
        ['Jan 2007',  205,   320,          200 ],
        ['Jan 2008',  250,   320,          320 ],
        ['Jan 2009',  240,   320,          340 ],
        ['Jan 2010',  245,   320,          230 ],
        ['Jan 2011',  270,   320,          450 ],
        ['Jan 2012',  280,   320,          540 ],
        ['Jan 2013',  295,   320,          120 ],
        ['Jan 2014',  548,   320,          150 ],
        ['Jan 2015',  358,   320,          180 ],
        ['Jan 2016',  478,   320,          230 ]
    ]);
    var options_brand = {
        //title : 'Breakdown Graph',
        colors:['#205','#609','#a0d'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_brand'));
    chart.draw(data_brand, options_brand);


    //===== For Outlet Comparison
    var data_outlet = google.visualization.arrayToDataTable([
        ['Month', 'Dhanmondi', 'Gulshan',    'Uttara'],
        ['Jan 2005',  165,     120,          200 ],
        ['Jan 2006',  185,     220,          300 ],
        ['Jan 2007',  205,     320,          200 ],
        ['Jan 2008',  250,     420,          320 ],
        ['Jan 2009',  240,     320,          340 ],
        ['Jan 2010',  245,     220,          230 ],
        ['Jan 2011',  270,     120,          450 ],
        ['Jan 2012',  280,     320,          540 ],
        ['Jan 2013',  295,     220,          120 ],
        ['Jan 2014',  548,     320,          150 ],
        ['Jan 2015',  358,     420,          180 ],
        ['Jan 2016',  478,     320,          230 ]
    ]);
    var options_outlet = {
        //title : 'Breakdown Graph',
        colors:['#909090','#404040','101010'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_outlet'));
    chart.draw(data_outlet, options_outlet);


    //===== For Client Comparison
    var data_client = google.visualization.arrayToDataTable([
        ['Month', 'Agora', 'client'],
        ['Jan 2005',  165,     320],
        ['Jan 2006',  185,     320],
        ['Jan 2007',  205,     320],
        ['Jan 2008',  250,     320],
        ['Jan 2009',  240,     320],
        ['Jan 2010',  245,     320],
        ['Jan 2011',  270,     320],
        ['Jan 2012',  280,     320],
        ['Jan 2013',  295,     320],
        ['Jan 2014',  548,     320],
        ['Jan 2015',  358,     320],
        ['Jan 2016',  478,     320]
    ]);
    var options_client = {
        //title : 'Breakdown Graph',
        colors:['red','brown'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {2: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_client'));
    chart.draw(data_client, options_client);

    //===== For Client Maximum Growth Pattern
    var data_client_max = google.visualization.arrayToDataTable([
        ['Month', '', 'Agora(Growth Pattern)'],
        ['Jan 2005',  0,     50],
        ['Jan 2006',  0,     150],
        ['Jan 2007',  0,     100],
        ['Jan 2008',  0,     250],
        ['Jan 2009',  0,     200],
        ['Jan 2010',  0,     350],
        ['Jan 2011',  0,     300],
        ['Jan 2012',  0,     450],
        ['Jan 2013',  0,     400],
        ['Jan 2014',  0,     460],
        ['Jan 2015',  0,     470],
        ['Jan 2016',  0,     465]
    ]);
    var options_client_max = {
        //title : 'Breakdown Graph',
        colors:['white','green'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        pointSize: 10,
        curveType: 'function',
        seriesType: 'bars',
        series: {1: {type: 'line'}}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_client_max'));
    chart.draw(data_client_max, options_client_max);


    //===== For Profit/Low Growth
    var data_profit = google.visualization.arrayToDataTable([
        ['Month', 'Sales', 'Profit Lavel'],
        ['Jan 2005',  165,     320],
        ['Jan 2006',  185,     320],
        ['Jan 2007',  205,     320],
        ['Jan 2008',  250,     320],
        ['Jan 2009',  240,     320],
        ['Jan 2010',  245,     320],
        ['Jan 2011',  270,     320],
        ['Jan 2012',  280,     320],
        ['Jan 2013',  295,     320],
        ['Jan 2014',  548,     320],
        ['Jan 2015',  358,     320],
        ['Jan 2016',  478,     320]
    ]);
    var options_profit = {
        //title : 'Breakdown Graph',
        colors: ['deeppink', 'purple'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_profit'));
    chart.draw(data_profit, options_profit);


    //===== For Expense/Income Growth
    var data_income = google.visualization.arrayToDataTable([
        ['Month', 'Income', 'Expense'],
        ['Jan 2005',  265,     320],
        ['Jan 2006',  185,     220],
        ['Jan 2007',  205,     320],
        ['Jan 2008',  250,     420],
        ['Jan 2009',  240,     320],
        ['Jan 2010',  245,     320],
        ['Jan 2011',  270,     340],
        ['Jan 2012',  280,     220],
        ['Jan 2013',  295,     320],
        ['Jan 2014',  548,     420],
        ['Jan 2015',  358,     320],
        ['Jan 2016',  478,     120]
    ]);
    var options_income = {
        //title : 'Breakdown Graph',
        colors: ["#040","green","yellow"],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {2: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_income'));
    chart.draw(data_income, options_income);
}
