<template>
  <div>
    <Navbar :className=navbarClassName />
    <Section1 />
    <About />
    <Tools />
    <Benefits />
    <Categories />
    <Form :className=formClassName :isLogin=false @submited="onSubmitForm" />
    <Footer />
    <Popup :popupText="'Thank you! We\'ll contact you as soon as possible.'" :isPopupVisible="isPopupVisible" @submited="onSubmitForm" :status="status" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import About from '@/components/About'
import Tools from '@/components/Tools'
import Benefits from '@/components/Benefits'
import Categories from '@/components/Categories'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup'


export default {
  data: () => ({
    navbarClassName: 'fixed white',
    formClassName: 'grey',
    isPopupVisible: false,
    status: false
  }),
  components:{
    Navbar,
    Section1,
    About,
    Tools,
    Benefits,
    Categories,
    Form,
    Footer,
    Popup
  },
  methods: {
    onSubmitForm: function(value){
      this.isPopupVisible = value;
      this.status = true;
    }
  }
}
</script>