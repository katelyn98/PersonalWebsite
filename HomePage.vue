<template>
<div id="homepage">
    <div id="mask">
      <div id="about-page">
        <router-link to="about-page"></router-link>
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

#mask {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about-page {
  float: left;
}

#nav-bar {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
}

</style>


