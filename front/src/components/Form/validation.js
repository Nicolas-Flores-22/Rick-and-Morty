const validate = (userData) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegexNumero = /\d/;
    const passwordRegexMayuscula = /[A-Z]/;
    const passwordRegexSimbolo = /(?=.*[!@#$%^&*])/

    const errors = {};

    //VALIDANDO USERNAME
    if(!userData.username){
        errors.username = 'El nombre de usuario no puede estar vacio.';
    }else{
        if(userData.username.length > 35){
            errors.username = 'El nombre de usuario debe tener menos de 35 caracteres.';
        }else{
            if(!emailRegex.test(userData.username)){
                errors.username = 'El nombre de usuario debe ser un email válido.';
            }
        }
    }


    //VALIDANDO PASSWORD
    if(!passwordRegexSimbolo.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un símbolo';
    }

    if(!passwordRegexNumero.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un número.';
    }
    
    
    if(!passwordRegexMayuscula.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos una letra mayúscula';
    }
    
    if(userData.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    return errors;
};

export default validate;

