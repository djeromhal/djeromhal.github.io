<template>
    <div class="container form-wrapper">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <form action="" :class="'form ' + className" @submit.prevent="sendEmail($event)">
                    <h2 class="title-h2" v-if="isLogin == true">Login</h2>
                    <h2 class="title-h2" v-else>Apply</h2>

                    <Input type="text" placeholder="Name" v-model="name" v-if="isLogin == false" />
                    <Input type="email" placeholder="Email" v-model="email" />
                    <Input type="tel" placeholder="Phone number" v-model="phone" v-if="isLogin == false" />
                    <Input type="password" placeholder="Password" v-if="isLogin == true" />

                    <button type="submit" class="button button-style-1" v-if="isLogin == true">Login</button>
                    <button type="submit" class="button button-style-1" v-else>Apply for a merchant account</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Input from '@/components/Input'
import axios from 'axios'
// import nodemailer from 'nodemailer'

export default {
    data:()=>({
        name: '',
        email: '',
        phone: ''
    }),
    props:['className', 'isLogin'],
    components:{
        Input
    },
    methods:{
        sendEmail: function(e){
            var _this = this;
            var data = `name=${this.name}&email=${this.email}&phone=${this.phone}`
            axios.post('http://localhost:8000/server', data)
            .then((response) => {
                
                if(response.data.mail == 'sent'){
                    _this.$emit('submited', true)
                }
            })
            .catch((error) => {
                console.log(error);
            })
        //     var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'mikhailivanko@gmail.com',
        //         pass: '2964e2C0'
        //     }
        //     });

        //     var mailOptions = {
        //     from: 'mikhailivanko@gmail.com',
        //     to: 'mikhailivanko@gmail.com',
        //     subject: 'Sending Email using Node.js',
        //     text: 'That was easy!'
        //     };

        //     transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        //     });
        }
    }
}
</script>