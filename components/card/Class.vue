<script setup>
defineProps({
  image: String,
  level: String,
  method: String,
  totalSession: Number,
  title: String,
  desc: String,
});
</script>

<template>
  <div class="rounded-2xl bg-white shadow min-w-72">
    <img :src="image" height="164" width="100%" :alt="image" />
    <div class="p-4 pb-7 md:p-6">
      <div class="flex items-center space-x-1">
        <span
          class="bg-[#F1F6FF] py-1 px-2 text-xs md:text-sm text-textPrimary rounded-3xl"
          >{{ level }}</span
        >
        <span
          class="bg-[#FAF6E7] py-1 px-2 text-xs md:text-sm text-textPrimary rounded-3xl"
          >{{ method }}</span
        >
        <span
          class="bg-[#FAECEB] py-1 px-2 text-xs md:text-sm text-textPrimary rounded-3xl"
          >{{ totalSession }} Sesi</span
        >
      </div>
      <h4 class="mt-2 md:mt-3 font-bold text-textPrimary">{{ title }}</h4>
      <p class="mt-2 md:mt-3 text-textGray text-sm">{{ desc }}</p>
    </div>
  </div>
</template>
