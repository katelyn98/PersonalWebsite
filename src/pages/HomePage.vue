<template>
<div id="homepage">
    <div id="mask">
      <div id="about-page">
        <router-link to="about-page"></router-link>
      </div>
      <div id="project-page">
          <router-link to="project-page"></router-link>
      </div>  
      <div id="center-nav">
          <div id="nav-bar">
              <nav-bar :nav="nav"></nav-bar>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  name: 'app',
  components: {
      NavBar,
  },
}
</script>



<style>
#homepage {
    background-image: url("https://media.giphy.com/media/xUA7aRkZwuLP7YVSEw/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#center-nav {
  display: flex;
  flex: center;
}

</style>


