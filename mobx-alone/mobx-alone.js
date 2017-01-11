const { observable, autorun } = require('mobx'); 

var car = observable({
  brand: 'Audi',
  model: 'TT',
  year: '2016',
  price: 19000,
  description: 'Grey, fast, amazing!',
  km: 20000
})

function printAd() {
  console.log(`Selling ${car.brand} ${car.model} from ${car.year} for ${car.price}`)
}

console.log('\nWhen calling autorun, our ad will get printed once\n');

autorun(() => {
  printAd();
});

console.log('\nChanging the brand will automatically update the ad and cause a re-print\n');

car.brand = 'BMW';

console.log('\nChanging the description will not cause an update, since it is not being touched by the print ad function.\n');
car.description = 'Now in poison-green!';

console.log('Setting an observed value to the same value will also not call an update.\n');
car.brand = 'BMW';
car.model = 'TT';
car.price = 19000

module.exports = {
  car: car,
  printAd: printAd
}
