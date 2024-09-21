<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model="username" />
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model.trim="user.name" />
    </el-form-item>
    <el-form-item label="手机">
      <el-input v-model="phone" />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model.trim="user.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">保 存</el-button>
    </el-form-item>
    <el-divider></el-divider>
      <el-form-item prop="password" label="原 密 码：">
        <el-input
          :key="passwordType"
          v-model="form.initial"
          :type="passwordType"
          placeholder="请输入原密码"
          style="width: 200px;"
          title="输入原密码"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="password" label="新 密 码：">
        <el-input
          :key="passwordType2"
          v-model="form.new"
          :type="passwordType2"
          placeholder="请输入新密码"
          style="width: 200px;"
          pattern="[A-z][0-9]{12}"
          title="请输入26位大写字母或小写字母、数字的组合，不得少于8位，不得多于15位"
        />
        <span class="show-pwd2" @click="showPwd2">
          <svg-icon :icon-class="passwordType2 === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="password" label="确认密码：">
        <el-input
          :key="passwordType3"
          v-model="form.confirm"
          :type="passwordType3"
          placeholder="请再次输入新密码"
          style="width: 200px;"
          pattern="[A-z][0-9]{12}"
          title="请输入26位大写字母或小写字母、数字的组合，不得少于8位，不得多于15位"
        />
        <span class="show-pwd3" @click="showPwd3">
          <svg-icon :icon-class="passwordType3 === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="isChange">确认修改</el-button>
        <el-button @click="onCancel">取 消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: ''
        }
      }
    }
  },
  data() {
    return {
      form: {
        initial: '',
        new: '',
        confirm: ''
      },
      passwordType: 'password',
      passwordType2: 'password',
      passwordType3: 'password',
      username: 'visitor',
      phone: '1234567890'
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    showPwd2() {
      if (this.passwordType2 === 'password') {
        this.passwordType2 = ''
      } else {
        this.passwordType2 = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    showPwd3() {
      if (this.passwordType3 === 'password') {
        this.passwordType3 = ''
      } else {
        this.passwordType3 = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    isChange() {
      if(form.new!=form.confirm){
        this.$message('确认密码与新密码不一致!')
      } else {
        this.$message('修改密码成功!')
      }
    },
    onCancel() {
      this.$message({
        message: '已取消',
        type: 'warning'
      })
    },
    submit() {
      this.$message({
        message: '用户信息保存成功',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    user-select: none;
  }
  .show-pwd2 {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    user-select: none;
  }  
  .show-pwd3 {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    user-select: none;
  }

</style>