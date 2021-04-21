<template>
  <router-view></router-view>
  <div id="app">
<tabbar>
<TabBarItem path="/home">
  <template v-slot:img ><img src="./assets/image/forward.png"/></template>
  <template v-slot:active-img><img src="./assets/image/manfang.png"/></template>
  <template v-slot:text><div>首页</div></template>
</TabBarItem>
<TabBarItem path="/category">
  <template v-slot:img ><img src="./assets/image/forward.png"/></template>
  <template v-slot:active-img><img src="./assets/image/manfang.png"/></template>
  <template v-slot:text><div>分类</div></template>
</TabBarItem>
<TabBarItem path="/cart">
  <template v-slot:img ><img src="./assets/image/forward.png"/></template>
  <template v-slot:active-img><img src="./assets/image/manfang.png"/></template>
  <template v-slot:text><div>购物车</div></template>
</TabBarItem>
<TabBarItem path="profiles">
  <template v-slot:img ><img src="./assets/image/forward.png"/></template>
  <template v-slot:active-img><img src="./assets/image/manfang.png"/></template>
  <template v-slot:text><div>我的</div></template>
</TabBarItem>
</tabbar>
</div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    tabbar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
