

// create an array of vehicles
const vehicleType: string[] = ['Car', 'Truck', 'Motorcycle','Bike'];







// will use default wheels has 10000 towing capacity
// use the static method to generate a vin

// will use default wheels



// make 
interface VehicleMake {
    id: number;
    name: string;
    country: string;
}

// Example of a function that returns a list of vehicle makes
function getVehicleMakes(): VehicleMake[] {
    return [
        { id: 1, name: "Toyota", country: "Japan" },
        { id: 2, name: "Ford", country: "USA" },
        { id: 3, name: "Volkswagen", country: "Germany" },
        // Add more makes as needed
    ];
}

// model.ts

export interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
}


// payload capcity
export interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    payloadCapacity: number; // in kilograms or pounds, depending on your preference
}



// Define an interface for Vehicle
export interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
}



// Example usage
const makes = getVehicleMakes();
console.log(makes);

// custom wheels for motorbike


vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// create a new instance of the Cli class

class Cli {
    private command: string;

    constructor(command: string) {
        this.command = command;
    }

    public execute() {
        console.log(`Executing command: ${this.command}`);
    }
}

// Create a new instance of the Cli class
const myCli = new Cli('list');
myCli.execute(); 
