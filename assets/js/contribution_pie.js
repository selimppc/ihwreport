/**
 * Created by etsb on 8/7/16.
 */

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    //===== For Client Based Sales =======================
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Per Months'],
        ['Jan', 500000],
        ['Feb', 450000],
        ['Mar', 320000],
        ['Apr', 660000],
        ['May', 470000],
        ['June',590000],
        ['Jul', 120000],
        ['Aug', 320000],
        ['Sep', 340000],
        ['Oct', 300000],
        ['Nov', 200000],
        ['Dec', 100000]
    ]);

    var options = {
        //title: 'Client wise Sales (Agora)',
        pieSliceTextStyle: {
            color: 'white',
        },
        pieHole: 0.4,
        //pieSliceText:'value',
        pieSliceText:'percentage',
        //pieSliceText:'label',
        is3D:true,
        legend:{position: 'bottom'},
        //legend:{position: 'top'},
        //legend:{position: 'labeled'},

    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);

    //===== For Employee Based Sales ====================
    var data_employee = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_employee = {
        //title: 'Client wise Sales (Agora)',
        pieSliceTextStyle: {
            color: 'white',
        },
        pieHole: 0.4,
        //pieSliceText:'value',
        pieSliceText:'percentage',
        //pieSliceText:'label',
        is3D:true,
        //legend:{position: 'bottom'},
        //legend:{position: 'top'},
        legend:{position: 'labeled'},

    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_employee'));
    chart.draw(data_employee, options_employee);

    //===== For Product Based Sales ====================
    var data_product = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Product-1', 500000],
        ['Product-2', 450000],
        ['Product-3', 320000],
        ['Product-4', 660000],
        ['Product-5', 470000]
    ]);

    var options_product = {
        //title: 'Client wise Sales (Agora)',
        pieSliceTextStyle: {
            color: 'white',
        },
        //pieHole: 0.4,
        //pieSliceText:'value',
        pieSliceText:'percentage',
        //pieSliceText:'label',
        //is3D:true,
        //legend:{position: 'bottom'},
        //legend:{position: 'top'},
        legend:{position: 'labeled'},

    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_product'));
    chart.draw(data_product, options_product);


    //===== For Brand wise Sales ====================
    var data_brand = google.visualization.arrayToDataTable([
        ['Brands', 'Price'],
        ['Maximus', 500000],
        ['Lava', 450000],
        ['Sony', 320000],
        ['Samsung', 660000],
        ['Walton', 470000],
        ['Ocean', 470000],
        ['Jamuna', 470000]
    ]);

    var options_brand = {
        //title: 'Client wise Sales (Agora)',
        pieSliceTextStyle: {
            color: 'white',
        },
        //pieHole: 0.4,
        //pieSliceText:'value',
        pieSliceText:'percentage',
        //pieSliceText:'label',
        //is3D:true,
        //legend:{position: 'bottom'},
        legend:{position: 'top'},
        //vAxis: { gridlines: { count: 4 } }
        //legend:{position: 'labeled'},

    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_brand'));
    chart.draw(data_brand, options_brand);


    //===== For SKV Sales wise ====================
    var data_skv = google.visualization.arrayToDataTable([
        ['Months', 'Price'],
        ['Jan', 500000],
        ['Feb', 450000],
        ['Mar', 320000],
        ['Apr', 660000],
        ['May', 470000],
        ['June',590000],
    ]);

    var options_skv = {
        //title: 'Client wise Sales (Agora)',
        pieSliceTextStyle: {
            color: 'white',
        },
        pieHole: 0.05,
        //pieSliceText:'value',
        //pieSliceText:'percentage',
        pieSliceText:'both',
        //pieSliceText:'label',
        //is3D:true,
        //legend:{position: 'bottom'},
        legend:{position: 'bottom'},
        //legend:{position: 'labeled'},

    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_skv'));
    chart.draw(data_skv, options_skv);

}
