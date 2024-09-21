<template>
  <div>
    <div class="switch">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="switchRoles" style="width: 300px;" placeholder="           请选择您的身份">
            <el-option label="游客" value="editor" />
            <el-option label="用户" value="admin" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
<style scoped>
.switch{
  margin: 0 0 0 70px;
  color: #fff;
}
.title{
  color: #fff;
  margin-top: 10%;
  text-align: center;
}
</style>