<template>
  <router-view :tableData="tableData" :that='that' :editCfg='editCfg' ></router-view>
<!--  <list-table :title="title" :tableData="tableData" />-->
</template>

<script>
// import ListTable from "../components/ListTable";
const radios = [{label:'男',value:'male'},{label:'女',value:'female'}]
export default {
  name: "one",

  components: {
    // ListTable
  },

  data(){
    return{
      that:this,
      editCfg:[ //表单项字段
        {label:'姓名',prop:'name',type:'input',width:'280px',change:data=>console.log(data)},
        {label:'性别',prop:'sex',type:'radio',radios:radios,width:'280px'},
        {label:'地址',prop:'address',type:'input',width:'280px'},
        {label:'电话',prop:'phone',type:'input',width:'280px'},
        {label:'公司',prop:'company',type:'input',width:'280px'},
        {label:'交互次数',prop:'num',type:'input',width:'280px'},
        {label:'日期',prop:'date',type:'date',width:'280px',change:data=>console.log(data)}
      ],
      tableData: [
        {
          date: '2021-05-03',
          name: '张三',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-07-04',
          name: '老吴',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-6-21',
          name: '张三',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-01-18',
          name: '老三',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-4-27',
          name: '小刘',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-03-11',
          name: '王五',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        },
        {
          date: '2021-08-29',
          name: '李四',
          sex: '男',
          address: '上海市浦东新区',
          phone:'17317629541',
          company:'上海星邮',
          num:7
        }
      ],
    }
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>