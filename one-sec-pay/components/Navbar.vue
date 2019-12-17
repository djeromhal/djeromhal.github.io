<template>
    <div :class="'menu ' + className" ref="menu">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <client-only>
                        <scrollactive class="navbar navbar-expand"
                            active-class="active"
                            :offset="54"
                            v-on:itemchanged="scrollactiveOnChange()">
                            <a href="/#section-1" class="nav-link logo-link scrollactive-item"><span class="logo logo-main"><span>One</span>SecPay</span><br><span class="logo logo-sub">Merchant Accounts</span></a>
                            <!-- <nuxt-link exact no-prefetch active-class="active" class="nav-link logo-link" to="/"><span class="logo logo-main"><span>One</span>SecPay</span><br><span class="logo logo-sub">Merchant Accounts</span></nuxt-link> -->
                            <div class="burger" @click="toggleMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="/#about" class="nav-link scrollactive-item">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/#tools" class="nav-link scrollactive-item">Tools</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/#benefits" class="nav-link scrollactive-item">Benefits</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/#categories" class="nav-link scrollactive-item">Categories</a>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link active-class="active" class="nav-link nav-link--login" to="/login">Login</nuxt-link>
                                    </li>
                                </ul>
                            <!-- <ul class="navbar-nav">
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
                            </ul> -->
                            </div>
                        </scrollactive>
                    </client-only>
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
        },
        scrollactiveOnChange: function(){
            this.$refs['menu'].classList.remove('mob-open')
        }
    },
    mounted: function(){
        let flag = false;

        if(window.scrollY > 0){
            this.$refs['menu'].classList.add('fix');
            flag = true;
        }else{
            this.$refs['menu'].classList.remove('fix');
            flag = false;
        }

        const handler = (e) => {
            let offset = window.scrollY;

            if(offset > 0 && !flag){
                this.$refs['menu'].classList.add('fix');
                flag = true;
            }else if(offset == 0 && flag){
                this.$refs['menu'].classList.remove('fix');
                flag = false;
            }
        };

        window.addEventListener('scroll', handler, false);
    }
}
</script>
<style lang="scss" scoped>
</style>