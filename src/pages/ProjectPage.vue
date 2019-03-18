<template>
    <div id="ProjectPageHome">
        <div id="center-nav">
          <div id="nav-bar">
              <nav-bar :nav="nav"></nav-bar>
          </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  components: {
      NavBar,
  },
}
</script>

<style>

#ProjectPageHome {
    background-image: url("https://media.giphy.com/media/xUA7aRkZwuLP7YVSEw/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
