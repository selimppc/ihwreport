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

/*
*-------------------------------------------------------------------------------
* Expenses for Employee starts from here
* -----------------------------------------------------------------------------*/

    //===== Expense chart / Employee Salary =====================================
    var data_expense_salary = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_salary = {
        //title: 'Employee Salary',
        title: 'Salary',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_salary'));
    chart.draw(data_expense_salary, options_expense_salary);

    //===== Expense chart / Employee Intensive =====================================
    var data_expense_intensive = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_intensive = {
        //title: 'Employee Intensive',
        title: 'Intensive',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_intensive'));
    chart.draw(data_expense_intensive, options_expense_intensive);

    //===== Expense chart / Employee TA(Traveling Allowance) ===========================
    var data_expense_ta = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_ta = {
        //title: 'Employee Travelling Allowance',
        title: 'Travelling Allowance',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_ta'));
    chart.draw(data_expense_ta, options_expense_ta);

    //===== Expense chart / Employee DA(Dearness Allowance) ===========================
    var data_expense_da = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_da = {
        //title: 'Employee Dearness Allowance',
        title: 'Dearness Allowance',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_da'));
    chart.draw(data_expense_da, options_expense_da);

    //===== Expense chart / Employee Bonus ===========================
    var data_expense_bonus = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_bonus = {
        //title: 'Employee Bonus',
        title: 'Bonus',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_bonus'));
    chart.draw(data_expense_bonus, options_expense_bonus);

    //===== Expense chart / Employee (Others) ===========================
    var data_expense_others = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_others = {
        //title: 'Other expenses for Employee',
        title: 'Others',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_others'));
    chart.draw(data_expense_others, options_expense_others);


/*
*------------------------------------------------------------------------------
* Expenses for Client starts from here
* -----------------------------------------------------------------------------*/

    //===== Expense chart / Client (gift) ===========================
    var data_expense_gift = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_gift = {
        //title: 'Other expenses for Employee',
        title: 'Gift',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_gift'));
    chart.draw(data_expense_gift, options_expense_gift);

    //===== Expense chart / Client (donation) ===========================
    var data_expense_donation = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_donation = {
        //title: 'Other expenses for Employee',
        title: 'Donation',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_donation'));
    chart.draw(data_expense_donation, options_expense_donation);

    //===== Expense chart / Client (promotion/Discount) ===========================
    var data_expense_discount = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_discount = {
        //title: 'Other expenses for Employee',
        title: 'Promotion/Discount',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_discount'));
    chart.draw(data_expense_discount, options_expense_discount);

    //===== Expense chart / Client (normal Discount) ===========================
    var data_expense_discount_normal = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_discount_normal = {
        //title: 'Other expenses for Employee',
        title: 'Normal Discount',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_discount_normal'));
    chart.draw(data_expense_discount_normal, options_expense_discount_normal);

    //===== Expense chart / Client (Return) ===========================
    var data_expense_return = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_return = {
        //title: 'Other expenses for Employee',
        title: 'Return',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_return'));
    chart.draw(data_expense_return, options_expense_return);

    //===== Expense chart / Client (Damaged) ===========================
    var data_expense_damaged = google.visualization.arrayToDataTable([
        ['Task', 'Per Person'],
        ['Habib', 500000],
        ['Labib', 450000],
        ['Masud', 320000],
        ['Ripon', 660000],
        ['Snigdho', 470000],
        ['Polash',590000]
    ]);

    var options_expense_damaged = {
        //title: 'Other expenses for Employee',
        title: 'Damaged',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_damaged'));
    chart.draw(data_expense_damaged, options_expense_damaged);

    //===== Expense chart / Client (Broken) ===========================
    var data_expense_broken = google.visualization.arrayToDataTable([
        ['Task',    'Per Person'],
        ['Habib',   500000],
        ['Labib',   450000],
        ['Masud',   320000],
        ['Ripon',   660000],
        ['Snigdho', 470000],
        ['Polash',  590000]
    ]);

    var options_expense_broken = {
        //title: 'Other expenses for Employee',
        title: 'Broken',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_broken'));
    chart.draw(data_expense_broken, options_expense_broken);


    //===== Total Expense chart (Including all) ===========================
    var data_expense_total = google.visualization.arrayToDataTable([
        ['Task',    'Per Person'],
        ['Client wise',   500000],
        ['Employee wise',   450000],
        ['Others',   320000]
    ]);

    var options_expense_total = {
        //title: 'Other expenses for Employee',
        title: 'Employee + Client + Others',
        titleTextStyle:{
            fontSize:'16'
        },
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
    var chart = new google.visualization.PieChart(document.getElementById('expense_total'));
    chart.draw(data_expense_total, options_expense_total);

}
