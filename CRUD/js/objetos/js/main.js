let car = 'Shadow'; // variable 
const myCar = {         //constante, no cambia la referencia en memoria
    marca: "Chrysler",
    modelo: "Shadow",
    año: "1989",
    color: "blanco",
    motor: 2.2,
    puertas: 2,
    estandar: true,
    nombreCompletoDeMiCarro: function () {
        return this.marca + "" + this.modelo + "año:" + this.año    //metodos son acciones que pueden realizar los objetos.
        //this se refiere al objeto persona 
    }
};

//Acceder a las propiedades
myCar.año
myCar.marca
myCar.color
myCar



