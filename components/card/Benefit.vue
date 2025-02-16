<script setup>
defineProps({
  image: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div
    class="p-4 pb-6 md:p-6 bg-[#F1F6FF] rounded-xl md:rounded-3xl flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-6 min-w-80"
  >
    <img :src="image" :alt="image" class="w-16 h-16 md:w-20 md:h-20" />
    <div>
      <h4
        class="text-sm md:text-base font-semibold md:font-bold text-textPrimary"
      >
        {{ title }}
      </h4>
      <p class="mt-1 md:mt-2 text-textGray text-sm">{{ desc }}</p>
    </div>
  </div>
</template>
