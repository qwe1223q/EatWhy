<template>
  <div class="toCity">
    <!-- 顶部导航栏 -->
    <div class="topCityTopnavH">
      <topnav class="topCityTopnav">
        <div slot="left"><img src="../assets/imger/left.png" alt="" /></div>
        <div slot="center"><p>123</p></div>
        <div slot="right" class="p0"><p>切换城市</p></div>
      </topnav>
    </div>
    <!-- 内容区域 -->
    <div class="topCityContent">
      <div class="topContent">
        <form action="" class="ContentForm">
          <input type="text"  placeholder="请输入要前往地址"/>
          <button>提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import topnav from "@/components/public/topnav";
export default {
  name: "toCity",
  components: {
    topnav,
  },
  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style scoped>
.topCityTopnavH {
  height: 44px;

}
.topnav {
  position: relative;
  line-height: 44px;
  height: 44px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #3190e8;
  color: #ffffff;
}
.topnav img {
  position: absolute;
  height: 24px;
  left: 15px;
  top: 10px;
}
.topnav p {
  font-weight: bold;
}
.topnav .p0 {
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
}
.topContent{
  
}
</style>
