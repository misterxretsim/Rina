<template>
    <div id="subscribe">
        <b-link href="https://www.instagram.com/rina.korolek/" target="_blank">
            <img src="../../assets/inst-icon.png" alt="rina.korolek" width="25">
            <p>rina.korolek</p>
        </b-link>
    </div>
</template>

<script>
    export default {
        name: 'subscribe'
    }
</script>

<style scoped>
    #subscribe {
        position: absolute;
        left: 20px;
        bottom: 25px;
    }
    a {
        text-decoration: none !important;
    }
    a:hover img {
        opacity: .7;
    }
    a:hover p {
        color: #cccccc;
    }
    img {
        transform: rotate(90deg);
        margin: 2px;
    }
    p {
        font-size: 1.2rem;
        color: #7a7a7a;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        margin: 0;
    }
</style>