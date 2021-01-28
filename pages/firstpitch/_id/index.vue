<template>
  <div>    
  </div>
</template>

<script>
export default {
  beforeCreate() {
        this.$store.dispatch('slug/changeSlug', this.$route.params.id);
        const text = this.$route.path;
        const path = text.replace(`${'/' + this.$route.params.id}`, '');
        this.$router.push ({path: `${path}`}); 
  }
}
</script>

<style>
</style>