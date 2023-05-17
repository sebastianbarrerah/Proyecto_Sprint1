                              /*Funcionamiento cajero automatico*/

//Importacion de archivos (funciones y variables)
import users from "./modulo/clientes.js";
import check_password from "./modulo/ingresoDatos.js";

//Verificacion de usuario
let users_id = [];
users.forEach(element => {
    users_id.push(element.id);
});

let i = 1;

//Ciclo del cajero
while (i < 6) {
i = i + 1
    let found = false;

    let login_users = String(prompt("Ingrese el usuario"));

    let users_found = 0;
    //Comparación de usuario en el array de clientes
    users_id.includes(login_users);
    //Condicional con opción de usuario encontrado y usuario no encontrado
    users_id.every((element, index) => {
        if (element === login_users) {
            found = true;
            users_found = index;
            console.log('%cBienvenido','color: blue; font-size: 24px');
            check_password(users_found);
            return false;
            
        }
        else {
            found = false;
            return true;
        }
    })

    if (found) {
        //break;
    }
    else {
        console.error('Usuario no existente, debe volver a ingresar el usuario');
    }
}


