<template>
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
</template>

<script>
import LabelInput from '@/components/LabelInput'
import LabelInputx2 from '@/components/LabelInputx2'
import LabelSelect from '@/components/LabelSelect'
import SearchButton from '@/components/SearchButton'
import ResetButton from '@/components/ResetButton'
import LbTable from '@/components/lb-table'
import { getTest } from '@/api/test'

export default {
  name: 'TinymceDemo',
  components: {
    LabelInput,
    LabelInputx2,
    LabelSelect,
    SearchButton,
    ResetButton,
    LbTable
  },
  data() {
    return {
      options: ['请选择', '数学', '化学', '语文'],
      tableData: {
        column: [
          {
            type: 'selection'
          },
          {
            prop: 'name',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'tname',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'position',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'inputtime',
            label: '录入时间'
          },
          {
            prop: 'op',
            label: '操作'
          }
        ],
        data: []
      }
    }
  },
  created() {
    const self = this
    const items = getTest().then(res => {
      // debugger;
      self.tableData.data = res.data.items
    })
    // console.log(items);
    // .data.items;
    // this.data.tableData.data = items;
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped>
* {
  font-size: 8px;
}
.row1 {
  padding-left: 15px;
  padding-top: 30px;
  width: 100%;
  display: flex;
  height: 60px;
}
.line {
  height: 2px;
  border-top: 1px solid #cbcacae8;
}
.row2 {
  width: 100%;
  display: flex;
  height: 80px;
}
.row3 {
  width: 100%;
  display: flex;
}
.lb-table {
  padding-left: 10px;
  width: 94%;
}
</style>

