<template>
    <div :class="'menu ' + className" ref="menu">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand"
                        active-class="active"
                        :offset="0">
                        <nuxt-link exact no-prefetch active-class="active" class="nav-link logo-link" to="/"><span class="logo logo-main"><span>One</span>SecPay</span><br><span class="logo logo-sub">Merchant Accounts</span></nuxt-link>
                        <div class="burger" @click="toggleMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <nuxt-link active-class="active" class="nav-link" :to="{ path: '/', hash:'#about'}">About</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link active-class="active" class="nav-link" :to="{ path: '/', hash:'#tools'}">Tools</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link active-class="active" class="nav-link" :to="{ path: '/', hash:'#benefits'}">Benefits</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link active-class="active" class="nav-link" :to="{ path: '/', hash:'#categories'}">Categories</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link active-class="active" class="nav-link nav-link--login" to="/login">Login</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
    }),
    props: ['className'],
    methods:{
        toggleMenu: function(){
            this.$refs['menu'].classList.toggle('mob-open')
        }
    },
}
</script>
<style lang="scss" scoped>
</style>