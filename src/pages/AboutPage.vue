<template>
<div id="about-page">
    <div id="nav-bar">
        <nav-bar :nav="nav"></nav-bar>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
    components: {
        NavBar,
    }
}
</script>

<style>
template {
    height: 100%;
    margin: 0;
}

#nav-bar {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
}

</style>
