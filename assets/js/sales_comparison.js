/**
 * Created by etsb on 8/7/16.
 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);


function drawVisualization() {
    // Some raw data (not necessarily accurate)

    //===== For sales Comparison
    var data = google.visualization.arrayToDataTable([
        ['Month',       'Sales',        'Sales line',   { role: 'annotation' }],
        ['Jan 2005',    23232323,       23232323,       '23.2%'],
        ['Jan 2006',    12121212,       12121212,       '-12.1%'],
        ['Jan 2007',    12239090,       12239090,       '+12.2%'],
        ['Jan 2008',    40000000,       40000000,       '+40%'],
        ['Jan 2009',    23000000,       23000000,       '-23%'],
        ['Jan 2010',    19900000,       19900000,       '-19%'],
        ['Jan 2011',    29900000,       29900000,       '+29.9%'],
        ['Jan 2012',    12000000,       12000000,       '-12%'],
        ['Jan 2013',    43000000,       43000000,       '+43%'],
        ['Jan 2014',    50000000,       50000000,       '+50%'],
        ['Jan 2015',    20000000,       20000000,       '-20%'],
        ['Jan 2016',    60000000,       60000000,       '+60%']
    ]);

    var options = {
        //title : 'Breakdown Graph',
        colors:['#494'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        curveType: 'function',
        bar: {groupWidth:'90%'},
        series: {
            1: {type: 'line', axis: 'distance', pointSize:10, color:'#906', axisTitle:'kjlk'},
            2: {type: 'line'}
        },
        //legend : {position: 'top', textStyle: {color: 'blue', fontSize: 16}}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    //===== For Brand Comparison
    var data_brand = google.visualization.arrayToDataTable([
        ['Month',       'Chinball',     {role:'annotation'},    'Ocean',        {role:'annotation'},    'Arc',          {role:'annotation'}  ],
        ['Jan 2005',    12121212,       '12%',                  13131313,       '13%',                  14141414,       '14%'],
        ['Jan 2006',    21212121,       '+21%',                  21212323,       '+21%',                  23343434,       '+23%'],
        ['Jan 2007',    45454545,       '+45%',                  34343434,       '+34%',                  34454545,       '+34%'],
        ['Jan 2008',    15151515,       '-15%',                  16161616,       '-16%',                  21212121,       '-21%'],
        ['Jan 2009',    15115151,       '15%',                  32322323,       '+32%',                  41414141,       '+41%'],
        ['Jan 2010',    65656565,       '+65%',                  42424242,       '+42%',                  65656565,       '+65%'],
        ['Jan 2011',    36363636,       '-36%',                  29292929,       '-29%',                  57575757,       '+57%'],
        ['Jan 2012',    46464646,       '+46%',                  56565656,       '+56%',                  78787878,       '+78%'],
        ['Jan 2013',    14714745,       '-14%',                  15915935,       '-15%',                  35815847,       '-35%'],
        ['Jan 2014',    45685231,       '+45%',                  25845615,       '+25%',                  15948763,       '-15%'],
        ['Jan 2015',    68425371,       '+68%',                  65765128,       '+65%',                  56847512,       '+56%'],
        ['Jan 2016',    77441122,       '+77%',                  22884455,       '-22%',                  11441141,       '-11%']
    ]);
    var options_brand = {
        //title : 'Breakdown Graph',
        colors:['#205','#609','#a0d'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        bar: {groupWidth:'90%'},
        series: {
            //0: { type: 'line', annotations: { textStyle: {fontSize: 12, color: 'red' } } },
            //1: { type: 'line', annotations: { textStyle: {fontSize: 12, color: 'blue' } } },
            //3: { type: 'line' }
        },
        //isStacked: true,
        annotations: {
            boxStyle: {
                stroke: '#888',         // Color of the box outline.
                strokeWidth: 1,         // Thickness of the box outline.
                rx: 5,                 // x-radius of the corner curvature.
                ry: 5,                 // y-radius of the corner curvature.

                // Attributes for linear gradient fill.
                gradient: {
                    color1: '#fff',      // Start color for gradient.
                    color2: '#909090',      // Finish color for gradient.
                    // Where on the boundary to start and
                    // end the color1/color2 gradient,
                    // relative to the upper left corner
                    // of the boundary.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    // If true, the boundary for x1,
                    // y1, x2, and y2 is the box. If
                    // false, it's the entire chart.
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 10,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                //color: '#fff',     // The color of the text.
                //auraColor: '#d799ae', // The color of the text outline.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'point',
            //style: 'line',
            alwaysOutside: false,
            //annotationsWidth:'40'
            domain:{
                style:'line'
            },
        }

    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_brand'));
    chart.draw(data_brand, options_brand);


    //===== For Outlet Comparison
    var data_outlet = google.visualization.arrayToDataTable([
        ['Month',       'Dhanmondi',    {role:'annotation'},    'Gulshan',      {role:'annotation'},    'Uttara',       {role:'annotation'}],
        ['Jan 2005',    23232323,       '23%',                  58974582,       '23%',                  58568965,       '58%' ],
        ['Jan 2006',    26326315,       '+26%',                 25869354,       '+25%',                 65658965,       '+65%' ],
        ['Jan 2007',    36236251,       '+36%',                 54785965,       '+54%',                 65895645,       '65%' ],
        ['Jan 2008',    41245251,       '+41%',                 45825695,       '-45%',                 12545632,       '-12%' ],
        ['Jan 2009',    52356362,       '+52%',                 35625214,       '-35%',                 24521452,       '+24%' ],
        ['Jan 2010',    41346316,       '-41%',                 25632541,       '-25%',                 25632541,       '+25%' ],
        ['Jan 2011',    54621352,       '+54%',                 25849856,       '25%',                  32563255,       '+32%' ],
        ['Jan 2012',    12352465,       '-12%',                 62351451,       '+62%',                 45623215,       '+45%' ],
        ['Jan 2013',    52894713,       '+52%',                 32564581,       '-32%',                 36525452,       '-36%' ],
        ['Jan 2014',    63254125,       '+63%',                 45847584,       '+45%',                 54525412,       '+54%' ],
        ['Jan 2015',    23625624,       '-23%',                 14521563,       '-14%',                 45214521,       '-45%' ],
        ['Jan 2016',    47845896,       '+47%',                 23652145,       '+23%',                 12451152,       '-12%' ]
    ]);
    var options_outlet = {
        //title : 'Breakdown Graph',
        colors:['#494','#262','131'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        bar: {groupWidth:'90%'},
        annotations: {
            boxStyle: {
                //stroke: '#000',         // Color of the box outline.
                strokeWidth: 1,         // Thickness of the box outline.
                rx: 5,                 // x-radius of the corner curvature.
                ry: 5,                 // y-radius of the corner curvature.

                // Attributes for linear gradient fill.
                gradient: {
                    color1: '#906',      // Start color for gradient.
                    color2: '#906',      // Finish color for gradient.
                    // Where on the boundary to start and
                    // end the color1/color2 gradient,
                    // relative to the upper left corner
                    // of the boundary.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    // If true, the boundary for x1,
                    // y1, x2, and y2 is the box. If
                    // false, it's the entire chart.
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 10,
                auraColor: 'transparent',
                //bold: true,
                //italic: true,
                color: '#fff',     // The color of the text.
                 //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_outlet'));
    chart.draw(data_outlet, options_outlet);


    //===== For Client Comparison
    var data_client = google.visualization.arrayToDataTable([
        ['Month',       'Agora',    {role:'annotation'},    'line-Agora',      'Ocean',     {role:'annotation'},    'line-Ocean'],
        ['Jan 2005',    959595,     '95%',                  959595,             898989,     '89%',                  898989],
        ['Jan 2006',    454545,     '-45%',                 454545,             545454,     '-54%',                 545454],
        ['Jan 2007',    787878,     '+78%',                 787878,             686868,     '+68%',                 686868],
        ['Jan 2008',    898989,     '+89%',                 898989,             595959,     '-59%',                 595959],
        ['Jan 2009',    565656,     '-56%',                 565656,             292929,     '-29%',                 292929],
        ['Jan 2010',    454545,     '-45%',                 454545,             282828,     '-28%',                 282828],
        ['Jan 2011',    595959,     '+59%',                 595959,             353535,     '+35%',                 353535],
        ['Jan 2012',    565656,     '-56%',                 565656,             252525,     '-25%',                 252525],
        ['Jan 2013',    353535,     '-35%',                 353535,             151515,     '-15%',                 151515],
        ['Jan 2014',    656565,     '+65%',                 656565,             656556,     '+65%',                 656556],
        ['Jan 2015',    636363,     '-63%',                 636363,             232323,     '-23%',                 232323],
        ['Jan 2016',    454545,     '-45%',                 454545,             121212,     '-12%',                 121212]
    ]);
    var options_client = {
        //title : 'Breakdown Graph',
        colors:['#080','brown','#800'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        curveType:'function',
        bar: {groupWidth:'85%'},
        series: {
            1: {type: 'line', pointSize:5, color:'#060', },
            3: {type: 'line', pointSize:5, color:'#600'}
        },

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
                fontSize: 10,
                auraColor: 'transparent',
                //bold: true,
                //italic: true,
                color: '#202020',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            alwaysOutside: true,
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_client'));
    chart.draw(data_client, options_client);

    //===== For Client Maximum Growth Pattern
    var data_client_max = google.visualization.arrayToDataTable([
        ['Month',     '',   'Agora(Growth Pattern)',    {role:'annotation'}],
        ['Jan 2005',  0,    5050505,                    '5%'],
        ['Jan 2006',  0,    15015015,                   '+15%'],
        ['Jan 2007',  0,    10000000,                   '-10%'],
        ['Jan 2008',  0,    25025032,                   '+25%'],
        ['Jan 2009',  0,    20000000,                   '-20%'],
        ['Jan 2010',  0,    35035032,                   '+35%'],
        ['Jan 2011',  0,    30000000,                   '-30%'],
        ['Jan 2012',  0,    45045045,                   '+45%'],
        ['Jan 2013',  0,    40000000,                   '-40%'],
        ['Jan 2014',  0,    46046012,                   '+46%'],
        ['Jan 2015',  0,    47047023,                   '+47%'],
        ['Jan 2016',  0,    46585656,                   '-46%']
    ]);
    var options_client_max = {
        //title : 'Breakdown Graph',
        colors:['white','green'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        pointSize: 10,
        curveType: 'function',
        seriesType: 'bars',
        bar: {groupWidth:'95%'},
        series: {1: {type: 'line'}},
        //vAxis: { gridlines: { count: 8 } }

        annotations: {
            boxStyle: {
                stroke: '#505050',          // Color of the box outline.
                strokeWidth: 1,             // Thickness of the box outline.
                rx: 3,                      // x-radius of the corner curvature.
                ry: 3,                      // y-radius of the corner curvature.
                gradient: {
                    color1: '#fff',             // Start color for gradient.
                    color2: '#fff',             // Finish color for gradient.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 15,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                color: '#800',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }

    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_client_max'));
    chart.draw(data_client_max, options_client_max);


    //===== For Profit/Loss Growth
    var data_profit = google.visualization.arrayToDataTable([
        ['Month',     'Sales',          'Sales line',   {role:'annotation'},      'Profit Lavel'],
        ['Jan 2005',  45645652,         45645652,       '45%',                     35353625],
        ['Jan 2006',  15915956,         15915956,       '45%',                     35353625],
        ['Jan 2007',  41526325,         41526325,       '45%',                     35353625],
        ['Jan 2008',  32563251,         32563251,       '45%',                     35353625],
        ['Jan 2009',  24515632,         24515632,       '45%',                     35353625],
        ['Jan 2010',  32512451,         32512451,       '45%',                     35353625],
        ['Jan 2011',  52632512,         52632512,       '45%',                     35353625],
        ['Jan 2012',  32563212,         32563212,       '45%',                     35353625],
        ['Jan 2013',  25252526,         25252526,       '45%',                     35353625],
        ['Jan 2014',  14512125,         14512125,       '45%',                     35353625],
        ['Jan 2015',  21521452,         21521452,       '45%',                     35353625],
        ['Jan 2016',  15245212,         15245212,       '45%',                     35353625]
    ]);
    var options_profit = {
        //title : 'Breakdown Graph',
        colors: ['deeppink', 'purple'],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        curveType: 'function',
        seriesType: 'bars',
        bar: { groupWidth: '95%'},
        series: {
            1: {type: 'line', pointSize:10},
            2: {type: 'line'}
        },

        annotations: {
            boxStyle: {
                stroke: '#003300',          // Color of the box outline.
                strokeWidth: 1,             // Thickness of the box outline.
                rx: 2,                      // x-radius of the corner curvature.
                ry: 2,                      // y-radius of the corner curvature.
                gradient: {
                    color1: '#009900',             // Start color for gradient.
                    color2: '#006600',             // Finish color for gradient.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    useObjectBoundingBoxUnits: true
                }
            },
            textStyle: {
                //fontName: 'Times-Roman',
                fontSize: 15,
                auraColor: 'transparent',
                //bold: true,
                //italic: true,
                color: '#fff',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            //alwaysOutside: false,
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_profit'));
    chart.draw(data_profit, options_profit);


    //===== For Expense/Income Growth
    var data_income = google.visualization.arrayToDataTable([
        ['Month',       'Income',   {role:'annotation'},    'line-Income',      'Expense',  {role:'annotation'},    'line-Expense'],
        ['Jan 2005',    101010,     '45%',                  101010,             202020,     '34%',                  202020],
        ['Jan 2006',    232323,     '45%',                  232323,             252525,     '34%',                  252525],
        ['Jan 2007',    151515,     '45%',                  151515,             101010,     '34%',                  101010],
        ['Jan 2008',    323232,     '45%',                  323232,             303030,     '34%',                  303030],
        ['Jan 2009',    252525,     '45%',                  252525,             202020,     '34%',                  202020],
        ['Jan 2010',    141414,     '45%',                  141414,             101010,     '34%',                  101010],
        ['Jan 2011',    252525,     '45%',                  252525,             202020,     '34%',                  202020],
        ['Jan 2012',    363636,     '45%',                  363636,             252525,     '34%',                  252525],
        ['Jan 2013',    525252,     '45%',                  525252,             494949,     '34%',                  494949],
        ['Jan 2014',    545454,     '45%',                  545454,             505050,     '34%',                  505050],
        ['Jan 2015',    575757,     '45%',                  575757,             515151,     '34%',                  515151],
        ['Jan 2016',    656565,     '45%',                  656565,             565656,     '34%',                  565656]
    ]);
    var options_income = {
        //title : 'Breakdown Graph',
        colors: ["#080","#040","#800","#400"],
        vAxis: {title: 'Sales(TK)'},
        hAxis: {title: 'Years / Time'},
        seriesType: 'bars',
        series: {
            1: {type: 'line', pointSize:8},
            3: {type: 'line', pointSize:8}
        },
        curveType:'function',
        bar: { groupWidth: '80%'},

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
                fontSize: 11,
                auraColor: 'transparent',
                bold: true,
                //italic: true,
                color: '#202020',     // The color of the text.
                //opacity: 0.8          // The transparency of the text.
            },
            //style: 'line',
            alwaysOutside: true,
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_income'));
    chart.draw(data_income, options_income);

/*
* --------------------------------------------------------------------------------------------------------------------------------------------------------------------
*                                                               Area Chart Script Starts From Here
* --------------------------------------------------------------------------------------------------------------------------------------------------------------------
* */
    //===== For Target Achievement Deficit
    var data_deficit = google.visualization.arrayToDataTable([
        ['Year',        'Achievement',  {role:'annotation'},    'Goal', {role:'annotation'},    'No Profit No Loss'],
        ['Jan 2005',    300,            '20%',                  400,    '15%',                  850],
        ['Jan 2006',    450,            '20%',                  500,    '15%',                  850],
        ['Jan 2007',    600,            '20%',                  600,    '15%',                  850],
        ['Jan 2008',    800,            '20%',                  700,    '15%',                  850],
        ['Jan 2009',    750,            '20%',                  800,    '15%',                  850],
        ['Jan 2010',    890,            '20%',                  900,    '15%',                  850],
        ['Jan 2011',    1100,           '20%',                  1000,   '15%',                  850],
        ['Jan 2012',    1000,           '20%',                  1050,   '15%',                  850],
        ['Jan 2013',    1250,           '20%',                  1100,   '15%',                  850],
        ['Jan 2014',    1000,           '20%',                  1130,   '15%',                  850],
        ['Jan 2015',    1100,           '20%',                  1180,   '15%',                  850],
        ['Jan 2016',    1250,           '20%',                  1200,   '15%',                  850]
    ]);

    var options_deficit = {
        //title: 'Company Performance',
        hAxis: {title: 'Years/Time',  titleTextStyle: {color: '#000'}},
        vAxis: {minValue: 0, title:'Sales(Tk)'},
        //curveType:'function'
        //isStacked: 'percent',
        series:{
            0:{ pointSize:7},
            1:{ pointSize:7},
            //2:{ pointSize:5, color:'#040',lineDashStyle:[5, 1, 3]}
            2:{ pointSize:5, color:'#040',lineDashStyle:[5, 5, 5]}
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

    var chart = new google.visualization.AreaChart(document.getElementById('chart_target_achievement_deficit'));
    chart.draw(data_deficit, options_deficit);

}
