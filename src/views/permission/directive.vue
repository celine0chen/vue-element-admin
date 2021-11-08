<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div class="list" v-permission="['editor']">
      <div>
        <div class="row1">导师列表</div>
        <div class="line" />

        <div class="row2">
          <label-input label-name="昵称" input-name="昵称 " />
          <LabelSelect label-name="所属学科" :options="options" />
          <label-input label-name="职位" input-name="职位 " />
          <label-inputx2 label-name="工作年限：" input-name="起" input-name2="止" />

          <label-input label-name="手机号" input-name="手机号" />
          <SearchButton name="搜索" />
          <ResetButton name="重置" />
        </div>
        <div class="row3">
          <lb-table
            :column="tableData.column"
            :data="tableData.data"
            :row-class-name="rowClassName"
            height="300"
            border
          />
        </div>
      </div>
    </div>
    <div class="form" v-permission="['admin']">
      <div>
        <div class="row1">
          <svalidate #default="{ validate}" :rules="textRules" :value="value1">
            活动名称
            <textarea v-model="value1" @blur="validate" />
          </svalidate>
          <!-- <svalidate #default="{ validate}" :rules="rules" :value="value">
        <el-input v-model="value" @blur="validate"></el-input>
          -->
        </div>

        <div class="row2">
          <svalidate #default="{ validate}" :rules="textRules" :value="value2">
            活动区域
            <el-select v-model="value2" placeholder="请选择" @blur="validate">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </svalidate>
        </div>
        <div class="row3">
          <svalidate #default="{ validate }" :rules="empRules" :value="value3">
            <div class="block">
              <span class="demonstration">活动时间</span>
              <el-date-picker
                v-model="value3"
                type="datetime"
                placeholder="选择日期时间"
                @blur="validate"
              />
            </div>
          </svalidate>
        </div>
        <div class="row4">
          <svalidate #default="{ validate}" :rules="textRules" :value="value4">
            即时配送
            <el-switch
              v-model="value4"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @blur="validate"
            />
          </svalidate>
        </div>
        <div class="row5">
          <svalidate #default="{ validate }" :value="value5" :rules="textRules">
            活动性质
            <el-checkbox-group v-model="value5" @change="validate">
              <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
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
            <textarea v-model="value7" @blur="validate" />
          </svalidate>
        </div>
        <ResetButton name="提交" />
      </div>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js"; // 权限判断指令
import checkPermission from "@/utils/permission"; // 权限判断函数
import SwitchRoles from "./components/SwitchRoles";
import LabelInput from "@/components/LabelInput";
import LabelInputx2 from "@/components/LabelInputx2";
import LabelSelect from "@/components/LabelSelect";
import SearchButton from "@/components/SearchButton";
import ResetButton from "@/components/ResetButton";
import LbTable from "@/components/lb-table";
import { getTest } from "@/api/test";
import svalidate from "@/views/renderless/svalidate.vue";

const cityOptions = [
  "美食/餐厅线上活动",
  "地推活动",
  "线下主题活动",
  "单纯品牌曝光"
];
export default {
  name: "TinymceDemo",
  components: {
    LabelInput,
    LabelInputx2,
    LabelSelect,
    SearchButton,
    ResetButton,
    LbTable,
    SwitchRoles,
    svalidate
  },
  directives: { permission },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
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
      radio: null,
      key: 1, // 为了能每次切换权限的时候重新初始化指令
      options: ["请选择", "数学", "化学", "语文"],
      tableData: {
        column: [
          {
            type: "selection"
          },
          {
            prop: "name",
            label: "昵称"
          },
          {
            prop: "phone",
            label: "手机号"
          },
          {
            prop: "tname",
            label: "真实姓名"
          },
          {
            prop: "subject",
            label: "所属学科"
          },
          {
            prop: "position",
            label: "职位"
          },
          {
            prop: "year",
            label: "工作年限"
          },
          {
            prop: "inputtime",
            label: "录入时间"
          },
          {
            prop: "op",
            label: "操作"
          }
        ],
        data: []
      }
    };
  },
  created() {
    const self = this;
    const items = getTest().then(res => {
      // debugger;
      self.tableData.data = res.data.items;
    });
    // console.log(items);
    // .data.items;
    // this.data.tableData.data = items;
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    checkPermission,
    handleRolesChange() {
      this.key++;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
* {
  font-size: 8px;
}
.list .row1 {
  padding-left: 15px;
  padding-top: 30px;
  width: 100%;
  display: flex;
  height: 60px;
}
.list .line {
  height: 2px;
  border-top: 1px solid #cbcacae8;
}
.list .row2 {
  width: 100%;
  display: flex;
  height: 80px;
}
.list .row3 {
  width: 100%;
  display: flex;
}
.list .lb-table {
  padding-left: 10px;
  width: 94%;
}
.form .row1,
.form .row2,
.form .row3,
.form .row4,
.form .row5,
.form .row6,
.form .row7 {
  font-size: 8px;
  padding-top: 20px;
  padding-left: 30px;
  width: 500px;
  height: 80px;
}
</style>

