
var vm = new Vue({
    el: '#weather',
    data: {
        newPlace: '',
        places: [
            {location: 'Piraeus, GR'},
            {location: 'Aegaleo, GR'}
        ]
    },
    methods: {
        addLocation: function () {
            var text = this.newPlace.trim();
            if (text) {
                this.places.push({location: text});
                this.newPlace = '';
                this.jqueryLoadWeather();
            }
        },
        removeLocation: function (index) {
            this.places.splice(index, 1);
        },
        jqueryLoadWeather: function () {
            $(document).ready(function () {
                $(".weather-widget").each(function () {
                    var obj = $(this);
                    var index = $(obj).attr("data-index");
                    var loc = $(obj).attr("data-location");

                    $.simpleWeather({
                        location: loc,
                        woeid: '',
                        unit: 'c',
                        success: function (weather) {
                            var heading = '<h2>' + weather.city + ', ' + weather.country + '</h2>';
                            $("#" + index + "-heading").html(heading);

                            var icon = '<img class="center-block img-responsive" src="' + weather.image + '">';
                            $("#" + index + "-icon").html(icon);

                            var temp = '<h4>' + weather.temp +' &deg;C' + '</h4>';
                            $("#" + index + "-temp").html(temp);

                            var currently = '<h4>' + weather.currently + '</h4>';
                            $("#" + index + "-currently").html(currently);
                            
                            var forecast1day = weather.forecast[1].day;
                            var forecast2day = weather.forecast[2].day;
                            var forecast3day = weather.forecast[3].day;
                            var forecast4day = weather.forecast[4].day;
                            $("#" + index + "-forecast-1-heading").html(forecast1day);
                            $("#" + index + "-forecast-2-heading").html(forecast2day);
                            $("#" + index + "-forecast-3-heading").html(forecast3day);
                            $("#" + index + "-forecast-4-heading").html(forecast4day);
                            
                            var forecast1temp = weather.forecast[1].high +' &deg;C';
                            var forecast2temp = weather.forecast[2].high +' &deg;C';
                            var forecast3temp = weather.forecast[3].high +' &deg;C';
                            var forecast4temp = weather.forecast[4].high +' &deg;C';
                            $("#" + index + "-forecast-1-body").html(forecast1temp);
                            $("#" + index + "-forecast-2-body").html(forecast2temp);
                            $("#" + index + "-forecast-3-body").html(forecast3temp);
                            $("#" + index + "-forecast-4-body").html(forecast4temp);
                            
                        },
                        error: function (error) {
                            $("#" + index + "-heading").html('<h2>' + error + '</h2>');
                        }
                    });
                });
            });
        }
    }
});

