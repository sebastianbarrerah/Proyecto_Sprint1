//Importación de funciones y variables 
import users from "./clientes.js";
import administrator from "./administrador.js";
import customers from "./customer.js";

//Funcion verificación contraseña 
const check_password = (position) => {

    while (1) {

        let login_password = prompt("Por favor ingrese la contraseña");

        if (login_password === users[position].password) {
            console.log('%cContraseña correcta', 'color: red; font-size: 25px;');
            
            //Verificación tipo de usuario 
            if (users[position].type === 'administrador') {
                console.info('%cEres administrador', 'color: red; font-size: 25px;');
                //Función administrador 
                administrator(); 

            }
            else if (users[position].type === 'cliente') {
                console.log('Eres cliente');
                let amount_retirement = parseInt(prompt("Por favor indique cuanto va a retirar"));
                //Función cliente 
                customers(amount_retirement);

            }
            else {
                console.log('%c No existe tipo de usuario', 'color: red; font-size: 25px;');
            }
            break;
        }
        else {
            console.log('%c Contraseña incorrecta', 'color: red; font-size: 25px;');
        }
    }

}

export default check_password;
