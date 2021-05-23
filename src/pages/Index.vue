<template>
    <div>
      <div class="background"></div>
      <div class="main">
        <div class="mb-4 pk-main">
            房间：勇敢的小胖子<br>局次：12/20局
        </div>
      </div>
      <!--左侧用户列表-->
      <div class="left-user">
        <div class="item" v-for="(item,index) in leftUserList" :key="index">
          <div class="user-pk-right user-pk-left">
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
          </div>
          <div><b-avatar variant="Secondary" :src="item.portraitUrl" size="2em"></b-avatar></div>
          <div class="nickname"><span :class="item.color?item.color:'white'">{{item.nickname}}</span></div>
          <div class="score"><b-badge :variant="item.color?item.color:'white'">{{ item.score }}</b-badge></div>
        </div>
      </div>
      <!--右侧用户列表-->
      <div class="right-user">
        <div class="item" v-for="(item,index) in rightUserList" :key="index">
          <div class="user-pk-right">
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
          </div>
          <div><b-avatar variant="success" :src="item.portraitUrl" size="2em"></b-avatar></div>
          <div class="nickname"><span :class="item.color?item.color:'white'">{{item.nickname}}</span></div>
          <div class="score"><b-badge :variant="item.color?item.color:'white'">{{ item.score }}</b-badge></div>
        </div>
      </div>
      <!--中间显示PK双方牌-->
      <!--<div class="pk-content">
        <div class="pk1 poker-pk">
          <div class="pk1-user bg-blue">
            <b-avatar variant="info" src="https://placekitten.com/300/300" size="2em"></b-avatar>
            <span class="white">张无忌<b-badge variant="warning">234</b-badge></span>
          </div>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
            <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
        </div>
        <b-avatar variant="info" :src="pkicon" class="pkicon"></b-avatar>
        <div class="pk2 poker-pk">
          <div class="pk2-user bg-red">
            <b-avatar variant="info" src="https://placekitten.com/300/300" size="2em"></b-avatar>
            <span class="white">赵敏<b-badge variant="warning">234</b-badge></span>
          </div>
          <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
          <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
          <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
        </div>
      </div>-->
      <!--底部显示自己的牌-->
      <div class="pk-content selfpoker poker-pk">
        <div class="pk2-user bg-red">
          <b-avatar variant="info" src="https://placekitten.com/300/300" size="2em"></b-avatar>
          <span class="white">赵敏<b-badge variant="warning">234</b-badge></span>
        </div>
        <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
        <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
        <b-img src="../assets/poker-bg.png" fluid alt="Responsive image"></b-img>
      </div>
    </div>
</template>

<script>
    import pkicon from "@/assets/pk.png"
    export default {
        name: "index.vue",
        data() {
            return{
                form: {
                    LoginName: '',
                    LoginPasswd: ''
                },
              pkicon:pkicon,
              leftUserList:[],
              rightUserList:[],
              memberlist:[
                {
                  nickname:'杨过',
                  text:'杨过',
                  portraitUrl:'https://picsum.photos/101/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'小龙女',
                  text:'小龙女',
                  portraitUrl:'https://picsum.photos/102/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'郭靖',
                  text:'郭靖',
                  portraitUrl:'https://picsum.photos/103/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'黄蓉',
                  text:'黄蓉',
                  portraitUrl:'https://picsum.photos/104/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'郭襄',
                  text:'郭襄',
                  portraitUrl:'https://picsum.photos/105/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'程英',
                  text:'程英',
                  portraitUrl:'https://picsum.photos/106/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'陆无双',
                  text:'无双',
                  portraitUrl:'https://picsum.photos/107/?blur',
                  score:0
                  ,color:''
                }
                ,
                {
                  nickname:'公孙绿萼',
                  text:'绿萼',
                  portraitUrl:'https://picsum.photos/108/?blur',
                  score:0
                  ,color:''
                }
                ,
                {
                  nickname:'公孙止',
                  text:'公孙止',
                  portraitUrl:'https://picsum.photos/109/?blur',
                  score:0
                  ,color:''
                },
                /*{
                  nickname:'一灯大师',
                  text:'一灯',
                  portraitUrl:'https://picsum.photos/110/?blur',
                  score:0
                  ,color:''
                },
                {
                  nickname:'周伯通',
                  text:'老玩童',
                  portraitUrl:'https://picsum.photos/111/?blur',
                  score:0
                  ,color:'red'
                },*/
                {
                  nickname:'独孤求败',
                  text:'独孤',
                  portraitUrl:'https://picsum.photos/112/?blur',
                  score:1024
                  ,color:''
                }
              ]
            }
        },
        created() {
            let abc = this.$sm3('abc');
            console.log(abc)
          this.leftUserList = this.memberlist.slice(0,5);
          this.rightUserList = this.memberlist.slice(5,10);
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style type="scss">
  .background{
    /*background: url("../assets/main-bg-1.jpg");*/
    background-color: #316068;
    width:100%;
    height:100%;
    z-index:-1;
    position: absolute;
    background-size: cover;
  }
  body{background-color: #316068;}
  .main{z-index: 0;position: relative;height: 70px;padding-top: 15px;}
  .pk-main{
    position: absolute;
    background-color: #f2f5bc;
    border-radius: 40px;
    width: 80%;
    left: 10%;
  }
  .pkicon{background: none;margin: 40px 20px;}
  .badge{padding-top: 5px;}
  .left-user{
    width: 16%;
    position: relative;
    left: 0;
    float: left;
  }
  .right-user{
    width: 16%;
    position: relative;
    right: 0;
    float: right;
  }
  .left-user .item,.right-user .item {
    margin-top: 15px;
    /*border-radius: 40px;*/
    background: rgba(0,0,0,0.2);
  }
  .left-user .item .nickname,.right-user .item .nickname {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    text-align: center;
    /*color: #6c757d;*/
    color: #fff;
    font-size: 12px;
  }
  .pk-content{
    padding: 0 20%;
    margin-top: 60px;
  }
  .poker-pk{width:156px;margin: 0 auto;top: 60px;}
  .poker-pk img{
    width: 52px;
    float: left;
  }
  .pk2{margin-top: 20px;top: 150px;}
  .pk1-user,.pk2-user{
    width: 100%;
    left: 0;
    /*position: absolute;*/
    top: -8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
.selfpoker{position: absolute;bottom: 0;top: auto;width: 80%;}
.selfpoker img{width: 45px;}
.user-pk-right{
  position: absolute;
  right: 100%;
  width: 156px;
  margin: 0 auto;
  & img:nth-child(1){
    position: relative;
    right: -15%;
    z-index: 100;
   }
  &:nth-child(2){
     z-index: 101;
    position: relative;
    right: -15%;
   }
  &:nth-child(3){
     z-index: 102;
    position: relative;
    right: -15%;
   }
  }
  .user-pk-right img:nth-child(1){
    position: relative;
    right: -40%;
    z-index: 100;
  }
  .user-pk-right img:nth-child(2){
    position: relative;
    right: -19%;
    z-index: 102;
  }
  .user-pk-right img:nth-child(3){
    position: relative;
    right: 0;
    z-index: 102;
  }
  .user-pk-right img{
    width: 52px;
    float: left;
  }
  .user-pk-left{left: 0}
  .user-pk-left img:nth-child(1){
    position: relative;
    z-index: 100;
  }
  .user-pk-left img:nth-child(2){
    position: relative;
    right: -19%;
    z-index: 101;
  }
  .user-pk-left img:nth-child(3){
    position: relative;
    right: 0;
    z-index: 102;
  }
</style>