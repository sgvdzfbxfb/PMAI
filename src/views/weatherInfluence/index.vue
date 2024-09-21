<template>
  <div class="weatherInfluence-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userweatherInfluence from './user'
import visitorweatherInfluence from './visitor'

export default {
  name: 'weatherInfluence',
  components: { userweatherInfluence, visitorweatherInfluence },
  data() {
    return {
      currentRole: 'userweatherInfluence'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'visitorweatherInfluence'
    }
  }
}
</script>
