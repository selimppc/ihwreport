/**
 * Created by etsb on 8/7/16.
 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);


function drawVisualization() {
    // Some raw data (not necessarily accurate)

    //===== For Target Achievement Deficit in Taka
    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},  'No Profit No Loss'],
        ['Jan 2016',    706000,            '20%',                 1000000],
        ['Feb 2016',    2050000,            '35%',                1500000],
        ['Mar 2016',    1878900,            '5%',                 2100000],
        ['Apr 2016',    2858000,            '25%',                2300000],
        ['May 2016',    2394000,            '10%',                2500000],
        ['Jun 2016',    3080000,            '15%',                2700000],

    ]);

    var options_deficit = {
        title: 'Sales Per Taka',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Sales(Tk)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7},
            1:{ pointSize:5, lineDashStyle:[5, 5, 5]}

        },
        aggregationTarget: 'category',
        //selectionMode: 'multiple',
        //tooltip: {trigger: 'selection'}
        annotations: {
            boxStyle: {
                stroke: '#909090',         // Color of the box outline.
                strokeWidth: 1,         // Thickness of the box outline.
                rx: 5,                 // x-radius of the corner curvature.
                ry: 5,                 // y-radius of the corner curvature.
                gradient: {
                    color1: '#fff',      // Start color for gradient.
                    color2: '#fff',      // Finish color for gradient.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 14,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                color: '#202020',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_target_achievement_deficit_taka'));
    chart.draw(data_deficit, options_deficit);


    //===== For Target Achievement Deficit in Qty

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},  'No Profit No Loss'],
        ['Jan 2016',    15000,            '30%',                 28000],
        ['Feb 2016',    30000,            '20%',                 28000],
        ['Mar 2016',    25000,            '15%',                 28000],
        ['Apr 2016',    35000,            '18%',                 28000],
        ['May 2016',    38000,            '5%',                  28000],
        ['Jun 2016',    31000,            '12%',                 28000],


    ]);

    var options_deficit = {
        title: 'Sales Per Quantity',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Sales(Qty)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7},
            1:{ pointSize:5, color:'#040',lineDashStyle:[5, 5, 5]}

        },
        aggregationTarget: 'category',
        //selectionMode: 'multiple',
        //tooltip: {trigger: 'selection'}
        annotations: {
            boxStyle: {
                stroke: '#909090',         // Color of the box outline.
                strokeWidth: 1,         // Thickness of the box outline.
                rx: 5,                 // x-radius of the corner curvature.
                ry: 5,                 // y-radius of the corner curvature.
                gradient: {
                    color1: '#fff',      // Start color for gradient.
                    color2: '#fff',      // Finish color for gradient.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 14,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                color: '#202020',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_target_achievement_deficit_qty'));
    chart.draw(data_deficit, options_deficit);


    //===== For Target Achievement Deficit
    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    7000,            '20%',                  400],
        ['Feb 2016',    13000,            '20%',                  500],
        ['Mar 2016',    22000,            '20%',                  600],
        ['Apr 2016',    32000,            '20%',                  700],
        ['May 2016',    35000,            '20%',                  800],
        ['Jun 2016',    33000,            '20%',                  900],
        ['Jul 2016',    31000,           '20%',                  1000],
        ['Aug 2016',    33000,           '20%',                  1050],
        ['Sep 2016',    35000,           '20%',                  1100],
        ['Oct 2016',    42000,           '20%',                  1130],
        ['Nov 2016',    39000,           '20%',                  1180],
        ['Dec 2016',    37000,           '20%',                  1200]
    ]);

    var options_deficit = {
        title: 'Delivery Goods',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Delivery(Qty)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7,color:'#040',},
            //1:{ pointSize:7},
            //2:{ pointSize:5, color:'#040',lineDashStyle:[5, 1, 3]}
            1:{ pointSize:5, lineDashStyle:[5, 5, 5]}
        },
        aggregationTarget: 'category',
        //selectionMode: 'multiple',
        //tooltip: {trigger: 'selection'}
        annotations: {
            boxStyle: {
                stroke: '#909090',         // Color of the box outline.
                strokeWidth: 1,         // Thickness of the box outline.
                rx: 5,                 // x-radius of the corner curvature.
                ry: 5,                 // y-radius of the corner curvature.
                gradient: {
                    color1: '#fff',      // Start color for gradient.
                    color2: '#fff',      // Finish color for gradient.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 14,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                color: '#202020',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_delivery_goods'));
    chart.draw(data_deficit, options_deficit);


}
