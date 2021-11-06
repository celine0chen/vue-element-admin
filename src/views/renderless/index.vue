<template>
  <div>
    <div class="row1">
      <svalidate #default="{ validate}" :rules="textRules" :value="value1">
        活动名称
        <textarea v-model="value1" @blur="validate"></textarea>
      </svalidate>
      <!-- <svalidate #default="{ validate}" :rules="rules" :value="value">
        <el-input v-model="value" @blur="validate"></el-input>
      -->
    </div>

    <div class="row2">
      <svalidate #default="{ validate}" :rules="textRules" :value="value2">
        活动区域
        <el-select v-model="value2" @blur="validate" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </svalidate>
    </div>
    <div class="row3">
      <svalidate #default="{ validate }" :rules="empRules" :value="value3">
        <div class="block">
          <span class="demonstration">活动时间</span>
          <el-date-picker v-model="value3" @blur="validate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </svalidate>
    </div>
    <div class="row4">
      <svalidate #default="{ validate}" :rules="textRules" :value="value4">
        即时配送
        <el-switch
          v-model="value4"
          @blur="validate"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </svalidate>
    </div>
    <div class="row5">
      <svalidate #default="{ validate }" :value="value5" :rules="textRules">
        活动性质
        <el-checkbox-group v-model="value5" @change="validate">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </svalidate>
    </div>
    <div class="row6">
      <svalidate #default="{ validate }" :value="value6" :rules="textRules">
        活动性质
        <el-radio v-model="radio" label="1">线上品牌赞助</el-radio>
        <el-radio v-model="radio" label="2">线下场地免费</el-radio>
      </svalidate>
    </div>
    <div class="row7">
      <svalidate #default="{ validate }" :rules="textRules" :value="value7">
        活动形式
        <textarea v-model="value7" @blur="validate"></textarea>
      </svalidate>
    </div>
    <ResetButton name="提交"></ResetButton>
  </div>
</template>

<script>
import svalidate from "./svalidate.vue";
import ResetButton from "@/components/ResetButton";

const cityOptions = [
  "美食/餐厅线上活动",
  "地推活动",
  "线下主题活动",
  "单纯品牌曝光"
];
export default {
  components: {
    svalidate,
    ResetButton
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value7: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value);
          },
          message: "请输入一个数字"
        }
      ],
      textRules: [
        {
          test: function(value) {
            return value;
          },
          message: "请输入一个非空的值"
        }
      ],
      empRules: [
        {
          test: function(value) {
            return value;
          },
          message: "请选择选项"
        }
      ],
      value5: [],
      cities: cityOptions,
      radio: null
    };
  }
};
</script>

<style lang="scss" scoped>
.row1,
.row2,
.row3,
.row4,
.row5,
.row6,
.row7 {
  font-size: 8px;
  padding-top: 20px;
  padding-left: 30px;
  width: 500px;
  height: 80px;
}
</style>