
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

                            var icon = '<img src="' + weather.image + '">';
                            $("#" + index + "-icon").html(icon);

                            var temp = '<h4>' + weather.temp + ' C' + '</h4>';
                            $("#" + index + "-temp").html(temp);

                            var currently = '<h4>' + weather.currently + '</h4>';
                            $("#" + index + "-currently").html(currently);
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

