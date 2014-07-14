$(function installs_worldmap() {

    
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
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                })
            });

            
            // Initiate the chart
            $('#installs_worldmap').highcharts('Map', {
                chart: {
                    height: 500
                },

                title : {
                    text : 'Total Installs by Country'
                },

                mapNavigation: {
                    enabled: true
                },
                
                colorAxis: {
                    dataClasses: [{
                        to: 1000
                    }, {
                        from: 1000,
                        to: 3000 
                    }, {
                        from: 3000,
                        to: 5000 
                    }, {
                        from: 5000,
                        to: 10000
                    }, {
                        from: 10000
                    }]
                },


                legend: {
                    title: {
                        text: 'Total Installs by Country',
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
                    name: 'Total Installs',
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
            $('#installs_worldmap').html('<div class="loading">' + 
                '<i class="icon-frown icon-large"></i> ' + 
                'Error loading data from Google Spreadsheets' + 
                '</div>');
        }
    });
});