<template>
    <div class="popup-overlay" v-if="isPopupVisible">
        <div :class="[status ? 'success':'warning', 'popup']">
            <div class="popup-close" @click="closePopup"><i class="icon-close"></i></div>
            <div class="popup-text">
            {{popupText}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closePopup: function(){
            console.log('::closePopup',this)
            // this.$emit('closedPopup', false)
            // this.isPopupVisible = false
            this.$emit('submited', false)
        }
    },
    props:['popupText', 'isPopupVisible', 'status'],
    computed:{
        // isPopupV: function(){
        //     console.log(this.isPopupVisible)
        //     return this.isPopupVisible;
        // },
        // setPopupV: function(){
        //     isPopupV = false;
        // }
    }
}
</script>