<template>
  <div class="login-container">
    <div class="logo" />
    <div class="form">
      <h1>登录</h1>
      <el-card shadow="never" class="login-card">
        <!--登录表单-->
        <!-- el-form > el-form-item > el-input -->
        <el-form ref='form' :model='loginForm' :rules='loginRoles'>
          <el-form-item prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item prop='isAgree'>
            <el-checkbox v-model="loginForm.isAgree">
              用户平台使用协议
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button style="width:350px" type="primary" @click="login">登录</el-button>
          </el-form-item>
          <el-button @click="ajaxTest()">测试接口</el-button>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : "Login",
  data() {
    return {
      loginForm: {
        mobile: '',
        password: '',
        isAgree: false
      },
      // 校验规则
      loginRoles: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空',
            trigger: 'blur'
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 16,
            message: '密码长度为6-16位之间',
          }
        ],
        // required只能检测 null undefined ''
        isAgree: [
          {
            validator: (rule, value, callback) => {
              // rule校验规则
              // value 校验的值
              // callback 函数 - promise resolve reject
              // callback() callback(new Error(错误信息))
              value? callback() : callback(new Error('你必须勾选用户使用协议'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login() {
      // 点击登录完成表单校验
      this.$refs.form.validate((isOk)=>{
        if (isOk) {
          this.$store.dispatch('user/login', this.loginForm)
          this.$message.success('校验通过')
        }
      })
    },
    ajaxTest() {
      axios({
        url: 'https://heimahr.itheima.net/api/sys/login',
        method: 'post',
        data: {
          mobile: '13912345678',
          password: '123456'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: stretch;
  height: 100vh;
  .logo {
    flex: 3;
    background: rgba(38, 72, 176) url(../../assets/common/login_back.png)
      no-repeat center / cover;
    border-top-right-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 100px;
    .icon {
      background: url(../../assets/common/logo.png) no-repeat 70px center /
        contain;
      width: 300px;
      height: 50px;
      margin-bottom: 50px;
    }
    p {
      color: #fff;
      font-size: 18px;
      margin-top: 20px;
      width: 300px;
      text-align: center;
    }
  }
  .form {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 176px;
    .el-card {
      border: none;
      padding: 0;
    }
    h1 {
      padding-left: 20px;
      font-size: 24px;
    }
    .el-input {
      width: 350px;
      height: 44px;
      .el-input__inner {
        background: #f4f5fb;
      }
    }
    .el-checkbox {
      color:#606266;
    }
  }
}
</style>
