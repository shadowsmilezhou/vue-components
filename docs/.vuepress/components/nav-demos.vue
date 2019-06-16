<template>
  <div >
    <g-nav :selected.sync="selected" :vertical="true" >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-sub-nav name="hire">
        <template slot="title">招聘</template>
        <g-nav-item name="culture">精英团队</g-nav-item>
        <g-nav-item name="developers">实习生</g-nav-item>
      </g-sub-nav>
    </g-nav>

    <div style="margin:100px 0 ">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName" icon="desc" icon-position="right">竖向导航</g-button>
      </g-popover>
      <pre v-if="nameVisible"><code>{{name}}</code></pre>

    </div>

    <g-nav :selected.sync="selected" >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-sub-nav name="hire">
        <template slot="title">招聘</template>
        <g-nav-item name="culture">精英团队</g-nav-item>
        <g-nav-item name="developers">实习生</g-nav-item>
      </g-sub-nav>
    </g-nav>



    <div style="margin:100px 0">
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>查看代码</div>
        </template>
        <g-button style="border-color: black" @click="displayName2" icon="desc" icon-position="right">横向导航</g-button>
      </g-popover>
      <pre v-if="nameVisible2"><code>{{name1}}</code></pre>
    </div>


  </div>
</template>
<script>
    import GNav from '../../../src/g-nav/g-nav.vue'
    import GNavItem from '../../../src/g-nav/g-nav-item.vue'
    import GSubNav from '../../../src/g-nav/g-sub-nav.vue'
    import GButton from '../../../src/g-button/g-button'
    import GPopover from '../../../src/g-popover/g-popover'
    export default {
        name: "demo",
        components: {
            GNav,
            GNavItem,
            GSubNav,
            GButton,
            GPopover

        },
        methods:{
            displayName(){
                this.nameVisible = !this.nameVisible
            },
            displayName2(){
                this.nameVisible2 = !this.nameVisible2
            }
        },
        data () {
            return {
                nameVisible2:false,
                nameVisible:false,
                selected: 'culture',
                name:`
      <g-nav :selected.sync="selected" :vertical="true" >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-sub-nav name="hire">
        <template slot="title">招聘</template>
        <g-nav-item name="culture">精英团队</g-nav-item>
        <g-nav-item name="developers">实习生</g-nav-item>
      </g-sub-nav>
    </g-nav>


                `,
                name1:`
      <g-nav :selected.sync="selected" >
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>

      </g-sub-nav>
      <g-sub-nav name="hire">
        <template slot="title">招聘</template>
        <g-nav-item name="culture">精英团队</g-nav-item>
        <g-nav-item name="developers">实习生</g-nav-item>
      </g-sub-nav>
    </g-nav>

                `
            };
        },
    };
</script>

<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>