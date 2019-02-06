<template>
  <div>
    <app-header/>
    <app-section/>
    <app-footer/>
	</div>
</template>

<script>
import appHeader from '~/components/header'
import appFooter from '~/components/footer'
import appSection from '~/components/news/index'

export default {
  data () {
    return {}
  },
  components: {
    appHeader,
    appFooter,
    appSection
  }
}
</script>
