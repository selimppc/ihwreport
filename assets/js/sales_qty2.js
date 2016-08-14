google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Month');
    data.addColumn('number', 'Sales');
    data.addRows([
        [{v: 0, f:'Jan'}, 1000],
        [{v: 1, f:'Feb'}, 1170],
        [{v: 2, f:'Mar'}, 660],
        [{v: 3, f:'Apr'}, 1030]
    ]);





    var options = {
        curveType: 'function',
        title: 'Line intervals, default',
        legend: { position: 'right' },
        series: {
            shadowSize: 0,
            lines: {
                show: true,
                lineWidth: false,
                fill: true
            },
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: false
            }
        },

        hAxis: {
            title: 'Month',
            titleTextStyle: {
                color: '#333'
            },
            baseline: 0,
            gridlines: {
                color: '#f3f3f3',
                count: 4
            },
            ticks: [{v: 0, f:'Jan'},{v: 1, f:'Feb'},{v: 2, f:'Mar'},{v: 3, f:'Apr'}]
        },
        vAxis: {
            minValue: 0,
            gridlines: {
                color: '#f3f3f3',
                count: 5
            }
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));
    chart.draw(data, options);
}

