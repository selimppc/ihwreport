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
        ['Jan 2005',  23232323],
        ['Jan 2006',  12121212],
        ['Jan 2007',  12239090],
        ['Jan 2008',  40000000],
        ['Jan 2009',  23000000],
        ['Jan 2010',  19900000],
        ['Jan 2011',  29900000],
        ['Jan 2012',  12000000],
        ['Jan 2013',  43000000],
        ['Jan 2014',  50000000],
        ['Jan 2015',  20000000],
        ['Jan 2016',  60000000]
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
        ['Jan 2005',  12121212,   13131313,          14141414 ],
        ['Jan 2006',  21212121,   21212323,          23343434 ],
        ['Jan 2007',  45454545,   34343434,          34454545 ],
        ['Jan 2008',  15151515,   16161616,          21212121 ],
        ['Jan 2009',  15115151,   32322323,          41414141 ],
        ['Jan 2010',  65656565,   42424242,          65656565 ],
        ['Jan 2011',  36363636,   29292929,          57575757 ],
        ['Jan 2012',  46464646,   56565656,          78787878 ],
        ['Jan 2013',  14714745,   15915935,          35815847 ],
        ['Jan 2014',  45685231,   25845615,          15948763 ],
        ['Jan 2015',  68425371,   65765128,          56847512 ],
        ['Jan 2016',  77441122,   22884455,          11441141 ]
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
        ['Jan 2005',  23232323,     58974582,          58568965 ],
        ['Jan 2006',  26326315,     25869354,          65658965 ],
        ['Jan 2007',  36236251,     54785965,          65895645 ],
        ['Jan 2008',  41245251,     45825695,          12545632 ],
        ['Jan 2009',  52356362,     35625214,          24521452 ],
        ['Jan 2010',  41346316,     25632541,          25632541 ],
        ['Jan 2011',  54621352,     25849856,          32563255 ],
        ['Jan 2012',  12352465,     62351451,          45623215 ],
        ['Jan 2013',  52894713,     32564581,          36525452 ],
        ['Jan 2014',  63254125,     45847584,          54525412 ],
        ['Jan 2015',  23625624,     14521563,          45214521 ],
        ['Jan 2016',  47845896,     23652145,          12451152 ]
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
        ['Month', 'Agora', 'Ocean'],
        ['Jan 2005',  959595,     898989],
        ['Jan 2006',  454545,     545454],
        ['Jan 2007',  787878,     686868],
        ['Jan 2008',  898989,     595959],
        ['Jan 2009',  565656,     292929],
        ['Jan 2010',  454545,     282828],
        ['Jan 2011',  595959,     353535],
        ['Jan 2012',  565656,     252525],
        ['Jan 2013',  353535,     151515],
        ['Jan 2014',  656565,     656556],
        ['Jan 2015',  636363,     232323],
        ['Jan 2016',  454545,     121212]
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
        ['Jan 2005',  0,     5050505],
        ['Jan 2006',  0,     15015015],
        ['Jan 2007',  0,     10000000],
        ['Jan 2008',  0,     25025032],
        ['Jan 2009',  0,     20000000],
        ['Jan 2010',  0,     35035032],
        ['Jan 2011',  0,     30000000],
        ['Jan 2012',  0,     45045045],
        ['Jan 2013',  0,     40000000],
        ['Jan 2014',  0,     46046012],
        ['Jan 2015',  0,     47047023],
        ['Jan 2016',  0,     46585656]
    ]);
    var options_client_max = {
        //title : 'Breakdown Graph',
        colors:['white','green'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        pointSize: 10,
        curveType: 'function',
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        //vAxis: { gridlines: { count: 8 } }

    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_client_max'));
    chart.draw(data_client_max, options_client_max);


    //===== For Profit/Loss Growth
    var data_profit = google.visualization.arrayToDataTable([
        ['Month',     'Sales',      'Sales line',      'Profit Lavel'],
        ['Jan 2005',  45645652,     45645652,           35353625],
        ['Jan 2006',  15915956,     15915956,           35353625],
        ['Jan 2007',  41526325,     41526325,           35353625],
        ['Jan 2008',  32563251,     32563251,           35353625],
        ['Jan 2009',  24515632,     24515632,           35353625],
        ['Jan 2010',  32512451,     32512451,           35353625],
        ['Jan 2011',  52632512,     52632512,           35353625],
        ['Jan 2012',  32563212,     32563212,           35353625],
        ['Jan 2013',  25252526,     25252526,           35353625],
        ['Jan 2014',  14512125,     14512125,           35353625],
        ['Jan 2015',  21521452,     21521452,           35353625],
        ['Jan 2016',  15245212,     15245212,           35353625]
    ]);
    var options_profit = {
        //title : 'Breakdown Graph',
        colors: ['deeppink', 'purple'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        curveType: 'function',
        seriesType: 'bars',
        series: {
            1: {type: 'line', pointSize:10},
            2: {type: 'line'}
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_profit'));
    chart.draw(data_profit, options_profit);


    //===== For Expense/Income Growth
    var data_income = google.visualization.arrayToDataTable([
        ['Month', 'Income', 'Expense'],
        ['Jan 2005',  123123,     101010],
        ['Jan 2006',  232323,     212121],
        ['Jan 2007',  151515,     101010],
        ['Jan 2008',  323232,     303030],
        ['Jan 2009',  252525,     202020],
        ['Jan 2010',  141414,     101010],
        ['Jan 2011',  252525,     202020],
        ['Jan 2012',  363636,     252525],
        ['Jan 2013',  525252,     494949],
        ['Jan 2014',  545454,     505050],
        ['Jan 2015',  575757,     515151],
        ['Jan 2016',  656565,     565656]
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
