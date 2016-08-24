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
        ['Jan 2016',    500,            '8%',                  500],
        ['Feb 2016',    620,            '15%',                  650],
        ['Mar 2016',    980,            '9%',                  680],
        ['Apr 2016',    1120,            '6%',                  600],
        ['May 2016',    1350,            '12%',                  600],
        ['Jun 2016',    1400,            '8%',                  600],
        ['Jul 2016',    1380,           '6%',                  650],
        ['Aug 2016',    1350,           '10%',                  680],
        ['Sep 2016',    1320,           '12%',                  700],
        ['Oct 2016',    1350,           '5%',                  680],
        ['Nov 2016',    1400,           '7%',                  700],
        ['Dec 2016',    1600,           '5%',                  750]
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

    //===== For Receipt Amount.

    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal'],
        ['Jan 2016',    1000000,            '8%',                  500000],
        ['Feb 2016',    1300000,            '15%',                 680000],
        ['Mar 2016',    1500000,            '9%',                  790000],
        ['Apr 2016',    1600000,            '6%',                  860000],
        ['May 2016',    1700000,            '12%',                 950000],
        ['Jun 2016',    1800000,            '8%',                  1000000],
        ['Jul 2016',    1900000,           '6%',                   1100000],
        ['Aug 2016',    2100000,           '10%',                  1250000],
        ['Sep 2016',    2300000,           '12%',                  1250000],
        ['Oct 2016',    2500000,           '5%',                   1250000],
        ['Nov 2016',    2700000,           '7%',                   1250000],
        ['Dec 2016',    3000000,           '5%',                   1250000]
    ]);

    var options_deficit = {
        title: 'Receipt Amount',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Amount(Tk)'},
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
        ['Jan 2016',    20000,            '8%',                  22000],
        ['Feb 2016',    25000,            '15%',                 22000],
        ['Mar 2016',    29000,            '9%',                  22000],
        ['Apr 2016',    32000,            '6%',                  22000],
        ['May 2016',    35000,            '12%',                 22000],
        ['Jun 2016',    33000,            '8%',                  22000],
        ['Jul 2016',    31000,           '6%',                   22000],
        ['Aug 2016',    33000,           '10%',                  22000],
        ['Sep 2016',    35000,           '12%',                  22000],
        ['Oct 2016',    42000,           '5%',                   22000],
        ['Nov 2016',    44000,           '7%',                   22000],
        ['Dec 2016',    41000,           '5%',                   22000]
    ]);

    var options_deficit = {
        title: 'Return : (Re-Saleable)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, maxValue:45000,title:'Return(Qty.)'},
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
        ['Jan 2016',    250,            '2%',                  300],
        ['Feb 2016',    410,            '1%',                 340],
        ['Mar 2016',    490,            '3%',                  360],
        ['Apr 2016',    560,            '4%',                  380],
        ['May 2016',    630,            '2%',                 390],
        ['Jun 2016',    660,            '5%',                  390],
        ['Jul 2016',    690,           '6%',                   400],
        ['Aug 2016',    710,           '8%',                  400],
        ['Sep 2016',    750,           '7%',                  400],
        ['Oct 2016',    760,           '9%',                   400],
        ['Nov 2016',    780,           '7%',                   400],
        ['Dec 2016',    800,           '5%',                   400]
    ]);

    var options_deficit = {
        title: 'Return : (Damage and Broken)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Return(Qty.)'},
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
        ['Jan 2016',    10,            '+2%',                  180],
        ['Feb 2016',    120,            '+10%',                 180],
        ['Mar 2016',    180,            '+9%',                  180],
        ['Apr 2016',    258,            '+7%',                  180],
        ['May 2016',    280,            '+2%',                 180],
        ['Jun 2016',    300,            '+2%',                  180],
        ['Jul 2016',    300,           '0%',                   180],
        ['Aug 2016',    270,           '-2%',                  180],
        ['Sep 2016',    270,           '-2%',                  180],
        ['Oct 2016',    280,           '+1%',                   180],
        ['Nov 2016',    340,           '+4%',                   180],
        ['Dec 2016',    360,           '+2%',                   180]
    ]);

    var options_deficit = {
        title: 'Return : (Manufacture Defects)',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Return(Qty.)'},
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
