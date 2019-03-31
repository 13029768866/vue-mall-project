
  <template>
    <div class="login-container">
      <!--登录面板内容部分-->
      <div class="login-inner">
        <!--面板头部-->
        <div class="login-header">
          <div class="login-logo">
            <img src="./images/jianlai.jpg" alt="" width="150">
          </div>
          <!--面板标题-->
          <div class="login-header-title">
            <a href="javascript:;"
               :class="{current: loginIsShow}"
                @click="toggleLogin(true)"
            >短信登录</a>
            <a href="javascript:;"
               :class="{current: !loginIsShow}"
               @click="toggleLogin(false)"
            >
              密码登录</a>
          </div>
        </div>
        <!--面板表单部分-->
        <div class="login-content">
          <form>
            <!--手机验证码登录部分-->
            <div :class="{current: loginIsShow}">
              <section class="login-message">
                <input type="tel"
                       maxlength="11"
                       placeholder="手机号"
                       v-model="phone"
                >
                <button
                  v-if="!count"
                  :class="{phone_right: phoneIsRight}"
                  class="get-verification"
                  @click.prevent="getVerifyCode()"
                >获取验证码</button>
                <button
                  v-else
                  disabled="disabled"
                  class="get-verification" >
                  {{count}}秒</button>
              </section>
              <section class="login-verification">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login-hint">
                温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">服务协议与隐私政策</a>
              </section>
            </div>
            <!--账号登录部分-->
            <div :class="{current: !loginIsShow}">
              <section>
                <section class="login-message">
                  <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱" v-model="user_name">
                </section>
                <section class="login-verification">
                  <input type="password" maxlength="8" placeholder="密码" v-if="pwdShow" v-model="pwd">
                  <input type="tel" maxlength="8" placeholder="密码" v-else v-model="pwd">
                  <div class="switch-show">
                    <img  :class="{on:pwdShow}" @click.prevent="togglePwdShow(false)" src="./images/show_pwd.png" alt="" width="20" >
                    <img  :class="{on:!pwdShow}" @click.prevent="togglePwdShow(true)" src="./images/hide_pwd.png" alt="" width="20">
                  </div>
                </section>
                <section class="login-message">
                  <input  class="login_wzj" type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img
                    ref="verifyImg"
                    class="get_verification"
                    src="http://154.83.12.64:3000/api/captcha"
                    @click.prevent = 'changeVerify()'
                    alt="captcha">
                </section>
              </section>
            </div>
            <button
              class="login-submit"
              @click.prevent="login()"
            >登录</button>
          </form>
          <button class="login-back" @click="$router.back()">返回</button>
        </div>
      </div>
    </div>
  </template>

<script>
  import { getPhoneCode,codeLogin,pwdLogin } from '@/api/index'
  import {Toast} from 'mint-ui'
  import {mapActions} from 'vuex'

    export default {
        name: "Register",
        data(){
          return {
            loginIsShow: true, // 短信登录为true,
            phone:'',// 手机号码
            count: 0,// 倒计时
            pwd:'',
            code:'', // 验证码
            pwdShow: true, // 密码显示方式true为密文
            userInfo: {}, // 用户信息
            user_name:'', // 用户名
            captcha:'' // 图形验证码
          }
        },
        computed:{
          // 手机号码验证
          phoneIsRight(){
            return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
          }

        },
        methods:{
          ...mapActions(['syncUserInfo']),
          toggleLogin(flag){
            this.loginIsShow = flag;
          },
          // 验证码倒计时
          async getVerifyCode(){
            console.log(1);
            if(this.phoneIsRight){
              this.count = 10
              this.timer = setInterval(()=>{
                this.count--
                if(this.count === 0){
                  clearInterval(this.timer)
                }
              },1000)
            }
            let result = await getPhoneCode(this.phone)
            console.log(result);
            if(result.err_code === 0){
              Toast({
                message: result.message,
                position: 'center',
                duration: 3000
              });
            }
          },
          // 密码显示方式
          togglePwdShow(flag){
            this.pwdShow = flag
            console.log(this.pwdShow);
          },
          // 改变验证码
          changeVerify(){
            this.$refs.verifyImg.src ='http://154.83.12.64:3000/api/captcha?time=' + new Date()
          },
          // 登录
          async login() {
            //  1.判断登录模式
            if (this.loginIsShow) { //短信登录
              if (!this.phone) {
                Toast('请输入手机号码')
                return
              } else if (!this.phoneIsRight) {
                Toast('请输入正确手机号码')
                return
              }

              if (!this.code) {
                Toast('请输入验证码')
                return
              } else if (!/^\d{6}$/gi.test(this.code)) {
                Toast('请输入正确验证码')
                return
              }

              // 验证登录
              const result = await codeLogin(this.phone, this.code)
              console.log(result);
              if(result.success_code === 200){
                this.userInfo = result.message
              }else{
                this.userInfo = {
                  message: '登录失败，手机号或者验证码不正确！'
                }
              }
            } else { // 账号密码登录
              if (!this.user_name) {
                Toast('请输入用户名/手机/邮箱')
                return
              } else if (!this.pwd) {
                Toast('请输入密码')
                return
              }else if(!this.captcha){
                Toast('请输入验证码')
                return
              }
              // 用户名和密码登录

              const result = await pwdLogin(this.user_name, this.pwd, this.captcha)
              console.log(result);
              if(result.success_code === 200){
                this.userInfo =result.message
              }else{
                this.userInfo = {
                  message: '登录失败，手机号或验证码不正确！'
                }
              }
            }
            if(!this.userInfo.id){
              Toast(this.userInfo.message)
            }else {
              this.syncUserInfo(this.userInfo);
              this.$router.back()
            }
          }
        }
    }
</script>

<style scoped lang="stylus">
  .login-container
    width 100%
    height 100%
    background #fff
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color mediumpurple
          text-align center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center
          > a
            text-decoration none
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        > form
          > div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid mediumpurple
            .login-message
              position relative
              display: flex
              align-items: center
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .login_wzj
                width: 50%
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.phone_right
                  color purple
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top 12px
              color #999
              font-size 12px
              line-height 20px
              > a
                color mediumpurple
          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background mediumpurple
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border: 1px solid mediumpurple
          color mediumpurple
          text-align center
          font-size 16px
          line-height 42px
</style>
