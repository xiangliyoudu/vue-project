<template>
  <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "序号",
          key: "id",
          width: "65px"
        },
        {
          title: "产品类型",
          key: "type"
        },
        {
          title: "产品图片",
          key: "picture",
          width: "100px",
          render(h) {
            return h("img", {
              attrs: {
                src: "../../../../static/img/a.png"
              },
              style: {
                width: "100px",
                height: "100px"
              }
            });
          }
        },
        {
          title: "产品名称",
          key: "pname"
        },
        {
          title: "产品规格",
          key: "spec"
        },
        {
          title: "进货总量",
          key: "totalNumber"
        },
        {
          title: "进货单价",
          key: "price"
        },
        {
          title: "进货总价",
          key: "totalPrice"
        },
        {
          title: "运费",
          key: "fee"
        },
        {
          title: "售价",
          key: "sellPrice"
        },
        {
          title: "促销价",
          key: "salePrice"
        },
        {
          title: "优惠活动",
          key: "activities"
        },
        {
          title: "剩余库存",
          key: "stock"
        },
        {
          title: "仓库",
          key: "storehouse"
        },
        {
          title: "备注",
          key: "remarks"
        }
      ],
      data1: []
    };
  },
  created: function() {
    // rest资源
    var url = "/api/good/listAll";
    // 通过http获取资源
    this.$http.get(url).then(data => {
      // (data)=>:箭头函数
      data = data.body;
      var usersArray = [];

      for (let key in data) {
        usersArray.push(data[key]); //遍历data.body对象中的数据，push到临时数组中
      }
      this.data1 = usersArray;
    });
  }
};
</script>
<style scoped>
</style>