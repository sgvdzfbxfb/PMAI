<template>
  <div class="timeDistribution-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import usertimeDistribution from './user'
import visitortimeDistribution from './visitor'

export default {
  name: 'timeDistribution',
  components: { usertimeDistribution, visitortimeDistribution },
  data() {
    return {
      currentRole: 'usertimeDistribution'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'visitortimeDistribution'
    }
  }
}
</script>
