import bills from "./bills.js";

// //Función administrador 

const administrator = () => {

    //Lista de billetes y su denominación
    // Guardar y actualizar el valor de la cantidad de billetes que existe
    console.group("Resultados-administrador")

    bills.forEach(element => {
        let amount_bills = parseInt(prompt("Por favor ingrese la cantidad de billetes de 100, 50, 20 10 y 5. en ese mismo orden"));

        element.amount += amount_bills

    })

    //Se muestra en consola las propiedades del array de billetes
    bills.forEach(element => {
        console.log(' Billetes de:', element.denomination, 'Mil,', ' hay ', element.amount, 'en total')
    })

    //Variable de la cantidad de dinero que hay en el cajero
    let totalATM = 0
    

    //Calculo de la cantidad total de cada billete
    let total_amount = 0;
    bills.forEach(element => {
        total_amount = element.denomination * element.amount
        console.log(' De los billetes de ', element.denomination, 'la cantidad total es de: ', total_amount)
        return {
            total: element.total += total_amount
        }
    });


    //Calculo de dinero total del cajero
    bills.forEach(element => {

        totalATM += element.amount * element.denomination

    })

    console.log(" La cantidad que hay dentro del cajero es: ", totalATM, "Mil pesos")
    console.groupEnd("Resultados-administrador")
}

export default administrator; 
