$(function retention_rate_worldmap() {

    
    // Load the data from a Google Spreadsheet 
    // https://docs.google.com/a/highsoft.com/spreadsheet/pub?hl=en_GB&hl=en_GB&key=0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc&output=html
    Highcharts.data({

        googleSpreadsheetKey: '1u7QeDZxoKk6JskqN6PCcZ191I34anmBl0HU_ZbY0O70',


        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {
            
            // Read the columns into the data array
            var data = [];
            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[3][i]),
                    name: columns[1][i]
                })
            });

            
            // Initiate the chart
            $('#retention_rate_worldmap').highcharts('Map', {
                chart: {
                    height: 500
                },

                title : {
                    text : 'Retention Rate(RR) by Country'
                },
                subtitle:{
                    text: 'RR = Retentions / Installs x 100% '
                },
                mapNavigation: {
                    enabled: true
                },
                
                colorAxis: {
                    dataClasses: [{
                        to: 0.6
                    }, {
                        from: 0.6,
                        to: 0.7 
                    }, {
                        from: 0.7,
                        to: 0.8 
                    }, {
                        from: 0.8,
                        to: 0.9
                    }, {
                        from: 0.9
                    }]
                },

                theme: {
                    colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee","#55BF3B", "#DF5353", "#7798BF", "#aaeeee"]
                },

                legend: {
                    title: {
                        text: 'Retention Rate',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }
                },
                

                series : [{
                    data : data,
                    mapData: Highcharts.maps['custom/world'],
                    joinBy: ['iso-a2', 'code'],
                    animation: true,
                    name: 'RR',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' '
                    }
                }]
                
            });
        },
        error: function () {
            $('#retention_rate_worldmap').html('<div class="loading">' + 
                '<i class="icon-frown icon-large"></i> ' + 
                'Error loading data from Google Spreadsheets' + 
                '</div>');
        }
    });
});