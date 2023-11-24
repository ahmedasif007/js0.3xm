// 1st
function calculator (ana, vori) {
    output = ana*vori;
    return output;
  }
  console.log(calculator(5,0.0625));

// 2nd
let shingara = 2*7 ;
let samusa = 7*10 ; 
let jilapi = 1*15 ;
function  sum( shingara, samusa, jilapi) {
    const total= shingara + samusa + jilapi;
     return total;}
     console.log(sum( shingara, samusa, jilapi));



// 3rd    //  


const cities = [
    { name: 'City A', population: 1200000, coordinates: { lat: 34.0522, lon: -118.2437 } },
    { name: 'City B', population: 800000, coordinates: { lat: 40.7128, lon: -74.0060 } },
    { name: 'City C', population: 500000, coordinates: { lat: 41.8781, lon: -87.6298 } },
  
  ];
const populations = cities.map(city => city.population);
const totalPopulation = populations.reduce((accum, currentPopulation) => accum + currentPopulation, 0);

console.log('Total population:', totalPopulation);
