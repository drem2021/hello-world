<template>
    <div>
        <div class="background"></div>
        <div class="main">
            <b-navbar toggleable="lg" type="light" variant="white">登录</b-navbar>
            <div class="logo"></div>
            <b-form @submit="onSubmit" class="login_center" >

                <b-input-group id="input-group-2" class="input_box">
                    <b-input-group-prepend is-text>
                        <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                            id="input-2"
                            v-model="form.LoginName"
                            required
                            placeholder="请输入用户名"
                    ></b-form-input>
                </b-input-group>

                <b-input-group id="input-group-3" class="input_box">
                    <b-input-group-prepend is-text>
                        <b-icon icon="lock-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                            type="password"
                            id="input-3"
                            v-model="form.LoginPasswd"
                            required
                            aria-describedby="password-help-block"
                            placeholder="请输入密码"
                    ></b-form-input>
                </b-input-group>

                <b-button type="submit" block  variant="primary" :disabled="btnDisabled">
                    <b-spinner small v-if="loadding"></b-spinner>登录
                </b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return{
                form: {
                    LoginName: '',
                    LoginPasswd: ''
                },
                btnDisabled:false,
                loadding:false
            }
        },
        created() {
            let abc = this.$sm3('123456');
            console.log("sm3-123456:",abc)
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.btnDisabled = true;
                this.loadding = true;
                alert(JSON.stringify(this.form))
            }
        }
    }
</script>

<style scoped>
    .background{
        background: url("../assets/poker-login-bg.jpg");
        width:100%;
        height:100%;
        z-index:-1;
        position: absolute;
        background-size: cover;
    }
    .main{z-index: 0;}
    .login_center {
        width: 100%;
        text-align: center;
        margin: 40px auto;
    }
    .login_center .input_box {
        margin: 20px 0;
    }
    .form-control{
        border-top: none;
        border-right: none;
        border-left: none;
        border-radius: 0;
        background: none;
    }
    .input-group-text{
        background:none;
        border-top: none;
        border-right: none;
        border-left: none;
        border-radius: 0
    }
    .form-control:focus {
        border-color: #ffffff;
        outline: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-bottom: 1px solid #ced4da;
    }
    .btn-block {
        display: block;
        width: 85%;
        margin: auto;
        border-radius: 30px;
        margin-top: 50px;
    }
    .logo{width: 100%;height: 120px}
    .navbar{box-shadow: 0 0 5px #ced4da;text-align: center;justify-content: center;}
    .bg-white {
      background:none !important;
    }
</style>