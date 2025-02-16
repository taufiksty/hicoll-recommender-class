<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="px-2 md:px-40 md:py-4 bg-primary">
    <div class="flex justify-between items-center shadow md:shadow-none">
      <div class="flex items-center">
        <img src="/images/logo.png" alt="logo" width="50" height="50" />
        <h1 class="text-white font-bold text-lg md:text-xl">HiColleagues</h1>
      </div>
      <div>
        <div class="hidden md:block space-x-8">
          <NuxtLink class="text-white cursor-pointer text-lg hover:underline">
            Public Training
          </NuxtLink>
          <NuxtLink class="text-white cursor-pointer text-lg hover:underline">
            Profile
          </NuxtLink>
          <NuxtLink
            class="text-white font-semibold cursor-pointer text-lg p-3 rounded-lg bg-red-500"
          >
            Keluar
          </NuxtLink>
        </div>
        <Icon
          name="meteor-icons:bars"
          style="color: white; width: 24px; height: 24px"
          class="md:hidden cursor-pointer"
          @click="toggleMenu"
        />
      </div>
    </div>

    <div v-if="isMenuOpen" class="my-2 flex flex-col justify-between">
      <NuxtLink class="text-white cursor-pointer text-sm py-2 hover:underline">
        Public Training
      </NuxtLink>
      <NuxtLink class="text-white cursor-pointer text-sm py-2 hover:underline">
        Profile
      </NuxtLink>
      <NuxtLink class="text-white cursor-pointer text-sm py-2 hover:underline">
        Keluar
      </NuxtLink>
    </div>
  </nav>
</template>
