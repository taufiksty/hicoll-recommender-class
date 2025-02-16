<script setup>
defineProps({
  title: String,
  desc: String,
});

const isOpen = ref(false);
</script>

<template>
  <div
    class="bg-[#F1F6FF] rounded-2xl p-4 pt-6 md:py-5 md:px-7 cursor-pointer md:flex md:justify-between md:gap-10"
    @click="isOpen = !isOpen"
  >
    <div>
      <h3 class="font-semibold text-sm md:text-base">{{ title }}</h3>
      <p
        v-if="isOpen"
        class="mt-2 md:mt-4 text-sm md:text-base text-justify text-textGray"
      >
        {{ desc }}
      </p>
    </div>
    <div class="flex justify-center">
      <Icon
        :name="`meteor-icons:${isOpen ? 'chevron-up' : 'chevron-down'}`"
        style="width: 24px; height: 24px"
        class="cursor-pointer mt-4 md:mt-0 text-textPrimary"
      />
    </div>
  </div>
</template>
