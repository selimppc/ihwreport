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


    //===== For Return (Re-saleable)

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    20000,            '8%',                  28000],
        ['Feb 2016',    25000,            '15%',                 27000],
        ['Mar 2016',    29000,            '9%',                  26000],
        ['Apr 2016',    32000,            '6%',                  27500],
        ['May 2016',    35000,            '12%',                 29000],
        ['Jun 2016',    33000,            '8%',                  32000],
        ['Jul 2016',    31000,           '6%',                   33500],
        ['Aug 2016',    33000,           '10%',                  33000],
        ['Sep 2016',    35000,           '12%',                  33000],
        ['Oct 2016',    42000,           '5%',                   32000],
        ['Nov 2016',    39000,           '7%',                   31000],
        ['Dec 2016',    37000,           '5%',                   30000]
    ]);

    var options_deficit = {
        title: 'Return : (Re-Saleable)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:100000,title:'Return(Qty.)'},
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

    var chart = new google.visualization.AreaChart(document.getElementById('chart_return_re_saleable'));
    chart.draw(data_deficit, options_deficit);


    //===== For Return (Damage and Broken)

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    550,            '2%',                  900],
        ['Feb 2016',    1000,            '1%',                 1300],
        ['Mar 2016',    1560,            '3%',                  1450],
        ['Apr 2016',    1680,            '4%',                  1600],
        ['May 2016',    1800,            '2%',                 2000],
        ['Jun 2016',    1900,            '5%',                  2000],
        ['Jul 2016',    2000,           '6%',                   1800],
        ['Aug 2016',    2100,           '8%',                  1700],
        ['Sep 2016',    1950,           '7%',                  1600],
        ['Oct 2016',    2100,           '9%',                   1580],
        ['Nov 2016',    2300,           '7%',                   1560],
        ['Dec 2016',    2400,           '5%',                   1550]
    ]);

    var options_deficit = {
        title: 'Return : (Damage and Broken)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:6500,title:'Return(Qty.)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7, color:'#a00'},
            //1:{ pointSize:7},
            //2:{ pointSize:5, color:'#040',lineDashStyle:[5, 1, 3]}
            1:{ pointSize:5, color:'#00a',lineDashStyle:[5, 5, 5]}
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

    var chart = new google.visualization.AreaChart(document.getElementById('chart_return_damage_broken'));
    chart.draw(data_deficit, options_deficit);


    //===== For Return (Manufacture Defect)

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    100,            '2%',                  240],
        ['Feb 2016',    180,            '1%',                 240],
        ['Mar 2016',    250,            '3%',                  240],
        ['Apr 2016',    298,            '4%',                  240],
        ['May 2016',    350,            '2%',                 240],
        ['Jun 2016',    340,            '5%',                  240],
        ['Jul 2016',    300,           '2%',                   240],
        ['Aug 2016',    270,           '1%',                  240],
        ['Sep 2016',    240,           '3%',                  240],
        ['Oct 2016',    280,           '1%',                   240],
        ['Nov 2016',    340,           '4%',                   240],
        ['Dec 2016',    360,           '5%',                   240]
    ]);

    var options_deficit = {
        title: 'Return : (Manufacture Defects)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:1200,title:'Return(Qty.)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7, color:'#060'},
            //1:{ pointSize:7},
            //2:{ pointSize:5, color:'#040',lineDashStyle:[5, 1, 3]}
            1:{ pointSize:5, color:'#600',lineDashStyle:[5, 5, 5]}
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

    var chart = new google.visualization.AreaChart(document.getElementById('chart_return_manufacture_defect'));
    chart.draw(data_deficit, options_deficit);


}
