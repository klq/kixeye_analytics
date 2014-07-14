$(function retention_rate_browsers () {
        $('#retention_rate_browsers').highcharts({
            chart: {
                type: 'column',
                width: 500
            },
            title: {
                text: 'Retention Rate (TR)'
            },
            subtitle: {
                text: 'RR = Total Retentions / Total Installs x 100%'
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                min: 0.2,
                title: {
                    text: 'RR (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">  {series.name}: </td>' +
                    '<td style="padding:5"><b>{point.y:.4f} </b></td></tr>',
                footerFormat: '</table>',
                shared: false,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'IE',
                data: [0.820255293]
            },{
                name: 'Firefox',
                data: [0.706657315]
            },{
                name: 'Chrome',
                data: [0.339816414]
            }]
        });
    });
    