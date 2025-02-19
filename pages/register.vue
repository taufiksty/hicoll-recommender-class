<script setup>
import { useAuthStore } from "~/stores/auth";

definePageMeta({
  layout: false,
});

const inputRegister = ref({
  fullname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
});

const authStore = useAuthStore();
const router = useRouter();

const handleSubmit = async () => {
  await authStore.register(inputRegister.value);
  if (authStore.error) {
    console.log(authStore.error);
    return;
  }
  router.push("/");
};
</script>

<template>
  <div class="bg-[#F1F6FF] md:flex md:h-screen">
    <div
      class="px-4 py-8 md:basis-3/5 md:flex md:flex-col md:justify-center md:items-center"
    >
      <div class="flex items-center">
        <img src="/images/logo.png" alt="logo" width="50" height="50" />
        <h1 class="text-primary font-bold text-lg md:text-xl">HiColleagues</h1>
      </div>
      <div class="md:flex md:flex-col-reverse">
        <div class="flex justify-center mt-5">
          <img
            src="/images/login-img.png"
            class="w-60 md:w-[600px]"
            alt="login-img"
          />
        </div>
        <div class="md:mt-20">
          <div
            class="text-lg md:text-4xl font-bold text-textPrimary text-center"
          >
            <div class="flex justify-center">
              <h5>Mulai</h5>
              <div class="md:ml-3">
                <h5 class="text-primary">Langkah Hebat</h5>
                <img
                  src="/images/textline-blue.png"
                  class="w-36 -mt-2 md:mt-0 md:w-72"
                  alt="textline-blue"
                />
              </div>
            </div>
            <h5>untuk Persiapan Masa Depanmu</h5>
          </div>
          <p class="mt-5 md:mt-10 text-center text-textGray text-sm md:text-lg">
            Siap jadi talenta profesional melalui program upskilling /
            reskilling dalam Transformasi Digital
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-white px-4 md:px-12 py-8 md:py-16 rounded-t-3xl md: rounded-tr-none md:rounded-l-[80px] md:basis-2/5 md:flex md:flex-col md:justify-center"
    >
      <h2 class="font-bold md:text-center md:text-2xl">Register</h2>
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-4 md:gap-6 mt-5 md:mt-10"
      >
        <input
          type="text"
          name="fullname"
          id="fullname"
          v-model="inputRegister.fullname"
          class="bg-[#F1F6FF] py-3 px-6 md:px-8 md:py-4 rounded-3xl"
          placeholder="Fullname"
        />
        <input
          type="email"
          name="email"
          id="email"
          v-model="inputRegister.email"
          class="bg-[#F1F6FF] py-3 px-6 md:px-8 md:py-4 rounded-3xl"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          v-model="inputRegister.password"
          class="bg-[#F1F6FF] py-3 px-6 md:px-8 md:py-4 rounded-3xl"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmation-password"
          id="confirmation-password"
          v-model="inputRegister.passwordConfirmation"
          class="bg-[#F1F6FF] py-3 px-6 md:px-8 md:py-4 rounded-3xl"
          placeholder="Password Confirmation"
        />
        <button
          type="submit"
          class="bg-primary text-white md:text-lg py-3 rounded-3xl shadow"
        >
          DAFTAR
        </button>
      </form>
      <div class="mt-3 md:mt-6 flex justify-center">
        <NuxtLink
          to="/"
          class="text-textGray text-xs md:text-sm hover:underline"
          >Sudah punya akun? Login</NuxtLink
        >
      </div>
      <p class="mt-5 md:mt-28 text-xs md:text-sm text-textPrimary text-center">
        Dengan mendaftarkan akun, kamu menyetujui
        <span class="font-bold text-primary">Syarat & Ketentuan</span> dan
        <span class="font-bold text-primary">Kebijakan Privasi</span>
        Hicolleagues.
      </p>
      <p class="mt-10 text-center text-xs md:text-sm text-textPrimary">
        @2025 PT Generasi Anak Muda Berkarya
      </p>
    </div>
  </div>
</template>
