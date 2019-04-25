Vue.component('app-car', {
    data: function() {
        return {
            cars: [
                { model: 'BMW' },
                { model: 'Volvo' },
                { model: 'Vaz' },
                { model: 'Eraz' },
                { model: 'Fiat' },
                { model: 'Audi' },
                { model: 'Siat' }
            ]
        }
    },
    template: '<div><div class="car" v-for="carList in cars"><p>{{carList.model}}</p></div></div>'
});

new Vue({
    el: '#app',
    data: {

    }
});

new Vue({
    el: '#app2'
})