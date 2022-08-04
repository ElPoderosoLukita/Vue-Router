<template>
    <h1>P O S T U L A R</h1>
    <p>Aquí puedes introducir tus datos para que nos<br/>
    llegue tu <span>postulación</span>, luego te responderemos<br/>
    si publicaremos tu blog o si queda descartado,<br/>
    postularse es gratis, <span>¡no tengas miedo!</span> Si<br/>
    creemos que tu blog no es muy bueno, puedes intentarlo nuevamente.</p>

    <h2>Formulario</h2>
    <form action="">
        <label for="email">E-mail</label>
        <input type="text" id="email">

        <label for="nombre">Nombre</label>
        <input type="text" id="nombre">

        <label for="apellido">Apellido</label>
        <input type="text" id="apellido">

        <RouterLink to="/thanks"><input type="submit" value="Enviar" id="submit"></RouterLink>
        <RouterView/> 
    </form>
</template>

<style scoped>
h1{
    text-align: center;
    margin-top: 10px;
}
p{
    margin-left: 15px;
    margin-top: 25px;
}
p span{
    font-weight: bold;
}

h2{
    text-align: center;
    margin-top: 50px;
}
form{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 75%;
}
form input{
    margin-bottom: 15px;
    border: none;
    border-radius: 15px;
    background-color: #DEDEDE;
    height: 25px;
}
form label{
    font-style: italic;
}
#submit{
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    background-color: #74DC5A;
    color: white;
    border: none;
    width: 120px;
    height: 38px;
    border-radius: 15px;
}
</style>