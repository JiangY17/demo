<template>
  <router-view :editCfg="editCfg" :tableData="tableData"></router-view>
</template>

<script>
// import ListTable from "../components/ListTable";
const options = [{label:'已分配',value:'assigned'},{label:'未分配',value:'unassigned'}]
export default {
  name: "Two",
  // components: {ListTable},
  data(){
    return{
      editCfg:[
        {label:'微信昵称',prop:'wechatName',type:'input',width:'280px',change:data=>console.log(data)},
        {label:'姓名',prop:'name',type:'input',width:'280px'},
        {label:'邮箱地址',prop:'mailbox',type:'input',width:'280px'},
        {label:'手机号码',prop:'phone',type:'input',width:'280px'},
        {label:'线索状态',prop:'cueStatus',type:'select',options:options,width:'280px'},
        {label:'来源',prop:'source',type:'input',width:'280px'},
        {label:'创建时间',prop:'date',type:'date',width:'280px'},
      ],
      tableData: [
        {
          wechatName: '初心',
          name: 'Cici',
          mailbox: '5979912@qq.com',
          phone:'17700001111',
          cueStatus:'未分配',
          source:'直接访问',
          date:'2021/09/10'
        },
        {
          wechatName: '初心',
          name: 'Cici',
          mailbox: '5909912@qq.com',
          phone:'17700001111',
          cueStatus:'未分配',
          source:'直接访问',
          date:'2021/09/10'
        },
        {
          wechatName: '初心',
          name: 'Cici',
          mailbox: '5979912@qq.com',
          phone:'17700001111',
          cueStatus:'未分配',
          source:'直接访问',
          date:'2021/09/10'
        },
        {
          wechatName: '初心',
          name: 'Cici',
          mailbox: '5979912@qq.com',
          phone:'17700001111',
          cueStatus:'未分配',
          source:'直接访问',
          date:'2021/09/10'
        },
        {
          wechatName: '初心',
          name: 'Cici',
          mailbox: '5979912@qq.com',
          phone:'17700001111',
          cueStatus:'未分配',
          source:'直接访问',
          date:'2021/09/10'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>