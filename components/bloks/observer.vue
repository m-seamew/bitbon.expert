<template>
  <div class="observer"></div>
</template>

<script>
export default {
  data: () => ({
    observer: null
  }),
  mounted() {
    const options = {
    rootMargin: "0px",
    threshold: 1.0
    };
    
    this.observer = new IntersectionObserver( entries => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
          this.$emit("firstobserve");
          this.observer.unobserve(this.$el);
      }
    }, options);
    
    this.observer.observe(this.$el);
  },
   destroyed() {
    this.observer.disconnect();
  }
}
</script>