$(function installs_pie_country() {     
        // Make monochrome colors and set them as default for all pies
        Highcharts.getOptions().plotOptions.pie.colors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;

            for (i = 0; i < 10; i++) {
                // Start out with a darkened base color (negative brighten), and end
                // up with a much brighter color
                colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
            }
            return colors;
        }());
        
        // Build the chart
        $('#installs_pie_country').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                height: 300,
                width: 600
            },
            title: {
                text: '% Installs by Countries'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Total installs',
                data: [
                    ['US',       68.6],
                    {
                        name: 'China',
                        y: 8.64,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'France',
                        y: 7.04,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'Japan',
                        y: 5.20,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'Canada',
                        y: 5.18,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'Germany',
                        y: 3.46,
                        sliced: true,
                        selected: true
                    },
                    {
                        name: 'Mexico',
                        y: 1.80,
                        sliced: true,
                        selected: true
                    }
                    
                ]
            }]
        });
});