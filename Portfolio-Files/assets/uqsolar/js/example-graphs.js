
$(function () {
    $('#container2').highcharts({

exporting: {
      enabled: false
  },




        credits: {
      enabled: false
  },

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Breakdown of array location downloads'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },


 legend: {
 			enabled:false,
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,



        },



    plotOptions: {
                pie: {



            	size: '75%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true

                },

                series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }





            },
              legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,



        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Gatton PV Pilot Planet',
                y: 56.33
            }, {
                name: 'St Lucia',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Gatton',
                y: 10.38
            }, {
                name: 'Herston',
                y: 12.77
            }]
        }]
    });
});
		


$(function () {
    $('#container3').highcharts({

exporting: {
      enabled: false
  },




        credits: {
      enabled: false
  },

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Breakdown of geolocation of download'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },


 legend: {
 			enabled:false,
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,



        },



       plotOptions: {
                pie: {



            	size: '75%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true

                },

                series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }





            },
              legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,



        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Australia',
                y: 40.33
            }, {
                name: 'USA',
                y: 30.03,
                sliced: true,
                selected: true
            }, {
                name: 'Europe',
                y: 20.38
            }, {
                name: 'Asia',
                y: 10.77
            }]
        }]
    });
});



$(function () {
    $('#container').highcharts({



    	exporting: {
      enabled: false
  },
         credits: {
      enabled: false
  },

        title: {
            text: 'Daily Downloads of arrays',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: UQsolar.com',
            x: -20
        },
        xAxis: {
            categories: ['6am', '7am', '8am', '9am', '10am', '11am',
                '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
        },
        yAxis: {
            title: {
                text: 'kW/h'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,



        },
        series: [{
        	name: 'Gatton PV Pilot Planet',
            data: [0.0, 1, 2, 4, 5, 5, 6, 7, 7, 8, 9, 10]

        }, {
        	name: 'St Lucia',
            data: [0, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 6]

        }, {
        	name: 'Gatton',
            data: [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3]

        }, {
            name: 'Herston',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
    });
});
		
