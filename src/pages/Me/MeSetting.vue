<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"/>
      <me-common-cell left-icon="itlike-3" left-title="免拼单设置" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-1" left-title="消息接收设置" right-title="接收" right-title-color="red"/>
    </div>

    <div style="margin-top: 10px;">
      <me-common-cell left-icon="itlike-5" left-title="剑来" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-4" left-title="雪中悍刀行"/>
    </div>

    <div style="margin-top: 10px;">
      <me-common-cell left-icon="itlike-1" left-title="六千里"/>
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell';
  import {Toast, MessageBox} from 'mint-ui';
  import {mapActions} from 'vuex'

  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    methods: {
      ...mapActions(["logOut"]),
      dealCellClick(props) {
        Toast('点击了' + props);
      },
      dealLogout() {
        // console.error(11);
        MessageBox.confirm('您确定退出登录吗?').then(action => {
           // console.log(action);
           if('confirm' === action){
                // 退出登录
                let result = this.logOut({});
                // console.log(result);
                // 回到主界面
                this.$router.replace('/home');
           }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .logout
    width 100%
    height 44px
    margin-top 10px
    background-color #fff
    display flex
    justify-content center
    align-items center
    text-align center
</style>
