<template>
<div class="navbar">
  <div id="About">
    <router-link to="AboutPage">About Me!</router-link>
  </div>
  <div id="Projects">
    <router-link to="ProjectPage">Projects</router-link>
  </div>
  <div id="Research">
    <router-link to="ResearchPage">Research</router-link>
  </div>
    <!-- <router-link to="Projects">My Projects</router-link>
    <router-link to="BlogPage">Blog/Pictures</router-link> -->
</div>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
    display: flex;
    flex: center;
    background-color: rgba(3, 36, 11, 0.678);
    border-radius: 40px;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

.navbar a{
    float: left;
    color: rgb(51, 51, 51);
    background-color: lightgreen;
    border-radius: 15%;
    text-align: center;
    padding: 16px 20px;
    text-decoration: none;
    font-size: 20px;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: rgba(28, 100, 46, 0.747);
  color: rgb(51, 51, 51);
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color:  rgb(165, 247, 176);
  color: white;
}

#About {
  padding: 10px;
}
#Projects {
  padding: 10px;
}
#Research {
  padding: 10px;
}

</style>
