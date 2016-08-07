/**
 * Created by etsb on 8/7/16.
 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);



function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador',  'Average'],
        ['2004/05',  50,      50,  250],
        ['2005/06',  620,      520, 250],
        ['2006/07',  380,      200, 250],
        ['2007/08',  880,      800, 250],
        ['2008/09',  450,      150,  250]
    ]);



    var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'line',
        series: {2: {type: 'line', color: '#FF0000'}}
    };

    /*var options = {
        seriesType: "line",
        series: {5: {type: "steppedArea", color: '#FF0000', visibleInLegend: false, areaOpacity: 0}}
    };*/

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}