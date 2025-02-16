# HiColleagues Recommendation System

This project is a **recommendation system** implemented on a mock-up version of the HiColleagues website. It is part of my thesis work and built using modern technologies like **Nuxt.js**, **TailwindCSS**, and **Axios**.

---

## 🌟 Features

- **User-Friendly UI**: Designed with TailwindCSS for a clean and responsive user interface.
- **Recommendation System**: Implements a recommendation engine to suggest content or connections to users.
- **API Integration**: Uses Axios to fetch and interact with backend services seamlessly.
- **Nuxt Framework**: Utilizes Nuxt.js for SSR (Server-Side Rendering) and SSG (Static Site Generation).

---

## 🛠️ Tech Stack

| Technology    | Description                    |
| ------------- | ------------------------------ |
| Nuxt.js       | Frontend framework for Vue.js. |
| TailwindCSS   | Utility-first CSS framework.   |
| Axios         | HTTP client for API requests.  |
| Golang (Echo) | Backend for handling APIs.     |

---

## 🚀 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/taufiksty/hicolleagues-recommendation.git
   cd hicolleagues-recommendation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

```
.
├── assets/           # Static assets (CSS, images, etc.)
├── components/       # Vue components
├── layouts/          # Global layouts
├── pages/            # Routes (auto-routed by Nuxt)
├── plugins/          # Plugins (e.g., Axios configuration)
├── public/           # Public files (served directly)
├── store/            # Vuex store modules (if needed)
├── nuxt.config.js    # Nuxt configuration
└── tailwind.config.js# TailwindCSS configuration
```

---

## 📊 Recommendation Engine Overview

The recommendation class engine suggests content or connections to users based on:

- User interests
- Rating courses
- Popular courses

---

## ✨ Key Highlights

1. **Optimized Performance**: Combines SSR and client-side caching for fast responses.
2. **Responsive Design**: Fully mobile-friendly using TailwindCSS.
3. **Dynamic Data Fetching**: Fetches recommendations dynamically using Axios.

---

## 📖 Usage

1. **Run the application** and navigate to the recommendations page.
2. **Interact** with the system to view personalized suggestions.
3. **Test** various user scenarios to validate recommendation accuracy.

---

## 🔧 Configuration

- API endpoints are configured in `plugins/axios.js`. Update with your backend URLs.

---

## 🤝 Contribution

Feel free to open issues or create pull requests if you'd like to improve this project.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For any questions or feedback, reach out to:

- **Email**: taufik.satya09@gmail.com
- **GitHub**: [taufiksty](https://github.com/taufiksty)
