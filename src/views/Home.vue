<template>
  <div>{{ $t('homePage') }}</div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo() {
    return { title: this.$t('homePage') }
  }
}
</script>
