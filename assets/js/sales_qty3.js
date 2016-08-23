/**
 * Created by etsb on 8/11/16.
 */


window.onload = function () {

    /*----------Chart #1 --------------*/

    var chart = new CanvasJS.Chart("chartContainer_sales",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Sales(milion in Tk.)",
                valueFormatString: "#0,,.",
                suffix: " m"
            },
            axisX: {
                title: "Years/ Time",
                font: {color: '#ff0000'},




            },



            data: [
                {
                    toolTipContent: "{y} Tk.",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
                    /*dataPoints:jsonData*/

                    /*---Blue--*/

                    dataPoints: [

                        {x: new Date(2016,0), y: 2506000},
                        {x: new Date(2016,1), y: 5050000},
                        {x: new Date(2016,2), y: 19378900},
                        {x: new Date(2016,3), y: 21580000},
                        {x: new Date(2016,4), y: 44794000},
                        {x: new Date(2016,5), y: 40580000},
                        {x: new Date(2016,6), y: 43820000},
                        {x: new Date(2016,7), y: 38780000},
                        {x: new Date(2016,8), y: 27825000},
                        {x: new Date(2016,9), y: 35578000},
                        {x: new Date(2016,10),y: 38978000},
                        {x: new Date(2016,11),y: 41257800},
                        {x: new Date(2016,12),y: 26130000},
                        {x: new Date(2016,13),y: 21613000}
                    ]
                },
                {
                    toolTipContent: "{y} Tk.",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(194,70,66,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0), y: 2506000},
                        {x: new Date(2016,1), y: 10550000},
                        {x: new Date(2016,2), y: 12378900},
                        {x: new Date(2016,3), y: 19518000},
                        {x: new Date(2016,4), y: 29794000},
                        {x: new Date(2016,5), y: 32580000},
                        {x: new Date(2016,6), y: 33820000},
                        {x: new Date(2016,7), y: 24780000},
                        {x: new Date(2016,8), y: 21825000},
                        {x: new Date(2016,9), y: 29578000},
                        {x: new Date(2016,10),y: 31978000},
                        {x: new Date(2016,11),y: 29257800},
                        {x: new Date(2016,12),y: 21130000},
                        {x: new Date(2016,13),y: 15613000}
                    ]
                }

            ]
        });

    chart.render();

    /*----------Chart #2 --------------*/

    var chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Sales(No. of Qty)",
                valueFormatString: "##0,.",
                suffix: " 000"
            },
            axisX: {
                title: "Years/ Time",

            },

            data: [
                {
                    toolTipContent: "{y} qty",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
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

    var chart = new CanvasJS.Chart("chartContainer_product",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Product(No. of Qty)",
                valueFormatString: "##0,.",
                suffix: " 000"
            },
            axisX: {
                title: "Years/ Time",

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

    /*----------Chart #4 --------------*/

    var chart = new CanvasJS.Chart("chartContainer_profit",
        {
            title:{
                /*text: "Music Album Sales by Year"*/
            },
            animationEnabled: true,
            axisY: {
                title: "Profit(milion in Tk.)",
                valueFormatString: "##0,,.",
                suffix: " m"
            },
            axisX: {
                title: "Years/ Time",

            },

            data: [
                {
                    toolTipContent: "{y} Tk.",
                    type: "splineArea",
                    markerSize: 5,
                    color: "rgba(54,158,173,.7)",
                    /*dataPoints:jsonData*/

                    dataPoints: [
                        {x: new Date(2016,0) , y: 1000000},
                        {x: new Date(2016,1), y: 1300000},
                        {x: new Date(2016,2), y: 1500000},
                        {x: new Date(2016,3), y: 2000000},
                        {x: new Date(2016,4), y: 1800000},
                        {x: new Date(2016,5), y: 1600000},
                        {x: new Date(2016,6), y: 1900000},
                        {x: new Date(2016,7), y: 2400000},
                        {x: new Date(2016,8), y: 2700000},
                        {x: new Date(2016,9), y: 3100000},
                        {x: new Date(2016,10), y: 3500000},
                        {x: new Date(2016,11), y: 3300000},
                        {x: new Date(2016,12), y: 3100000}
                    ]
                }
            ]
        });

    chart.render();


}
