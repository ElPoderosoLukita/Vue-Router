<template>
    <h1>¡E N V I A D O!</h1>
    <img src="../assets2/ShinyHappyWeirdPoses.png" alt="">
    <p>
        Luego te notificaremos si tu blog ha sido <br/>
        aceptado o no, ¡muchas gracias!
    </p>
    <RouterLink to="/"><button>Volver</button></RouterLink>
    <RouterView/>
</template>

<style scoped>
h1{
    text-align: center;
    margin-top: 10px;
}
img{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
}
p{
    text-align: center;
    margin-top: 40px;
}
button{
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