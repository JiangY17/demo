<template>
  <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
    <el-table-column v-for="(item,index) in editCfg" :prop="item.prop" :label="item.label" :key="index"></el-table-column>
    <el-table-column fixed="right" width="140">
      <template slot="header" slot-scope="{}">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
        <el-button type="text" size="small">
          <router-link :to="{path:'edit?id='+scope.$index}">编辑</router-link>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ListTable",

  props:{
    editCfg:Array,
    tableData:Array
  },

  data(){
    return{
      search:'',
    }
  },

  methods:{
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>