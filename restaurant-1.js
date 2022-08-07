class Restaurant {

    constructor(restaurantList) {
            this.restaurantList = restaurantList;
        }
        // Method
    printAllRestaurantNames() {
            return console.log(this.restaurantList.map(item => item.restName));
        }
        // Method
    filterRestaurantByCity(city) {
        this.restaurantList.filter(item => {
            if (item.city === city) {
                console.log(item.restName);
            }
        });
    }
}

const restaurant = new Restaurant([
    { restName: 'sushi', address: '5 pitt st', city: 'sydney' },
    { restName: 'noodles', address: '6 maker st', city: 'melbourne' }
]);

restaurant.printAllRestaurantNames();
restaurant.filterRestaurantByCity('sydney');