<template>
    <div class="categories" id="categories">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <center>
                        <h4 class="title-subtitle-2">More then 35</h4>
                        <h2 class="title-h2">Сategories</h2>
                        <p><strong>OneSecPay</strong> has the knowledge, experience, and expertise in high risk merchant account payment processing to offer solutions for these categories and more</p>
                    </center>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="v-carousel mob">
                        <div class="v-carousel-item-wrapper" v-for="slide in slides" :key="slide.name">
                            <div class="v-carousel-item">
                                <div class="v-carousel-item-overlay"></div>
                                <img :src="slide.url" :alt="slide.name">
                                <span v-html="slide.name"></span>
                            </div>
                        </div>
                    </div>
                    <client-only>
                        <carousel class="v-carousel desk"
                            :scrollPerPage="true" 
                            :perPageCustom="[[0, 3], [1240, 6]]"
                            paginationActiveColor="#FFA234" 
                            paginationColor="#C4C4C4" 
                            :paginationSize=5
                            :navigationEnabled=true
                            navigationNextLabel="<div class='v-carousel-next'><i class='icon-arrow'></i></div>"
                            navigationPrevLabel="<div class='v-carousel-prev'><i class='icon-arrow'></i></div>"
                            :paginationPadding=5
                            ref="v-carousel">
                            <slide class="v-carousel-item-wrapper" v-for="slide in slides" :key="slide.name">
                                <div class="v-carousel-item">
                                    <div class="v-carousel-item-overlay"></div>
                                    <img :src="slide.url" :alt="slide.name">
                                    <span v-html="slide.name"></span>
                                </div>
                            </slide>
                        </carousel>
                    </client-only>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        slides: [
            {
                name: 'Bad credit',
                url: 'c1.jpg'
            },
            {
                name: 'Business <br>consulting',
                url: 'c2.jpg'
            },
            {
                name: 'Business <br>opportunities',
                url: 'c3.jpg'
            },
            {
                name: 'Auto <br>warranties',
                url: 'c4.jpg'
            },
            {
                name: 'Vape',
                url: 'c5.jpg'
            },
            {
                name: 'Web design / <br>Seo*',
                url: 'c6.jpg'
            },
            {
                name: 'Credit repair',
                url: 'c7.jpg'
            },
            {
                name: 'Airlines & booking',
                url: 'c8.jpg'
            },
            {
                name: 'Background <br>checks',
                url: 'c9.jpg'
            },
            {
                name: 'Coins & <br>collectables',
                url: 'c10.jpg'
            },
            {
                name: 'Continuity <br>billing',
                url: 'c11.jpg'
            },
            {
                name: 'Government <br>grants',
                url: 'c12.jpg'
            },
            {
                name: 'Health & <br>beauty',
                url: 'c13.jpg'
            },
            {
                name: 'Memberships',
                url: 'c14.jpg'
            },
            {
                name: 'Marketing',
                url: 'c15.jpg'
            },
        ]
    }),
    mounted: function(){
        if(window.innerWidth < 576){
            // this.$refs['v-carousel'].destroy();
        }
    }
}
</script>