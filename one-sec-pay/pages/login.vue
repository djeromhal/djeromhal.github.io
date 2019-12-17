<template>
  <div class="login-page">
    <Navbar2 :className=navbarClassName />
    <Form :className=formClassName :isLogin=true @submited="onSubmitForm" />
    <Popup :popupText="'Incorrect password.'" :isPopupVisible="isPopupVisible" @submited="onSubmitForm" :status="status" />
    <Footer />
  </div>
</template>

<script>
import Navbar2 from '@/components/Navbar2'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'


export default {
  data: () => ({
    navbarClassName: 'grey',
    formClassName: 'white',
    isPopupVisible: false,
    status: false
  }),
  components:{
    Navbar2,
    Form,
    Footer,
    Popup
  },
  methods: {
    onSubmitForm: function(value){
      this.isPopupVisible = value;
      this.status = false;
    },
  }
}
</script>