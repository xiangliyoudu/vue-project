<template>
  <Table :columns="columns1" :data="data1">
    <template slot-scope="{ row, index }" slot="action">
      <Button type="error" size="small" @click="remove(row, index)">删除</Button>
      <Modal
        :mask=true
        :mask-closable=true
        v-model="modal1"
        title="商品删除"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>确认删除？</p>
      </Modal>
    </template>
  </Table>
</template>
<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: '序号',
                        type: 'index',
                        width: 80,
                        align: 'center'
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
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data1: [],
                modal1: false,
                deleteId: -1,
            };
        },
        created: function () {
            this.listData();
        },
        methods: {
            // 加载数据
            listData() {
                // rest资源
                let url = "/api/good/listAll";
                // 通过http获取资源
                this.$http.get(url).then(data => {
                    // (data)=>:箭头函数
                    data = data.body;
                    let usersArray = [];

                    for (let key in data) {
                        usersArray.push(data[key]); //遍历data.body对象中的数据，push到临时数组中
                    }
                    this.data1 = usersArray;
                });
            },
            // 删除
            deleteOne(id) {
                // console.log(id);
                let url = '/api/good/deleteOne';
                let params = {id: id};
                this.$http.delete(url, {params: params}).then(res => {
                    // console.log(res);
                    if (res && res.body > 0) {
                        this.$Message.success('删除成功');
                        this.listData();
                    } else {
                        this.$Message.error('删除失败');
                    }
                }).catch(err => {
                    this.$Message.error('删除失败');
                });
            },
            // 删除模态框
            remove(row, index) {
                this.deleteId = row.id;
                this.modal1 = true;

            },
            // 模态框确认
            ok() {
                this.deleteOne(this.deleteId);
                this.deleteId = -1;
            },
            // 模态框取消
            cancel() {
                this.deleteId = -1;
            }
        },

    };
</script>
<style scoped>
</style>
