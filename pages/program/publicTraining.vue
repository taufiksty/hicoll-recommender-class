<script setup>
const listBenefits = [
  {
    image: "/images/intensive-program.png",
    title: "Intensive Program",
    desc: "Durasi program 2-3 bulan yang mampu mengakselerasikan skill digital dengan jadwal program yang sesuai kebutuhan peserta & silabus yang ter-update sesuai kebutuhan industri.",
  },
  {
    image: "/images/competent-trainer.png",
    title: "Competent Trainer",
    desc: "Trainer kompeten dan berpengalaman di bidangnya yang siap menemani belajar dan mempercepat dalam upgrade skill yang diinginkan.",
  },
  {
    image: "/images/learning-management-system.png",
    title: "Learning Management System",
    desc: "Didukung Learning Management System (LMS) yang memberikan kemudahan dalam pelatihan seperti Silabus, Akses Materi & Pengumpulan Tugas secara terpusat.",
  },
  {
    image: "/images/e-certificate.png",
    title: "E-Certificate",
    desc: "Sertifikat sebagai bukti validasi peserta telah menyelesaikan program & diakui oleh industri sebagai nilai pendukung dalam berkarir.",
  },
  {
    image: "/images/job-connector.png",
    title: "Job Connector",
    desc: "Update informasi dan perekomendasian peluang kerja di industri nyata bagi alumni peserta program.",
  },
  {
    image: "/images/installment-payment-available.png",
    title: "Installment Payment Available",
    desc: "Biaya pelatihan yang terjangkau hingga program pembayaran dengan sistem cicilan untuk mendukung akselerasi skill peserta.",
  },
];

const listClassesRecommendation = [
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
];

const listClasses = [
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
  {
    image: "/images/image-class-example.png",
    level: "Dasar",
    method: "Daring",
    totalSession: 8,
    title: "Level Up with Golang",
    desc: "Pelatihan yang bertujuan untuk mempelajari dan mengimplementasi bahasa pemrograman Golang untuk kebutuhan pengembangan produk berkelanjutan.",
  },
];

const listCategories = [
  {
    image: "/images/kelas-teknologi.png",
    title: "Kelas Teknologi",
  },
  {
    image: "/images/kelas-bahasa.png",
    title: "Kelas Bahasa",
  },
  {
    image: "/images/kelas-soft-skill.png",
    title: "Kelas Soft Skill",
  },
];

const listFaqs = [
  {
    title:
      "Bagaimana mekanisme pelatihan yang dilakukan secara luring atau offline?",
    desc: "Pelatihan metode luring/offline dilakukan pada lokasi yang telah disepakati bersama, dengan didampingi oleh staff HiColleagues peserta dan instruktur dapat fokus menjalankan pelatihan dengan maksimal.",
  },
  {
    title: "Bagaimana proses melakukan presensi?",
    desc: "Pelatihan metode luring/offline dilakukan pada lokasi yang telah disepakati bersama, dengan didampingi oleh staff HiColleagues peserta dan instruktur dapat fokus menjalankan pelatihan dengan maksimal.",
  },
  {
    title: "Apa saja syarat peserta mendapatkan Sertifikat Pelatihan?",
    desc: "Pelatihan metode luring/offline dilakukan pada lokasi yang telah disepakati bersama, dengan didampingi oleh staff HiColleagues peserta dan instruktur dapat fokus menjalankan pelatihan dengan maksimal.",
  },
];
</script>

