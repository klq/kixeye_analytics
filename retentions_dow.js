$(function retetions_dow() {
        $('#retentions_dow').highcharts({
            chart: {
                type: 'spline',
                width: 500,
                height: 400
            },
            title: {
                text: 'Total Number of Installs and Retentions'
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
                name: 'Installs',
                marker: {
                    symbol: 'square'
                },
                // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                //     y: 26.5,
                //     marker: {
                //         symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
                //     }
                // }, 23.3, 18.3, 13.9, 9.6]
                data: [14154,13965,14141, {
                    y: 15968,
                    marker:{
                        symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
                    }
                },14005,13991,13776]
    
            }, {
                name: 'Retentions',
                marker: {
                    symbol: 'diamond'
                },
                // data: [{
                //     y: 3.9,
                //     marker: {
                //         symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
                //     }
                // }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                data: [9573, 9404,10032,10881,9224,9373,9241]
            }]
        });
    });
    
