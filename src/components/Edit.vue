<template>
  <div style="width: 100%;background-color: white;margin: 20px 0;padding: 20px 0">
    <el-form ref='editForm' :size="size" inline :label-width="labelWidth" :model="editData">
      <el-form-item v-for='item in editCfg' :label="item.label" :prop='item.prop' :key="item.label"  >
        <!-- 输入框 -->
        <el-input v-if="item.type==='input'" v-model="editData[item.prop]"
                  @change="item.change && item.change(editData[item.prop])"
                  :disabled="item.disabled && item.disabled(editData)"
                  :style="{width:item.width}"></el-input>
        <!-- 文本域 -->
        <el-input v-if="item.type==='textarea'" type="textarea"
                  :disabled="item.disabled && item.disabled(editData)"
                  @change="item.change && item.change(editData[item.prop])"
                  v-model="editData[item.prop]"  :style="{width:item.width}"></el-input>
        <!-- 下拉框 -->
        <el-select v-if="item.type==='select'" v-model="editData[item.prop]"
                   @change="item.change && item.change(editData[item.prop])"
                   :disabled="item.disabled && item.disabled(editData)" :style="{'width':item.width}">
          <el-option v-for="op in item.options" :label="op.label" :value="op.value" :key="op.value"></el-option>
        </el-select>
        <!-- 单选 -->
        <el-radio-group v-if="item.type==='radio'" v-model="editData[item.prop]"
                        @change="item.change && item.change(editData[item.prop])"
                        :disabled="item.disabled && item.disabled(editData)" :style="{width:item.width,'text-align':'left'}">
          <el-radio v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio>
        </el-radio-group>
        <!-- 单选按钮 -->
        <el-radio-group v-if="item.type==='radioButton'" v-model="editData[item.prop]"
                        @change="item.change && item.change(editData[item.prop])"
                        :disabled="item.disabled && item.disabled(editData)">
          <el-radio-button v-for="ra in item.radios" :label="ra.value" :key="ra.value">{{ra.label}}</el-radio-button>
        </el-radio-group>
        <!-- 复选框 -->
        <el-checkbox-group v-if="item.type==='checkbox'" v-model="editData[item.prop]"
                           @change="item.change && item.change(editData[item.prop])"
                           :disabled="item.disabled && item.disabled(editData)">
          <el-checkbox v-for="ch in item.checkboxs" :label="ch.value" :key='ch.value'>{{ch.label}}</el-checkbox>
        </el-checkbox-group>
        <!-- 日期 -->
        <el-date-picker v-if="item.type==='date'" value-format="yyyy-MM-dd" v-model="editData[item.prop]"
                        @change="item.change && item.change(editData[item.prop])"
                        :disabled="item.disabled && item.disabled(editData)" :style="{width:item.width}"></el-date-picker>
        <!-- 时间 -->
        <el-time-select v-if="item.type==='time'" v-model="editData[item.prop]" type=''
                        @change="item.change && item.change(editData[item.prop])"
                        :disabled="item.disabled && item.disabled(editData)"></el-time-select>
        <!-- 日期时间 -->
        <el-date-picker v-if="item.type==='dateTime'" type='datetime' v-model="editData[item.prop]"
                        @change="item.change && item.change(editData[item.prop])"
                        :disabled="item.disable && item.disable(editData[item.prop])"></el-date-picker>
        <!-- 滑块 -->
        <!-- <el-slider v-if="item.type==='Slider'" v-model="editData[item.prop]"></el-slider> -->
        <!-- 开关 -->
        <el-switch v-if="item.type==='switch'" v-model="editData[item.prop]"
                   @change="item.change && item.change(editData[item.prop])"
                   :disabled="item.disabled && item.disabled(editData)"></el-switch>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitForm('editForm')">
          <router-link to="listTable">保存</router-link>
        </el-button>
        <el-button @click="resetForm('editForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>

<!--<template>-->
<!--  <div style="width: 100%;background-color: white">-->
<!--    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--      <el-form-item label="活动时间" required>-->
<!--        <el-col :span="11">-->
<!--          <el-form-item prop="date">-->
<!--            <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="活动名称" prop="name">-->
<!--        <el-input v-model="ruleForm.name"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="地址" prop="address">-->
<!--        <el-input v-model="ruleForm.address"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="电话" prop="phone">-->
<!--        <el-input v-model="ruleForm.phone"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="公司" prop="company">-->
<!--        <el-input v-model="ruleForm.company"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="交互次数" prop="num">-->
<!--        <el-input v-model="ruleForm.num"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item >-->
<!--        <el-button type="primary" @click="submitForm('ruleForm')">-->
<!--          <router-link to="listTable">保存</router-link>-->
<!--        </el-button>-->
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: "edit",

  props:{
    labelWidth:{
      type:String,
      default:'100px'
    },
    size:{
      type:String,
      default:'mini'
    },
    editCfg:{
      type:Array,
      default:()=>[]
    },
    tableData:{
      type:Array,
      default:()=>[]
    }
  },

  data() {
    return {
      that:this,
      editData:{}
    }
  },

  methods: {
    submitForm(editForm) {
      this.$refs[editForm].validate((valid) => {
        if (valid) {
          this.$emit('add',this.ruleForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },

  mounted() {
    if(this.$route.query.id){
      this.editData = this.tableData[this.$route.query.id]
    }
  }
}
</script>

<style scoped>
.el-form{
  width: 460px;
  padding: 10px;
}
</style>