$(function retention_rate_trends() {
        $('#retention_rate_trends').highcharts({
            chart: {
                type: 'areaspline',
                width: 700
            },
            title: {
                text: 'Retention Rate (RR)'
            },
            subtitle:{
                text: 'RR = Retentions / Installs x 100% '
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
                    text: 'Retention Rate (%)'
                },
                min: 0.4
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} '
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
                name: '1-Day Average RR',
                data: [
                    [Date.parse('01/09/2013'),0.635395537525355],
                    [Date.parse('01/10/2013'),0.568586387434555],
                    [Date.parse('01/11/2013'),0.595714285714286],
                    [Date.parse('01/12/2013'),0.641499185225421],
                    [Date.parse('01/13/2013'),0.629498226051698],
                    [Date.parse('01/14/2013'),0.589855072463768],
                    [Date.parse('01/15/2013'),0.635654885654886],
                    [Date.parse('01/16/2013'),0.6611328125],
                    [Date.parse('01/17/2013'),0.579866461222393],
                    [Date.parse('01/18/2013'),0.579492490937338],
                    [Date.parse('01/19/2013'),0.586840832123851],
                    [Date.parse('01/20/2013'),0.714719271623672],
                    [Date.parse('01/21/2013'),0.581179912237933],
                    [Date.parse('01/22/2013'),0.662553393450403],
                    [Date.parse('01/23/2013'),0.700304259634888],
                    [Date.parse('01/24/2013'),0.706018518518518],
                    [Date.parse('01/25/2013'),0.642602948652771],
                    [Date.parse('01/26/2013'),0.594377510040161],
                    [Date.parse('01/27/2013'),0.603097773475315],
                    [Date.parse('01/28/2013'),0.655281135049921],
                    [Date.parse('01/29/2013'),0.652048192771084],
                    [Date.parse('01/30/2013'),0.716315789473684],
                    [Date.parse('01/31/2013'),0.67320598864223],
                    [Date.parse('02/01/2013'),0.641711229946524],
                    [Date.parse('02/02/2013'),0.695039164490862],
                    [Date.parse('02/03/2013'),0.696083058046248],
                    [Date.parse('02/04/2013'),0.709134615384615],
                    [Date.parse('02/05/2013'),0.750865051903114],
                    [Date.parse('02/06/2013'),0.657777777777778],
                    [Date.parse('02/07/2013'),0.683026584867076],
                    [Date.parse('02/08/2013'),0.699019101703665],
                    [Date.parse('02/09/2013'),0.719560878243513],
                    [Date.parse('02/10/2013'),0.67294610151753],
                    [Date.parse('02/11/2013'),0.725365853658537],
                    [Date.parse('02/12/2013'),0.701101206082853],
                    [Date.parse('02/13/2013'),0.629426433915212],
                    [Date.parse('02/14/2013'),0.712261846604788],
                    [Date.parse('02/15/2013'),0.715281501340483],
                    [Date.parse('02/16/2013'),0.77751756440281],
                    [Date.parse('02/17/2013'),0.75366568914956],
                    [Date.parse('02/18/2013'),0.73471557682084],
                    [Date.parse('02/19/2013'),0.77877358490566],
                    [Date.parse('02/20/2013'),0.728864432216108],
                    [Date.parse('02/21/2013'),0.6767578125],
                    [Date.parse('02/22/2013'),0.811152764761012],
                    [Date.parse('02/23/2013'),0.675082327113063],
                    [Date.parse('02/24/2013'),0.663918525703201],
                    [Date.parse('02/25/2013'),0.725388601036269],
                    [Date.parse('02/26/2013'),0.782367758186398],
                    [Date.parse('02/27/2013'),0.723497801660967],
                ]
            },{
                name: '7-Day Average RR',
                data:[
                    [Date.parse('01/09/2013'),null],
                    [Date.parse('01/10/2013'),null],
                    [Date.parse('01/11/2013'),null],
                    [Date.parse('01/12/2013'),0.613743368581424],
                    [Date.parse('01/13/2013'),0.61742012214923],
                    [Date.parse('01/14/2013'),0.619031561261779],
                    [Date.parse('01/15/2013'),0.616714162007929],
                    [Date.parse('01/16/2013'),0.608905825850562],
                    [Date.parse('01/17/2013'),0.621080260932273],
                    [Date.parse('01/18/2013'),0.619840952328582],
                    [Date.parse('01/19/2013'),0.62368359629937],
                    [Date.parse('01/20/2013'),0.62927951731864],
                    [Date.parse('01/21/2013'),0.647301239789515],
                    [Date.parse('01/22/2013'),0.656317019463148],
                    [Date.parse('01/23/2013'),0.657393687736907],
                    [Date.parse('01/24/2013'),0.641447759429998],
                    [Date.parse('01/25/2013'),0.65203364840314],
                    [Date.parse('01/26/2013'),0.650532905448951],
                    [Date.parse('01/27/2013'),0.652820266854493],
                    [Date.parse('01/28/2013'),0.648132762586452],
                    [Date.parse('01/29/2013'),0.648005374199846],
                    [Date.parse('01/30/2013'),0.662385610549946],
                    [Date.parse('01/31/2013'),0.675669222631508],
                    [Date.parse('02/01/2013'),0.683362576965035],
                    [Date.parse('02/02/2013'),0.697479271126754],
                    [Date.parse('02/03/2013'),0.689116698027339],
                    [Date.parse('02/04/2013'),0.690519640345174],
                    [Date.parse('02/05/2013'),0.698706479167623],
                    [Date.parse('02/06/2013'),0.702209581132287],
                    [Date.parse('02/07/2013'),0.698904301628184],
                    [Date.parse('02/08/2013'),0.70122304995303],
                    [Date.parse('02/09/2013'),0.694113929121564],
                    [Date.parse('02/10/2013'),0.690063737141198],
                    [Date.parse('02/11/2013'),0.694240203103728],
                    [Date.parse('02/12/2013'),0.696563403051845],
                    [Date.parse('02/13/2013'),0.70484292964603],
                    [Date.parse('02/14/2013'),0.716374299307749],
                    [Date.parse('02/15/2013'),0.717709974045221],
                    [Date.parse('02/16/2013'),0.728806028162765],
                    [Date.parse('02/17/2013'),0.743011456491464],
                    [Date.parse('02/18/2013'),0.737939451619352],
                    [Date.parse('02/19/2013'),0.751635346393713],
                    [Date.parse('02/20/2013'),0.737001741066606],
                    [Date.parse('02/21/2013'),0.724180717717126],
                    [Date.parse('02/22/2013'),0.722848292605045],
                    [Date.parse('02/23/2013'),0.723361745930864],
                    [Date.parse('02/24/2013'),0.722595084422987],
                    [Date.parse('02/25/2013'),null],
                    [Date.parse('02/26/2013'),null],
                    [Date.parse('02/27/2013'),null],
                ]
            }]
        });
    });
    