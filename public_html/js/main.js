
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
            }
        },
        removeLocation: function (index) {
            this.places.splice(index, 1);
        }
    }
});

