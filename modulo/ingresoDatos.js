//Importación de funciones y variables 
import users from "./clientes.js";
import administrator from "./administrador.js";
import customers from "./customer.js";

//Funcion verificación contraseña 
const check_password = (position) => {

    while (1) {

        let login_password = prompt("Por favor ingrese la contraseña");

        if (login_password === users[position].password) {
            console.log('%cContraseña correcta', 'color: lightblue; font-size: 23px;');
            
            //Verificación tipo de usuario 
            if (users[position].type === 'administrador') {
                console.info('%cEres administrador', 'color: lightblue; font-size: 23px;');
                //Función administrador 
                administrator(); 

            }
            else if (users[position].type === 'cliente') {
                console.log('%cEres cliente', 'color: lightgreen; font-size: 23px;');
                let amount_retirement = parseInt(prompt("Por favor indique cuanto va a retirar"));
                //Función cliente 
                customers(amount_retirement);

            }
            else {
                console.error(' No existe tipo de usuario');
            }
            break;
        }
        else {
            console.warn('Contraseña incorrecta');
        }
    }

}

export default check_password;
