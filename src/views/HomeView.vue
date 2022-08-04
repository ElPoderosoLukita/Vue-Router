<script setup>
</script>

<template>
  <main>
    <h1>H O M E</h1>
    <h2 class="whoarewe">¿Quienes somos nosotros?</h2>
    <p class="p-whoarewe"><span>Blogex</span> es una empresa encargada de publicar<br>
       blogs para que los creadores de contenido sean<br/>
       un poco más reconocidos
    </p>

    <div class="mid">
      <img src="../assets2/WavyBuddiesAvatar.png" alt="Wavy Buddies Avatar">
      <h2>¿Cómo funcionamos?</h2>
    </div>
    <p class="description">
      El escritor debe mandarnos un gmail a <br/>
      <span>blogex@gmail.com</span>, nosotros lo revisaremos y <br/>
      verificaremos si cumple los requisitos para estar<br/>
      en nuestra página, los requisitos son los siguientes:<br/>
    </p>
    <ol>
      <li>Tener mínimo de 200 caracteres</li>
      <li>Hablar de un tema, si quieres hablar de más<br/>
          temas haz otro blog
      </li>
      <li>¡Escribir y mandarnos el blog!</li>
    </ol>
    <p class="end">
      ¡Envíanos tu blog a <span>blogex@gmail.com</span> y te<br/>
      aceptaremos!
    </p>
  </main>
</template>

<style scoped>
h1{
  text-align: center;
  margin-top: 10px;
}
.whoarewe{
  margin-top: 20px;
  margin-left: 10px;
}
.p-whoarewe{
  margin-top: 20px;
  margin-left: 10px;
}
.p-whoarewe span{
  font-weight: bold;
}

.mid{
  display: flex;
  align-items: center;
  margin-top: 35px;
  margin-left: -25px;
}
.mid img{
  width: 200;
}
.description{
  margin-top: 35px;
  margin-left: 10px;
}
.description span{
  color: rgb(78, 75, 221);
}
ol{
  padding-left: 25px;
  margin-top: 25px;
}
.end{
  margin-left: 10px;
  margin-top: 25px;
  margin-bottom: 15px;
}
.end span{
  color: rgb(78, 75, 221);
}
</style>
