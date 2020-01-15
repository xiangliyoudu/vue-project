<template>
  <Form :model="good" :label-width="80" inline class="goodAdd" ref="formValidate" :rules="ruleValidate"
        enctype="multipart/form-data">
    <FormItem label="产品类型" prop="type">
      <Input type="text" v-model="good.type" placeholder="产品类型"/>
    </FormItem>
    <!-- <FormItem label="产品图片">
      <Input type="text" v-model="good.picture" placeholder="产品图片" />
    </FormItem> -->
    <FormItem label="产品名称" prop="pname">
      <Input type="text" v-model="good.pname" placeholder="产品名称"/>
    </FormItem>
    <FormItem label="产品规格" prop="spec">
      <Input type="text" v-model="good.spec" placeholder="产品规格"/>
    </FormItem>
    <FormItem label="进货总量" prop="totalNumber">
      <InputNumber v-model="good.totalNumber" :min="0" placeholder="进货总量" class="number"/>
    </FormItem>
    <FormItem label="进货单价" prop="price">
      <InputNumber type="number" v-model="good.price" :min="0" placeholder="进货单价" class="number"/>
    </FormItem>
    <FormItem label="进货总价" prop="totalPrice">
      <InputNumber type="number" v-model="good.totalPrice" :min="0" placeholder="进货总价" class="number"/>
    </FormItem>
    <FormItem label="运费" prop="fee">
      <InputNumber type="number" v-model="good.fee" :min="0" placeholder="运费" class="number"/>
    </FormItem>
    <FormItem label="售价" prop="sellPrice">
      <InputNumber type="number" v-model="good.sellPrice" :min="0" placeholder="售价" class="number"/>
    </FormItem>
    <FormItem label="促销价" prop="salePrice">
      <InputNumber type="number" v-model="good.salePrice" :min="0" placeholder="促销价" class="number"/>
    </FormItem>
    <FormItem label="优惠活动" prop="activities">
      <Input type="text" v-model="good.activities" placeholder="优惠活动"/>
    </FormItem>
    <FormItem label="剩余库存" prop="stock">
      <InputNumber type="number" v-model="good.stock" :min="0" placeholder="剩余库存" class="number"/>
    </FormItem>
    <FormItem label="备注" prop="remarks">
      <Input type="text" v-model="good.remarks" placeholder="备注"/>
    </FormItem>
    <FormItem label="仓库" prop="storehouse">
      <Input type="text" v-model="good.storehouse" placeholder="仓库"/>
    </FormItem>
    <FormItem label="产品图片">
      <Upload :before-upload="handleUpload" action="/api/good/uploadPic">
        <Button icon="ios-cloud-upload-outline" class="number">{{fileShortName}}</Button>
      </Upload>
<!--            <span v-if="file !== null">-->
<!--              {{ file.name }}-->
<!--              <Button type="text" @click="upload" :loading="loadingStatus">-->
<!--                {{ loadingStatus ? 'Uploading' : '点击上传' }}-->
<!--              </Button>-->
<!--            </span>-->
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
    </FormItem>
  </Form>
</template>
<script>
    export default {
        data() {
            return {
                good: {
                    type: "",
                    picture: '',
                    // picFile: null,
                    pname: "",
                    spec: "",
                    totalNumber: 0,
                    price: 0.0,
                    totalPrice: 0.0,
                    fee: 0.0,
                    sellPrice: 0.0,
                    salePrice: 0.0,
                    activities: "",
                    stock: 0,
                    remarks: "",
                    storehouse: ""
                },
                ruleValidate: {
                    type: [
                        {
                            required: true,
                            message: "产品类型不能为空",
                            trigger: "blur"
                        }
                    ],
                    pname: [
                        {
                            required: true,
                            message: "产品名称不能为空",
                            trigger: "blur"
                        }
                    ],
                    spec: [
                        {
                            required: true,
                            message: "产品规格不能为空",
                            trigger: "blur"
                        }
                    ],
                    totalNumber: [
                        {required: true}
                    ],

                },
                file: null,
                loadingStatus: false,

            };
        },
        computed: {
            fileShortName: function () {
                let shortName = '选择文件';

                if (this.file) {
                    let fName = this.file.name;
                    if (fName.length > 10) {
                        shortName = fName.substring(0, 4) + '...' + fName.substring(fName.length - 6);
                    } else {
                        shortName = this.file.name;
                    }
                }
                return shortName;
            },
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        let url = "/api/good/addOne";
                        // 包含文件的表单对象
                        let formData = new FormData();
                        formData.append("picFile", this.file);
                        formData.append("type", this.good.type);
                        formData.append("picture", this.good.picture);
                        formData.append("pname", this.good.pname);
                        formData.append("spec", this.good.spec);
                        formData.append("totalNumber", this.good.totalNumber);
                        formData.append("price", this.good.price);
                        formData.append("totalPrice", this.good.totalPrice);
                        formData.append("fee", this.good.fee);
                        formData.append("sellPrice", this.good.sellPrice);
                        formData.append("salePrice", this.good.salePrice);
                        formData.append("activities", this.good.activities);
                        formData.append("stock", this.good.stock);
                        formData.append("remarks", this.good.remarks);
                        formData.append("storehouse", this.good.storehouse);

                        // 通过http获取资源
                        this.$http.post(url, formData).then(res => {
                            let body = res.body;
                            if (body) {
                                this.$Message.success("添加成功!");
                                this.$router.push({path: '/'});
                            } else {
                                this.$Message.success("添加失败!");
                            }
                        }).catch(err => {
                            this.$Message.error('上传失败');
                        });
                    } else {
                        this.$Message.error("输入参数有误!");
                    }
                });
            },
            handleReset(name) {
                this.$refs[name].resetFields();
                this.file = null;
            },
            handleUpload(file) {
                // 允许上传的图片类型
                let fileTypes = ['png', 'jpeg', 'jpg', 'bmp', 'gif'];
                // 上传文件的类型
                let fileType = file.type;
                fileType = fileType.substring(fileType.indexOf('/') + 1);
                // 判断图片类型, 进行处理
                if (!fileTypes.includes(fileType)) {
                    this.file = null;
                    this.$Message.warning('图片格式不是 png jpeg jpg bmp gif');
                } else {
                    this.file = file;
                    this.good.picture = file.name;
                }
                return false;
            },
            // 手动上传文件
            upload() {
                let file = this.file;
                // console.log(file);
                if (file) {
                    let formData = new FormData();
                    formData.append("file", file);
                    this.loadingStatus = true;
                    let url = "/api/good/uploadPic";
                    this.$http.post(url, formData).then(data => {
                        this.loadingStatus = false;
                    }).catch(err => {
                        this.loadingStatus = false;
                        this.$Message.error('上传失败');
                    });
                }
            },

        }
    };
</script>
<style scoped>
  .goodAdd {
    width: 60%;
    margin: 10px auto;
  }

  .number {
    width: 186px;
  }
</style>
