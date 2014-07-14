$(function install_retention_trends() {
        $('#install_retention_trends').highcharts({
            chart: {
                type: 'areaspline',
                width: 700
            },
            title: {
                text: 'Cumulated Installs and 1-day Retentions'
            },
            subtitle:{
                text: ' 2013/1/9 - 2013/2/27 '
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 50,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 1000
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y} '
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'Total Installs',
                data: [
                    [Date.parse('01/09/2013'),1972],
                    [Date.parse('01/10/2013'),3882],
                    [Date.parse('01/11/2013'),5982],
                    [Date.parse('01/12/2013'),7823],
                    [Date.parse('01/13/2013'),9796],
                    [Date.parse('01/14/2013'),11866],
                    [Date.parse('01/15/2013'),13790],
                    [Date.parse('01/16/2013'),15838],
                    [Date.parse('01/17/2013'),17785],
                    [Date.parse('01/18/2013'),19716],
                    [Date.parse('01/19/2013'),21783],
                    [Date.parse('01/20/2013'),23760],
                    [Date.parse('01/21/2013'),25811],
                    [Date.parse('01/22/2013'),27918],
                    [Date.parse('01/23/2013'),29890],
                    [Date.parse('01/24/2013'),32050],
                    [Date.parse('01/25/2013'),34017],
                    [Date.parse('01/26/2013'),36009],
                    [Date.parse('01/27/2013'),38075],
                    [Date.parse('01/28/2013'),39978],
                    [Date.parse('01/29/2013'),42053],
                    [Date.parse('01/30/2013'),43953],
                    [Date.parse('01/31/2013'),45890],
                    [Date.parse('02/01/2013'),47947],
                    [Date.parse('02/02/2013'),49862],
                    [Date.parse('02/03/2013'),51981],
                    [Date.parse('02/04/2013'),54061],
                    [Date.parse('02/05/2013'),56084],
                    [Date.parse('02/06/2013'),58109],
                    [Date.parse('02/07/2013'),60065],
                    [Date.parse('02/08/2013'),62002],
                    [Date.parse('02/09/2013'),64006],
                    [Date.parse('02/10/2013'),65917],
                    [Date.parse('02/11/2013'),67967],
                    [Date.parse('02/12/2013'),69874],
                    [Date.parse('02/13/2013'),71879],
                    [Date.parse('02/14/2013'),73926],
                    [Date.parse('02/15/2013'),75791],
                    [Date.parse('02/16/2013'),77926],
                    [Date.parse('02/17/2013'),79972],
                    [Date.parse('02/18/2013'),81853],
                    [Date.parse('02/19/2013'),83973],
                    [Date.parse('02/20/2013'),85972],
                    [Date.parse('02/21/2013'),88020],
                    [Date.parse('02/22/2013'),90154],
                    [Date.parse('02/23/2013'),91976],
                    [Date.parse('02/24/2013'),94038],
                    [Date.parse('02/25/2013'),95968],
                    [Date.parse('02/26/2013'),97953],
                    [Date.parse('02/27/2013'),100000]
                ]
            },{
                name: 'Total 1-day Retention',
                data:[
                    [Date.parse('01/09/2013'),1253],
                    [Date.parse('01/10/2013'),2339],
                    [Date.parse('01/11/2013'),3590],
                    [Date.parse('01/12/2013'),4771],
                    [Date.parse('01/13/2013'),6013],
                    [Date.parse('01/14/2013'),7234],
                    [Date.parse('01/15/2013'),8457],
                    [Date.parse('01/16/2013'),9811],
                    [Date.parse('01/17/2013'),10940],
                    [Date.parse('01/18/2013'),12059],
                    [Date.parse('01/19/2013'),13272],
                    [Date.parse('01/20/2013'),14685],
                    [Date.parse('01/21/2013'),15877],
                    [Date.parse('01/22/2013'),17273],
                    [Date.parse('01/23/2013'),18654],
                    [Date.parse('01/24/2013'),20179],
                    [Date.parse('01/25/2013'),21443],
                    [Date.parse('01/26/2013'),22627],
                    [Date.parse('01/27/2013'),23873],
                    [Date.parse('01/28/2013'),25120],
                    [Date.parse('01/29/2013'),26473],
                    [Date.parse('01/30/2013'),27834],
                    [Date.parse('01/31/2013'),29138],
                    [Date.parse('02/01/2013'),30458],
                    [Date.parse('02/02/2013'),31789],
                    [Date.parse('02/03/2013'),33264],
                    [Date.parse('02/04/2013'),34739],
                    [Date.parse('02/05/2013'),36258],
                    [Date.parse('02/06/2013'),37590],
                    [Date.parse('02/07/2013'),38926],
                    [Date.parse('02/08/2013'),40280],
                    [Date.parse('02/09/2013'),41722],
                    [Date.parse('02/10/2013'),43008],
                    [Date.parse('02/11/2013'),44495],
                    [Date.parse('02/12/2013'),45832],
                    [Date.parse('02/13/2013'),47094],
                    [Date.parse('02/14/2013'),48552],
                    [Date.parse('02/15/2013'),49886],
                    [Date.parse('02/16/2013'),51546],
                    [Date.parse('02/17/2013'),53088],
                    [Date.parse('02/18/2013'),54470],
                    [Date.parse('02/19/2013'),56121],
                    [Date.parse('02/20/2013'),57578],
                    [Date.parse('02/21/2013'),58964],
                    [Date.parse('02/22/2013'),60695],
                    [Date.parse('02/23/2013'),61925],
                    [Date.parse('02/24/2013'),63294],
                    [Date.parse('02/25/2013'),64694],
                    [Date.parse('02/26/2013'),66247],
                    [Date.parse('02/27/2013'),67728]
                ]
            }]
        });
    });
    