<template>
  <div
    class="bg-primary rounded-b-3xl md:rounded-b-none md:rounded-bl-[100px] md:flex md:flex-row-reverse md:gap-16 md:pl-40 md:pb-10 md:justify-between md:items-center"
  >
    <img
      src="/images/hero-m.png"
      alt="hero"
      class="w-full md:w-[600px] md:h-[400px]"
    />
    <div
      class="px-4 py-10 flex flex-col space-y-4 md:space-y-6 md:max-w-[700px]"
    >
      <h1
        class="text-white text-2xl font-bold text-center md:text-left md:text-4xl"
      >
        Tingkatkan Kompetensi Era Digitalisasi dengan Kelas Pilihan
      </h1>
      <p class="text-white text-center text-sm md:text-left md:text-base">
        <b>#MulaiLangkahHebat</b> dengan temukan kelas terbaik yang cocok untuk
        tingkatkan kompetensi dalam transformasi digital berkelanjutan dan siap
        jadi talenta profesional!
      </p>
      <div class="flex flex-col gap-3 md:flex-row md:gap-4">
        <button
          class="bg-secondary text-textPrimary rounded-lg md:rounded-2xl text-sm font-semibold py-2 md:px-20 md:py-4 md:text-lg"
        >
          LIHAT KELAS
        </button>
        <button
          class="bg-white text-primary rounded-lg md:rounded-2xl text-sm font-semibold py-2 md:px-20 md:py-4 md:text-lg"
        >
          KONSULTASI GRATIS
        </button>
      </div>
    </div>
  </div>

  <div class="mt-12 md:mt-32 px-4 md:px-40">
    <h2 class="font-bold text-lg md:text-2xl text-textPrimary text-center">
      HiColleagues Pilihan Tepat Akselerasi Skill Digital
    </h2>
    <div
      class="mt-6 md:mt-12 flex md:grid md:grid-cols-2 gap-x-4 md:gap-10 overflow-x-scroll"
    >
      <CardBenefit
        v-for="(benefit, idx) in listBenefits"
        :key="idx"
        :image="benefit.image"
        :title="benefit.title"
        :desc="benefit.desc"
      />
    </div>
  </div>

  <div class="mt-12 md:mt-32 px-4 md:px-40">
    <h2 class="font-bold text-lg md:text-2xl text-textPrimary text-center">
      Rekomendasi Kelas Hicolleagues
    </h2>
    <p class="text-sm md:text-base md:mt-2 text-textGray text-center">
      Rekomendasi ini didapatkan dari ketertarikan yang kamu minati
    </p>
    <div
      class="mt-6 md:mt-12 flex space-x-4 md:space-x-6 overflow-x-scroll py-2"
    >
      <CardClass
        v-for="(class_, idx) in listClassesRecommendation"
        :key="idx"
        :image="class_.image"
        :level="class_.level"
        :method="class_.method"
        :total-session="class_.totalSession"
        :title="class_.title"
        :desc="class_.desc"
      />
    </div>
  </div>

  <div class="mt-12 md:mt-32 px-4 md:px-40">
    <h2 class="font-bold text-lg md:text-2xl text-textPrimary text-center">
      Jelajahi Kategori Kelas Video Pembelajaran HiColleagues
    </h2>
    <div
      class="mt-6 md:mt-12 flex md:justify-center space-x-4 md:space-x-8 overflow-x-scroll"
    >
      <CardCategory
        v-for="(category, idx) in listCategories"
        :key="idx"
        :image="category.image"
        :title="category.title"
      />
    </div>
  </div>

  <div
    class="mt-12 md:mt-32 px-4 md:px-40 py-16 md:py-32 bg-[#F1F6FF] md:rounded-[80px]"
  >
    <h2 class="font-bold text-lg md:text-2xl text-textPrimary text-center">
      Jelajahi Kelas HiColleagues
    </h2>
    <div
      class="mt-6 md:mt-12 flex space-x-4 overflow-x-scroll py-2 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8"
    >
      <CardClass
        v-for="(class_, idx) in listClasses"
        :key="idx"
        :image="class_.image"
        :level="class_.level"
        :method="class_.method"
        :total-session="class_.totalSession"
        :title="class_.title"
        :desc="class_.desc"
      />
    </div>
  </div>

  <div class="mt-12 md:mt-32 px-4 md:px-40 py-16 md:py-0 md:pb-32 md:flex">
    <h2
      class="font-bold text-lg md:text-2xl text-textPrimary text-center md:basis-1/3"
    >
      Frequently Asked Question
    </h2>
    <div class="mt-6 md:mt-0 flex flex-col space-y-4 md:space-y-5 md:basis-2/3">
      <CardFaq
        v-for="(faq, idx) in listFaqs"
        :key="idx"
        :title="faq.title"
        :desc="faq.desc"
      />
    </div>
  </div>
</template>
