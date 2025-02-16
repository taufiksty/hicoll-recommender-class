<script setup>
defineProps({
  image: String,
  title: String,
});
</script>

<template>
  <div
    class="min-w-72 bg-[#F1F6FF] rounded-xl p-4 cursor-pointer flex items-center justify-between"
  >
    <div class="flex flex-col space-y-4">
      <img :src="image" alt="image" width="56" height="56" />
      <h3 class="text-textPrimary font-bold text-sm md:text-base">
        {{ title }}
      </h3>
    </div>
    <Icon
      name="meteor-icons:chevron-right"
      style="width: 24px; height: 24px"
      class="text-textGray"
    />
  </div>
</template>
