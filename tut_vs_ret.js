$(function tut_vs_ret() {
    $('#tut_vs_ret').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            width: 600
        },

        title: {
            text: 'Retention metrics are correlated'
        },

        xAxis: {
            title: {
                enabled: true,
                text: 'No &lt;------ 1-Day Retention ------&gt; Yes'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1,
            tickInterval: 1,
            min: -2,
            max: 2,
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'No &lt;------ Tutorial Completion ------&gt;  Yes'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1,
            tickInterval: 1,
            min: -3,
            max: 3,
            labels: {
                enabled: false
            }
        },
        plotOptions: {
            bubble: {
                    maxSize: 180,
                    minSize: 25,
                marker: {
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.z}'
                }
            }
        },

        series: [{
            name: 'Predictable',
            data: [
                [-1, -1, 23528],
                [1, 1, 49527]
            ],
            marker: {
                 fillColor: {
                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                     stops: [
                         [0, 'rgba(255,255,255,0.5)'],
                         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                     ]
                 }
            }
        }, {
            name: 'Unpredictable',
            data: [
                [1, -1, 18201],
                [-1, 1, 8744]
            ],
            marker: {
                 fillColor: {
                     radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                     stops: [
                         [0, 'rgba(255,255,255,0.5)'],
                         [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                     ]
                 }
            }
        }]

    });
});