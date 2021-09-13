<template>
  <div id="App">
    <el-container>
      <el-header>
        <el-col :span="22">Header</el-col>
        <el-col :span="2">
<!--          <router-link to="/addList">-->
<!--            <el-button type="primary">添加</el-button>-->
<!--          </router-link>-->
        </el-col>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="0" class="el-menu-vertical-demo">
            <router-link :to=item.path v-for="(item,index) in aside" :key="index">
              <el-menu-item :index="index.toString()" >
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view ></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      that:this,
      aside:[
        {name:'导航一',path:'/one/ListTable'},
        {name:'导航二',path:'/two/ListTable'},
        {name:'导航三',path:'/three'},
        {name:'导航四',path:'/four'},
        {name:'导航五',path:'/five'},
      ]
    }
  },

  methods:{
  },

}
</script>

<style>
.el-header,.el-footer{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
.add{
  float: right;
}
</style>
