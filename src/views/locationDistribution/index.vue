<template>
  <div class="locationDistribution-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userlocationDistribution from './user'
import visitorlocationDistribution from './visitor'

export default {
  name: 'locationDistribution',
  components: { userlocationDistribution, visitorlocationDistribution },
  data() {
    return {
      currentRole: 'userlocationDistribution'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'visitorlocationDistribution'
    }
  }
}
</script>
