<script setup>
import { onClickOutside } from "@vueuse/core";

const availableInterests = [
  "Music",
  "Sports",
  "Coding",
  "Reading",
  "Traveling",
  "Gaming",
  "Photography",
  "Cooking",
  "Fitness",
  "Movies",
];

const selectedInterests = ref(["Coding", "Reading"]); // Example

const dropdownOpen = ref(false);

const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => {
  dropdownOpen.value = false;
});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const toggleInterest = (interest) => {
  const index = selectedInterests.value.indexOf(interest);
  if (index === -1 && selectedInterests.value.length < 3) {
    selectedInterests.value.push(interest);
    toggleDropdown();
  } else if (index !== -1) {
    selectedInterests.value.splice(index, 1);
    toggleDropdown();
  }
};

const removeInterest = (interest) => {
  selectedInterests.value = selectedInterests.value.filter(
    (i) => i !== interest
  );
};
</script>

<template>
  <div class="px-4 py-8 md:py-16">
    <h1 class="text-lg font-bold text-textPrimary md:hidden">Profile</h1>
    <div class="flex flex-col items-center mt-2">
      <img
        src="/images/default-profile.jpg"
        alt="default-profile"
        class="w-32 h-32 rounded-full border"
      />
      <div class="mt-8 flex flex-col space-y-2">
        <p class="font-semibold text-sm text-textPrimary">Informasi Pribadi</p>
        <div>
          <label for="fullname" class="text-textGray text-xs">Fullname</label>
          <input
            type="text"
            disabled
            value="Rendy Hutagalung"
            class="px-4 py-2 rounded-lg border text-sm bg-[#F1F6FF] w-full"
          />
        </div>
        <div>
          <label for="email" class="text-textGray text-xs">Email</label>
          <input
            type="text"
            disabled
            value="rendy.hutagalung@gmail.com"
            class="px-4 py-2 rounded-lg border text-sm bg-[#F1F6FF] w-full"
          />
        </div>
        <div>
          <label for="phone" class="text-textGray text-xs">Phone</label>
          <input
            type="text"
            disabled
            value="0877-8828-276"
            class="px-4 py-2 rounded-lg border text-sm bg-[#F1F6FF] w-full"
          />
        </div>
        <div>
          <label for="linkedin-url" class="text-textGray text-xs"
            >Linkedin URL</label
          >
          <input
            type="text"
            disabled
            value="-"
            class="px-4 py-2 rounded-lg border text-sm bg-[#F1F6FF] w-full"
          />
        </div>
      </div>
      <div class="mt-8 flex flex-col space-y-2 w-full md:w-[360px]">
        <p class="font-semibold text-sm text-textPrimary">Preferensi Pribadi</p>
        <label for="interests" class="text-textGray text-xs"
          >Bidang yang kamu minati</label
        >
        <div class="relative" ref="dropdownRef">
          <div
            class="w-full px-3 py-2 border rounded-lg cursor-pointer bg-[#F1F6FF]"
            @click="toggleDropdown"
          >
            <span
              v-if="selectedInterests.length === 0"
              class="text-textGray text-sm"
              >Pilih hingga 3 bidang</span
            >
            <span v-else class="text-gray-700 text-sm">
              {{ selectedInterests.join(", ") }}
            </span>
          </div>

          <div
            v-if="dropdownOpen"
            class="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-72 overflow-scroll"
          >
            <div v-for="interest in availableInterests" :key="interest">
              <button
                @click="toggleInterest(interest)"
                class="w-full text-left text-sm px-4 py-2 hover:bg-[#F1F6FF] flex justify-between"
                :class="
                  selectedInterests.includes(interest) ? 'bg-blue-100' : ''
                "
                :disabled="
                  !selectedInterests.includes(interest) &&
                  selectedInterests.length >= 3
                "
              >
                {{ interest }}
                <span
                  v-if="selectedInterests.includes(interest)"
                  class="text-blue-600"
                  >✔</span
                >
              </button>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="interest in selectedInterests"
              :key="interest"
              class="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {{ interest }}
              <button @click="removeInterest(interest)" class="ml-2 text-white">
                ✖
              </button>
            </span>
          </div>
        </div>
      </div>

      <button
        class="mt-10 bg-primary text-white py-2 text-sm font-semibold rounded-lg w-full md:w-[360px] shadow"
      >
        SIMPAN
      </button>
    </div>
  </div>
</template>
