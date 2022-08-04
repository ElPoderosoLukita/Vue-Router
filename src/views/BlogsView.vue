<script>
  export default{
    data(){
      return{
        blogs:[
          {
            id:1,
            name:"Juan",
            topic:"fútbol",
            photo:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            date:'11/09/21'
          },
          {
            id:2,
            name:"María",
            topic:"música",
            photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            date:'11/07/22'
          },
          {
            id:3,
            name:"Mario",
            topic:"moda",
            photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            date:'05/01/19',
          },
          {
            id:4,
            name:"Ana",
            topic: "Pink Floyd",
            photo:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            date:'15/05/21',
          },
        ]
      };
    }
  }
</script>
<template>
  <div class="blogs">
    <h1>B L O G S</h1>
    <div v-for="blog in blogs" :key="blog.id" class="blog-people">
      <img :src="blog.photo" alt="">
      <div class="text">
        <p>{{blog.name}} ha escrito un blog<br/>
        sobre {{blog.topic}}, entra a verlo!</p>
        <span>{{blog.date}}</span>
        <RouterLink :to="`/blogs/${blog.name}`"><button>Entrar</button></RouterLink>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  margin-top: 10px;
}
img{
  display: block;
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 50%;
}
.blog-people{
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  width: 90%;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
  padding-top: 15px;
}
.blog-people p, span{
  padding-left: 10px;
}
.blog-people .text{
  display: flex;
  flex-direction: column;
}
button{
  width: 50%;
  display: block;
  margin-top: 25px;
  background-color: #74DC5A;
  color: white;
  border: none;
  width: 120px;
  height: 38px;
  border-radius: 15px;
}
span{
  font-style: italic;
}
@media (min-width: 1024px) {
  .blogs {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
