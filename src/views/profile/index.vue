<template>
  <div class="profile-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userprofile from './user'
import visitorprofile from './visitor'

export default {
  name: 'profile',
  components: { userprofile, visitorprofile },
  data() {
    return {
      currentRole: 'userprofile'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'visitorprofile'
    }
  }
}
</script>
