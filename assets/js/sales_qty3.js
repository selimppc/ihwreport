/**
 * Created by etsb on 8/11/16.
 */


window.onload = function () {

    /*----------Chart #1 --------------*/

    var chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Sales(Qty)",
                valueFormatString: "#0.",
                suffix: " "
            },
            data: [
                {
                    toolTipContent: "{y} qty",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 10},
                        {x: new Date(2016,1), y: 15},
                        {x: new Date(2016,2), y: 17},
                        {x: new Date(2016,3), y: 22},
                        {x: new Date(2016,4), y: 19},
                        {x: new Date(2016,5), y: 16},
                        {x: new Date(2016,6), y: 21},
                        {x: new Date(2016,7), y: 24},
                        {x: new Date(2016,8), y: 30},
                        {x: new Date(2016,9), y: 27},
                        {x: new Date(2016,10), y: 24},
                        {x: new Date(2016,11), y: 21},
                        {x: new Date(2016,12), y: 12}
                    ]
                }
            ]
        });

    chart.render();

    /*----------Chart #2 --------------*/

    var chart = new CanvasJS.Chart("chartContainer_product",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Product(Qty)",
                valueFormatString: "##0,.",
                suffix: " 000"
            },
            data: [
                {
                    toolTipContent: "{y} qty",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(194,70,66,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 20000},
                        {x: new Date(2016,1), y: 25000},
                        {x: new Date(2016,2), y: 29000},
                        {x: new Date(2016,3), y: 32000},
                        {x: new Date(2016,4), y: 35000},
                        {x: new Date(2016,5), y: 33000},
                        {x: new Date(2016,6), y: 31000},
                        {x: new Date(2016,7), y: 33000},
                        {x: new Date(2016,8), y: 35000},
                        {x: new Date(2016,9), y: 42000},
                        {x: new Date(2016,10), y: 39000},
                        {x: new Date(2016,11), y: 37000},
                        {x: new Date(2016,12), y: 35000}
                    ]
                }
            ]
        });

    chart.render();

    /*----------Chart #3 --------------*/

    var chart = new CanvasJS.Chart("chartContainer_profit",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Profit(Tk.)",
                valueFormatString: "##0,.",
                suffix: " 000"
            },
            data: [
                {
                    toolTipContent: "{y} qty",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 10000},
                        {x: new Date(2016,1), y: 13000},
                        {x: new Date(2016,2), y: 15000},
                        {x: new Date(2016,3), y: 20000},
                        {x: new Date(2016,4), y: 18000},
                        {x: new Date(2016,5), y: 16000},
                        {x: new Date(2016,6), y: 19000},
                        {x: new Date(2016,7), y: 24000},
                        {x: new Date(2016,8), y: 27000},
                        {x: new Date(2016,9), y: 31000},
                        {x: new Date(2016,10), y: 35000},
                        {x: new Date(2016,11), y: 33000},
                        {x: new Date(2016,12), y: 31000}
                    ]
                }
            ]
        });

    chart.render();

    /*----------Chart #4 --------------*/

    var chart = new CanvasJS.Chart("chartContainer_sales",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Sales(Tk.)",
                valueFormatString: "##0,.",
                suffix: " 000"
            },

            data: [
                {
                    toolTipContent: "{y} Tk.",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 9000},
                        {x: new Date(2016,1), y: 13000},
                        {x: new Date(2016,2), y: 16000},
                        {x: new Date(2016,3), y: 17000},
                        {x: new Date(2016,4), y: 18000},
                        {x: new Date(2016,5), y: 16000},
                        {x: new Date(2016,6), y: 14000},
                        {x: new Date(2016,7), y: 19000},
                        {x: new Date(2016,8), y: 15000},
                        {x: new Date(2016,9), y: 14000},
                        {x: new Date(2016,10), y: 12000},
                        {x: new Date(2016,11), y: 11500},
                        {x: new Date(2016,12), y: 11000}
                    ]
                },
                {
                    toolTipContent: "{y} Tk.",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(194,70,66,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 13000},
                        {x: new Date(2016,1), y: 16000},
                        {x: new Date(2016,2), y: 15000},
                        {x: new Date(2016,3), y: 13000},
                        {x: new Date(2016,4), y: 10000},
                        {x: new Date(2016,5), y: 14000},
                        {x: new Date(2016,6), y: 18000},
                        {x: new Date(2016,7), y: 14000},
                        {x: new Date(2016,8), y: 13000},
                        {x: new Date(2016,9), y: 12000},
                        {x: new Date(2016,10), y: 17000},
                        {x: new Date(2016,11), y: 14000},
                        {x: new Date(2016,12), y: 13000}
                    ]
                }

            ]
        });

    chart.render();
}
