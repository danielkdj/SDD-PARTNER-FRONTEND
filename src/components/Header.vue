<template>
  <!-- this header -->
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
    <div class="wrap-header flex items-center gap-5 justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <div class="flex items-center" v-if="weatherData && weatherData.name">
            위치정보 : {{ weatherData.name }}
            <img class="h-12 w-12" :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="Weather Icon" v-if="weatherData.weather[0].icon">            현재날씨 : {{ weatherData.weather[0].description }}
            현재온도 : {{ weatherData.main.temp }}℃
        </div>
      </div>

      <div class="mr-5 flex gap-3">
        <button
            @click="setTheme(true)"
            class="mr-5 text-2xl text-gray-500"
            v-if="!darkMode"
        >
          <Icon icon="ph:sun-dim" />
        </button>
        <button
            @click="setTheme(false)"
            v-else
            class="mr-5 text-2xl text-gray-500"
        >
          <Icon icon="ri:moon-fill" />
        </button>

        <transition name="fade">
          <div
            id="notificaitons"
            v-show="notification"
            class="block absolute lg:right-56 right-28 mt-12 z-50 w-96 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
          >
            <!-- head notification -->
            <div
              class="flex justify-between p-3 text-gray-800 dark:text-gray-300"
            >
              <h2>Notifications</h2>
              <button class="text-blue-500 text-sm">Mark all as Read</button>
            </div>
            <div
              class="p-5 text-center"
              v-if="!notifList.length"
            >
              <p class="text-gray-800 dark:text-gray-300">
                No notifications yet.
              </p>
            </div>
            <div
              class="p-2 pl-3 w-full"
              v-for="(item, index) in notifList"
              :key="index"
            >
              <div class="flex gap-5">
                <div>
                  <img
                    class="w-9 rounded-full"
                    :src="imageAssets(item.image)"
                    alt=""
                  />
                </div>
                <div class="mt-1">
                  <div class="flex gap-3">
                    <h2 class="dark:text-gray-200">{{ item.name }}</h2>
                    <p class="dark:text-gray-500 text-gray-400 text-xs">
                      {{ limitText(item.message) }}
                    </p>
                  </div>
                  <p class="text-sm dark:text-gray-500 text-gray-400">
                    {{ item.hours }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2">
              <button class="w-full p-2 text-gray-800 dark:text-gray-300">
                View All
              </button>
            </div>
          </div>
        </transition>

        <button
          @blur="menuToggleBlur"
          @click="menuToggle"
        >
          <div class="user-avatar flex p-1 cursor-pointer rounded-md">
            <div>
              <img
                src="../assets/img/user.jpg"
                class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500"
                alt=""
              />
            </div>
            <div class="text-left lg:block md:block hidden">
              <h2 class="dark:text-white text-gray-800">Hi, Sahrul</h2>
              <p class="text-xs text-gray-400 dark:text-gray-500">
                Frontend Developer
              </p>
            </div>
          </div>
        </button>

        <transition name="fade">
          <div
            id="dropdownSmall"
            v-show="menu"
            class="block absolute right-10 mt-12 z-50 w-52 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div>Logged As</div>
              <div class="font-medium truncate">Moh Sahrullah</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSmallButton"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
                  >User Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
                  >Settings</a
                >
              </li>

              <li>
                <a
                  href="https://github.com/sahrullahh"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
                  >Github</a
                >
              </li>
            </ul>

            <div class="py-1">
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white"
                >Sign out</a
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
<style></style>
<script>
  import { Icon } from "@iconify/vue";
  import { fullscreen } from "@/helper/fullscreen";
  import { setDarkMode, loadDarkMode } from "@/helper/theme";
  import axios from 'axios';
  export default {
    data() {
      return {
        menu: false,
        darkMode: false,
        notification: false,
        fullscreenMode: false,
        weatherData: null,
        notifList: [
          {
            name: "Elizabeth Begum",
            image: "user1.png",
            message:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",
            hours: "12 hours ago",
          },
          {
            name: "Ethan Roger",
            image: "user2.png",
            message:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",
            hours: "12 hours ago",
          },
          {
            name: "Taylor neal",
            image: "user4.png",
            message:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora culpa blanditiis neque animi sequi sunt incidunt beatae? Aperiam facilis consectetur,",
            hours: "2 days hours ago",
          },
        ],
      };
    },
    components: {
      Icon,
    },
    watch: {
      $route() {
        this.menu = false;
        this.notification = false;
      },
    },
    methods: {
      fullscreen,
      setDarkMode,
      loadDarkMode,

      menuToggle: function () {
        this.menu = !this.menu;
      },
      menuToggleBlur: function () {
        this.menu = false;
      },
      notifToggle: function () {
        this.notification = !this.notification;
      },
      notifToggleBlur: function () {
        this.notification = false;
      },
      limitText(message) {
        const text =
          message.length > 25 ? message.substring(0, 25) + "..." : message;
        return text;
      },
      fullscreenToggle() {
        this.fullscreenMode = !this.fullscreenMode;
        this.fullscreen(this.fullscreenMode);
      },
      // set theme to dark and light
      setTheme(bool) {
        this.darkMode = bool;
        this.setDarkMode(bool);
      },
      imageAssets(url) {
        return require("@/assets/img/" + url);
      },
      fetchWeatherData() {
          const apiKey = "21ca248509cfaf37971c07ac47bfadf2";
          const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
          const lat = 37.555134;
          const lon = 126.936893;

          axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
              .then(response => {
                  this.weatherData = response.data;
                  })
              .catch(error => {
                  console.error(error);
                  });
          },
      },
    mounted() {
      // get theme dark or light with loadDarkMode()
      this.darkMode = this.loadDarkMode();
      this.fetchWeatherData();
    },
  };
</script>
