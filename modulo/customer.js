//Funcion cliente
import bills from "./bills.js"

// función customers (clientes)
const customers = (amount_retirement) => {
console.group("Resultados-Cliente")
    let retreat_customer = amount_retirement;

    let totalATM = 0;

    let totalamount = 0;

    // Actualizar el valor a la propiedad "total" del array
    bills.map(element => {
        totalamount = element.denomination * element.amount
        console.log("De los billetes de ", element.denomination, "la cantidad total es de: ", totalamount)
        return {
            total: element.total = totalamount
        }
    });

    console.log("")

    //Sumatoria y calculo de la cantidad total de dinero dentro del cajero 
    bills.forEach(element => {
        totalATM += element.amount * element.denomination

        console.log("La cantidad que hay dentro del cajero es: ", totalATM, "Mil pesos")
        return totalATM;
    })

    console.log("El total del cajero es", totalATM);

    console.log(" ")

    const repay = [];

    //Casos de operación del cajero 
    bills.forEach(element => {

        if (totalATM === 0) {

            console.log('Cajero en mantenimiento, vuleva pronto');

        } else if (retreat_customer > totalATM) {
            console.log('El total de billetes de:', element.denomination, 'es:', element.total);
            let cash_delivered = 0;
            cash_delivered = totalATM;
            totalATM = totalATM - cash_delivered;
            console.log("El cajero quedo con:", totalATM)

        }

        else if (retreat_customer < totalATM) {
            bills.forEach(element => {
                let installment = Math.floor(retreat_customer / element.denomination);

                if (installment > 0) {
                    if (installment <= element.amount) {
                        const bill = {
                            denomination: element.denomination,
                            amount: installment
                        };
                        repay.push(bill); //Devolver
                        //Del array del cajero restamos la cantidad de billetes entregados 
                        element.amount -= installment;
                        // Resta del total de dinero del cajero
                        retreat_customer -= element.denomination * installment;
                        totalATM -= element.denomination * installment;

                        console.table(repay)
                        console.log(totalATM)
                        console.groupEnd("Resultados-Cliente")
                    }

                }

            });

        }

    });

    console.log(" ")

}

export default customers;