const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', '2016', '+7 926 456 12 32', 'images/focus.png'),
    car('Ford', 'Mondeo', 'Igor', '2018', '+7 926 456 85 74', 'images/mondeo.png'),
    car('Ford', 'Explorer', 'Stepan', '2014', '+7 926 456 91 54', 'images/explorer.png')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        togglePhone() {
            this.phoneVisibility = !this.phoneVisibility
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'))
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'))
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car =>
              car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
              car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            )
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})