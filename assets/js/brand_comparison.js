/**
 * Created by etsb on 8/7/16.

 */

//alert("OK---1");

google.charts.load('current', {'packages':['corechart']});
alert("OK");

google.charts.setOnLoadCallback(drawVisualization);

alert("OK");

function drawVisualization() {
    alert("OK");

    // Some raw data (not necessarily accurate)
    var data_brand = google.visualization.arrayToDataTable([
        ['Month', 'Amount', 'Target'],
        ['Jan 2005',  165,   320],
        ['Jan 2006',  185,   320],
        ['Jan 2007',  205,   320],
        ['Jan 2008',  250,   320],
        ['Jan 2009',  240,   320],
        ['Jan 2010',  245,   320],
        ['Jan 2011',  270,   320],
        ['Jan 2012',  280,   320],
        ['Jan 2013',  295,   320],
        ['Jan 2014',  548,   320],
        ['Jan 2015',  358,   320],
        ['Jan 2016',  478,   320]
    ]);

    alert("OK");

    var options_brand = {
        //title : 'Breakdown Graph',
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time----'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
    };

    alert("OK");

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    alert(chart);
    chart.draw(data_brand, options_brand);
}
