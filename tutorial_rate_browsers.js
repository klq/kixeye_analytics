$(function tutorial_rate_browsers () {
        $('#tutorial_rate_browsers').highcharts({
            chart: {
                type: 'column',
                width: 500
            },
            title: {
                text: 'Tutorial Completion Rate (TR)'
            },
            subtitle: {
                text: 'TR = Tutorial Completionts / Total Installs x 100%'
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                min: 0.2,
                title: {
                    text: 'TR (%)'
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
                data: [0.583899299 ]
            },{
                name: 'Firefox',
                data: [0.584825104]
            },{
                name: 'Chrome',
                data: [0.577115332]
            }]
        });
    });
    
