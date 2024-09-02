function validarForm(form1){
    let usuario= form1.usuario 
    if(usuario.value==""){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false
    }

    let pass = form1.password //validar contraseña
    if(pass.value == ""|| pass.value.length < 4){
        alert("Debe ingresar una contraseña mayor a 4 caracteres")
        pass.focus //coloca el cursos en el campo indicado
        pass.select //seleccionar el contenido del input 
        return false;
    }

}
