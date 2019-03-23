# 1、项目初始化

## 1.1、项目结构

![](./READMEIMG/项目结构.png)

## 1.2、视口配置

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

## 1.3、解决点击300MS问题

产生原因：为了区分用户的单击和双击行为

```
安装：
npm install fastclick -S
引入（main.js）:
import FastClick from 'fastclick'
FastClick.attach(document.body)
```

# 2、首页功能思路

## 2.1、底端路由切换图片和文字添加样式

```
1、通过&.router-link-active实现路由颜色切换
2、通过$route.path和'/路由'对比切换图片
使用includes检测包含
<img :src="$route.path.includes('/home')?tabBarImgArr[0].selected:tabBarImgArr[0].normal" alt="">

tabBarImgArr: [
        {
          normal: require('@/common/img/icon_home.png'), selected: require('@/common/img/icon_home_selected.png')
        }]
```

## 2.2、首页头部可滑动tab--ly-tab

```
安装：
npm i ly-tab -S
使用：
import LyTab from 'ly-tab'
Vue.use(LyTab)

1、配置2级路由，设置默认首页
2、实现点击切换功能，lytab检测的事件是change，所以绑定用change事件
3、设置个二级路由数组通过传过来的索引切换路径
```

## 2.3、首页轮播图swiper

```
安装：
npm i swiper --save
Html结构，引入js，css，创建实例传入配置项
```

```
mounted（）{
 获取数据
 this.$store.dispatch('reqHomeCasual') actions里设置的方法
}

把数据存入state库里
import { mapState } from 'vuex'
computed: {
    ...mapState(['homecasual'])  state设置的接收数组
}

1、根据homecasual.length > 0判断是否显示轮播图
2、通过watch属性监听，获取属性后再进行swiper实例化
异步执行，$nextTick
  watch:{
    homecasual(){
      this.$nextTick(() => {
        // 创建swiper实例
        new Swiper ('.swiper-container', {
          autoplay: true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  }
```



## 2.4、热门导航HotNav

```
1、隐藏水平滚动条：需要做兼容处理否则不生效  &::-webkit-scrollbar
2、根据屏幕长度，热门导航区域长度，导航条容器长度，动态确定导航条填充容器的长度
3、根据内容滚动距离，内容容器长度，滚动条容器长度，确定滚动条滚动距离
4、做边界限定
```

# 3、数据库

## 3.1MySql安装

```
https://www.jianshu.com/p/c89bace95cfa
```

## 3.2、服务器搭建

```
1、全局安装express
npm install express-generator@4 -g
2、设置视图模板
express --view=ejs demo1
3、安装依赖
npm i
4、启动服务
set DEBUG=myapp & npm start
```

## 3.3、数据库和服务器链接

```
安装依赖
npm i mysql -S
```

# 4、Vuex

## 4.1、目录结构

![](./READMEIMG/store目录结构.png)

## 4.2、入口函数index配置

![](./READMEIMG/vuex入口函数index配置.png)

## 4.3、api中统一配置接口路径

![](./READMEIMG/api中统一配置接口获取数据.png)

## 4.4、mutations-type配置统一常量

![](./READMEIMG/mutations-type配置常量.png)

## 4.5、actions到mutations

![](./READMEIMG/actions到mutations.png)

## 4.6、mutations到state

![](./READMEIMG/mutations到state.png)

# 5、搜索页功能思路

## 5.1、滚动功能实现

```
1、安装better-scroll
npm i better-scroll -S
```

## 5.2、给左右区域设置滚动功能

```
 // 1、初始化滚动区域
    initBetterScroll(){
      // 左侧
       this.leftScroll = new BScroll('.shop_menu',{})
       // 右侧
       this.rightScroll = new BScroll('.shop_menu_show',{})
    }
    
 // 深度监视，确定数据加载完成再开始初始化 
   watch: {
    searchgoods(){
      this.$nextTick(()=>{
        this.initBetterScroll()
      })
    }
  }
```

## 5.3、实现右侧滚动，左侧区域切换功能

1、监听右侧滚动事件获取scrollY,**注意想要监听滚动事件，BScroll实例化时probeType：3**

```
 this.rightScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(pos.y)
        console.log(this.scrollY);
    })
```

2、获取右侧区域标题在页面中的位置rightLiTops

```
getRightLiTops(){
    let top = 0
    this.rightLiTops.push(top);
    let liArr =[...this.$refs.shopsList.getElementsByClassName('show_item')]
    // console.log(liArr);
    liArr.forEach(li=>{
    top += li.clientHeight
    this.rightLiTops.push(top)
    })
    console.log(this.rightLiTops);
}
```

3、通过scrollY对比rightLiTops用findIndex获取索引，通过索引值对比给左侧导航添加样式

```
  <li
      v-for="(item, idx) in searchgoods"
      :key = 'idx'
      class="menu_item"
      ref="menulist"
      :class="{current: currentIndex === idx}"
  >
 
 computed: {
    ...mapState(['searchgoods']),
    currentIndex(){
      const {scrollY, rightLiTops} = this
      return rightLiTops.findIndex((item, index)=>{
        return scrollY >= item && scrollY <= rightLiTops[index + 1]
      })
    }
  }
```

4、通过左侧点击传入索引值，右侧直接跳到相应位置

```
// 3、左侧点击右侧跳转
    clickLeftItem(idx){
      this.scrollY = this.rightLiTops[idx]
      this.rightScroll.scrollTo(0,-this.scrollY,300)
    }
```

5、通过右侧计算属性获取索引，左侧添加跳转

```
leftMenuScroll(idx){
      let curEl = this.$refs.menulist[idx]
      this.leftScroll.scrollToElement(curEl,300,0,true)
    }
```



## 5.2、bug解决

```
1、打印new BScroll(".shop_menu",{})
2、查看hasVerticalScroll是否为true
3、检查scrollerHeight 和 wrapperHeight大小
4、检查页面wrapper里面是否有多个同级div
```

