<template>
  <div class="economicImpact-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import usereconomicImpact from './user'
import visitoreconomicImpact from './visitor'

export default {
  name: 'economicImpact',
  components: { usereconomicImpact, visitoreconomicImpact },
  data() {
    return {
      currentRole: 'usereconomicImpact'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'visitoreconomicImpact'
    }
  }
}
</script>
