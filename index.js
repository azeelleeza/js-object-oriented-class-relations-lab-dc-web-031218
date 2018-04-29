store = {drivers:[],passengers:[],trips:[]};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter((t)=>{
      return t.driverId === this.id;
    });
  }
  passengers(){
    return this.trips().map(trip=>trip.passenger());
    }
  }

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter((t)=>{
      return t.passengerId === this.id;
    });
  }
  drivers(){
    return this.trips().map(trip=>trip.driver());
  }
}
class Trip{
  constructor(driver,passenger){
    console.log(driver);
    console.log(passenger);
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  passenger(){
    return store.passengers.find((p)=>{
      return p.id === this.passengerId;
    });
  }
  driver(){
    return store.drivers.find((p)=>{
      return p.id === this.driverId;
    });

  }
}
