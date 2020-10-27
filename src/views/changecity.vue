<template>
  <div class="changecity">
    <!-- 顶部导航栏 -->
    <div class="topnavHeight">
      <topnav class="changecityTopnav">
        <div slot="left"><span>城市筛选</span></div>
        <div slot="right">
          <a href="javascript:void(0)">登录</a>/<a href="javascript:void(0)"
            >注册</a
          >
        </div>
      </topnav>
    </div>
    <!-- 内容区域 -->
    <div class="changecitycontent">
      <!-- 顶部定位城市部分 -->
      <div class="topLocation">
        <div class="topLocationTop">
          当前定位城市:<span>定位不准确时,请手动选择城市</span>
        </div>
        <div class="topLocationBottom">
          <p>{{ guessCityData.name }}</p>
          <img src="../assets/imger/jiantou.png" alt="" />
        </div>
      </div>
      <!-- 城市表格区域 -->
      <!-- -------- -->
      <!-- 热门城市区域 -->
      <div class="tableRally">
        <table frame="hsides" >
          <caption>
            热门城市
          </caption>
          <tr v-for="(k, index) in hotCityData" :key="index">
            <td v-for="(k0, index0) in k" :key="index0" @click="tableRallyFun(k0.id)">{{ k0.name }}</td>
          </tr>
        </table>
      </div>
      <!-- ABCDE..城市区域 -->
      <div class="tableRally" v-for="(k,index) in groupCityData" :key="index">
        <table frame="hsides" >
          <caption>{{index}}</caption>
          <tr v-for="(k0,index0) in k" :key="index0">
            <td v-for="(k1,index1) in k0" :key="index1" @click="tableRallyFun(k1.id)">{{k1.name}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// 组件
import topnav from "@/components/public/topnav";
// 网络请求
import { localCity } from "@/network/changecityNet";
export default {
  name: "changecity",
  components: {
    topnav,
  },
  data() {
    return {
      guessCityData: "",
      hotCityData: [],
      groupCityData: {},
    };
  },
  created() {
    // 请求网络部分
    localCity("guess").then((res) => {
      this.guessCityData = res.data;
    });
    localCity("hot").then((res) => {
      this.hotCityData = this.partArray(res.data, 4);
    });
    localCity("group").then((res) => {
      let objNew = this.partObject(res.data)
      for(let k in objNew){
        this.groupCityData[k] = this.partArray(objNew[k],4)
      }
    });
  },
  methods: {
    // 分开数组的封装
    partArray(arr, index) {
      let a = 0;
      let b = [];
      while (a < arr.length) {
        b.push(arr.slice(a, (a += index)));
      }
      return b;
    },
    // 对象的重新排序
    partObject(obj){
      let arryNew = Object.keys(obj).sort();
      let objNew = {};
      for(let k in arryNew){
        objNew[arryNew[k]] = obj[arryNew[k]]
      }
      return objNew
    },
    tableRallyFun(id){
      this.$router.push({name:'toCity',params:{id:id}})
    }
  },
};
</script>
<style scoped>
.changecity{
  width: 100%;
  background-color: #eeeeee;
}
.topnavHeight {
  height: 44px;
}
.changecityTopnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #3190e8;
  color: #ffffff;
}
.changecityTopnav span,
a {
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
}
.changecitycontent {
  box-sizing: border-box;
  width: 100%;
}
.topLocation {
  height: 90px;
  background: #eeeeee;
}
.topLocationTop {
  background-color: #ffffff;
  line-height: 44px;
  font-size: 15px;
  color: #777;
  border-bottom: 1px solid #cccccc;
  padding: 0 10px;
}
.topLocationTop span {
  display: inline-block;
  text-align: right;
  font-size: 12px;
  width: 70%;
  color: #aaaaaa;
}
.topLocationBottom {
  background-color: #ffffff;
  display: flex;
  line-height: 34px;
  height: 34px;
  padding: 0 10px;
  color: #3190e8;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 2px solid #dddddd;
}
.topLocationBottom p {
  width: 90%;
}
.topLocationBottom img {
  height: 34px;
  right: 0;
  text-align: right;
}
table {
  width: 100%;
  table-layout:fixed;
  border-collapse: collapse;
  text-align: center;
  border-bottom: 2px solid #dddddd;
  background-color: #ffffff;
  overflow: hidden;
}
table caption {
  text-align: left;
  padding: 5px 10px;
  font-size: 14px;
  color: #777;
  background-color: #ffffff;
  border-top: 2px solid #dddddd;
 
}
table tr td {
  cursor: pointer;
  color: #3190e8;
  font-size: 15px;
  line-height: 34px;
  border: 1px solid #cccccc;
  word-break:keep-all;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width: 25%;

}
.tableRally{
  padding-bottom: 8px;
}

</style>
