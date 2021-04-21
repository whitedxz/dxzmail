<template>
  <div class="Tab-barItem" @click="itemclick">
    <div v-if="isActive"><slot name="img"></slot></div>
    <div v-else><slot name="active-img"></slot></div>
    <div :class="{text_col:true}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
      default:'/home'
    }
  },
  data(){
    return{
      isActive: true
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.Tab-barItem{
  flex: 1;
  text-align: center;
  height:49px;
  font-size: 14px;
}
.Tab-barItem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.text_col{
  color: red;
}
</style>