<template>

  <div class="dashboard p-4">
  <div class="w-full h-screen">
    <div class="bg-gray-200 mx-auto h-full">
      <div class="grid grid-cols-2 h-full">
        <div class="p-4">
          <div class="bg-white p-4 rounded-lg shadow-lg h-full">
          <header class="text-center text-3xl font-bold bg-gray-200">사원 검색</header>
          <hr>
          <div class="flex items-center justify-center space-x-2 mb-4">
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
          </div>
          <div class="mb-4 flex justify-center">
            <dropdown placement="left">
              <template v-slot:button>
                <button class="flex px-5 py-3 rounded-md bg-blue-100 text-gray-400">
                  선택
                  <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                  /></span>
                </button>
              </template>
              <template v-slot:content>
                <div class="">
                  <!-- 검색 유형 옵션 추가 -->
                  <button @click="searchType = 'empId'">직원 ID</button>
                  <button @click="searchType = 'salaryDate'">급여 날짜</button>
                </div>
              </template>
            </dropdown>
            <input type="text" placeholder="검색" v-model="search" @input="fnGetList" class="w-1/3 bg-blue-100 border-0.4 rounded-lg py-2 px-3 ml-2">
          </div>
            <perfect-scrollbar class="divide-y h-full mt-5 dark:divide-gray-700">
              <div
                  v-for="(user, index) in users"
                  :key="index"
                  class="p-3 w-full"
              >
                <div class="flex gap-5 place-content-between">
                  <div>
                    <img
                        class="w-14 rounded-md"
                        :src="user.image"
                        alt=""
                    />
                  </div>
                  <div class="mt-1">
                    <h2 class="dark:text-gray-200">{{ user.name }}</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      {{ user.status }}
                    </p>
                  </div>
                  <div>
                    <button
                        @click="selectUser(user)"
                        class="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      >
                    </button>
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
        </div>
        </div>
        <div class="flex flex-col h-full">
          <div class="bg-white p-4 rounded-lg box-border border h-3/4 w-full mt-4">
            <div class="mt-4">
              <FullCalendar :options="calendarOptions" id="calendar"/>
            </div>
          </div>
          <div class="flex-grow bg-white p-4 rounded-lg shadow-lg h-full mb-4">
            <div class="text-center text-3xl font-bold bg-gray-200">
              근무내역
            </div>
            <perfect-scrollbar class="divide-y h-full mt-5 dark:divide-gray-700">
              <div
                  v-for="(user, index) in users"
                  :key="index"
                  class="p-3 w-full"
              >
                <div class="flex gap-5 place-content-between">
                  <div>
                    <img
                        class="w-14 rounded-md"
                        :src="user.image"
                        alt=""
                    />
                  </div>
                  <div class="mt-1">
                    <h2 class="dark:text-gray-200">{{ user.name }}</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      {{ user.status }}
                    </p>
                  </div>
                  <div>
                    <button
                        @click="selectUser(user)"
                        class="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      >
                    </button>
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import * as xlsx from 'xlsx'
  import { Icon } from "@iconify/vue";
  import Dropdown from "@/components/Dropdown.vue";
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  export default {
    components: {Dropdown, FullCalendar},

    data() {
      return {
        greeting: "",
        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin],
          height: 425,
          initialView: 'dayGridMonth',
          dateClick: this.handleDateClick,
          events: [
            {title: 'event 1', date: '2023-05-01'},
            {title: 'event 2', date: '2023-05-02'}
          ]
        },
      }
    },
    mounted() {
      this.greeting = "Hello world!";
    },

  }



</script>

<style>

</style>

