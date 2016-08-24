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
        ['Jan 2016',    306000,            '10%',                500000],
        ['Feb 2016',    550000,            '12%',                650000],
        ['Mar 2016',    778900,            '15%',                 700000],
        ['Apr 2016',    770000,            '5%',                770000],
        ['May 2016',    850000,            '7%',                760000],
        ['Jun 2016',    970000,            '9%',                750000],
        ['Jul 2016',    1050000,            '4%',               740000],

    ]);

    var options_deficit = {
        title: 'Sales Per Taka',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:2000000, title:'Sales(Tk)'},
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
        ['Jan 2016',    5000,            '11%',                 12000],
        ['Feb 2016',    10000,            '12%',                 12000],
        ['Mar 2016',    13000,            '9%',                 12000],
        ['Apr 2016',    14000,            '6%',                 12000],
        ['May 2016',    16000,            '8%',                  12000],
        ['Jun 2016',    18000,            '5%',                 12000],


    ]);

    var options_deficit = {
        title: 'Sales Per Quantity',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0,maxValue:40000, title:'Sales(Qty)'/*, gridlines:{count:10}*/},
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


    //===== For Delivery Qty.
    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    500,            '8%',                  800],
        ['Feb 2016',    620,            '15%',                  890],
        ['Mar 2016',    980,            '9%',                  1130],
        ['Apr 2016',    1120,            '6%',                  1130],
        ['May 2016',    1350,            '12%',                  1200],
        ['Jun 2016',    1400,            '8%',                  1210],
        ['Jul 2016',    1380,           '6%',                  1220],
        ['Aug 2016',    1350,           '10%',                  1230],
        ['Sep 2016',    1320,           '12%',                  1220],
        ['Oct 2016',    1350,           '5%',                  1210],
        ['Nov 2016',    1400,           '7%',                  1200],
        ['Dec 2016',    1600,           '5%',                  1190]
    ]);

    var options_deficit = {
        title: 'Delivery Goods',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:4000,title:'Delivery(Qty)'},
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

    //===== For Receipt Amount.

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    1000000,            '8%',                  1300000],
        ['Feb 2016',    1300000,            '15%',                 1380000],
        ['Mar 2016',    1500000,            '9%',                  1390000],
        ['Apr 2016',    2000000,            '6%',                  1460000],
        ['May 2016',    1800000,            '12%',                 1550000],
        ['Jun 2016',    1600000,            '8%',                  1600000],
        ['Jul 2016',    1900000,           '6%',                   1700000],
        ['Aug 2016',    2400000,           '10%',                  1750000],
        ['Sep 2016',    2700000,           '12%',                  1700000],
        ['Oct 2016',    3100000,           '5%',                   1800000],
        ['Nov 2016',    3500000,           '7%',                   1850000],
        ['Dec 2016',    3300000,           '5%',                   1950000]
    ]);

    var options_deficit = {
        title: 'Receipt Amount',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:7000000,title:'Amount(Tk)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7},
            //1:{ pointSize:7},
            //2:{ pointSize:5, color:'#040',lineDashStyle:[5, 1, 3]}
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

    var chart = new google.visualization.AreaChart(document.getElementById('chart_receipt_amount'));
    chart.draw(data_deficit, options_deficit);


}
