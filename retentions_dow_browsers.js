$(function retetions_dow_browsers() {
        $('#retentions_dow_browsers').highcharts({
            chart: {
                type: 'spline',
                width: 500,
                height: 400
            },
            title: {
                text: 'Number of Retentions (by browser)'
            },
            subtitle: {
                text: 'grouped by Day of Week'
            },
            xAxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',
                    'Sat']
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 5,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'IE',
                marker: {
                    symbol: 'square'
                },
                data: [5249,5109,5469,5924,5123,5167,5037]    
            }, {
                name: 'Firefox',
                marker: {
                    symbol: 'diamond'
                },
                data: [3294,3243,3346,3740,3083,3267,3199]
            }, {
                name: 'Chrome',
                marker: {
                    symbol: 'circle'
                },
                data: [1030,1052,1217,1217,1018,939,1005]

            }]
        });
    });
    
