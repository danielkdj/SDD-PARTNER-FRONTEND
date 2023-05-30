<template>
  <div class="dashboard p-4">
    <!-- end nav -->
    <div class="mt-2 w-full space-y-3">
      <ol class="inline-flex space-y-3items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            {{ Main }}
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">급태</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">근태관리</a>
          </div>
        </li>
      </ol>

      <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
        <div>
          <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
            {{  }}
          </h1>
        </div>

      </div>
    </div>

    <!-- grid wrapper card -->
    <div class="wrapper-card grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-5 place-content-between">
      <!-- card  -->
      <div class="card bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 w-full rounded-md p-5 border dark:border-gray-700 flex" @click="fetchAllEmp()">
        <div class="p-2 max-w-sm">
          <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
            <span class="">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="30px"
                  height="30px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
              >
                <path fill="currentColor"
                      d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">

          <div>
            <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
              총사원수
            </p>
            <h2 class="font-normal text-gray-400 text-md mt-1 ml-2">전일대비<h2 class="ml-4">43%</h2></h2>

          </div>



        </div>
        <div class="w-full self-center text-center">
          <h2 class="text-xl">{{ employeeCount }}명</h2>
        </div>
      </div>

      <!-- end card -->
      <div class="card bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 w-full rounded-md p-5 border dark:border-gray-700 flex" @click="fetchNowWorking()">
        <div class="p-2 max-w-sm">
          <div class="bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto">
            <span class="">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="30px"
                  height="30px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="currentColor"
                    d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            근무인원
          </p>
             <h2 class="font-normal text-gray-400 text-md mt-1 ml-2">전일대비<h2 class="ml-4">43%</h2></h2>
        </div>
        <div class="w-full self-center text-center">
          <h2 class="text-xl">5명</h2>
        </div>
      </div>
      <!-- end card -->
      <div class="card bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 w-full rounded-md p-5 border dark:border-gray-700 flex" @click="fetchExtraEmp()">
        <div class="p-2 max-w-sm">
          <div class="bg-red-200 rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto">
            <span class="">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="30px"
                  height="30px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
              >
                <path
                    fill="none"
                    d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                    fill="currentColor"
                    d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            연장근무
          </p>

          <h2 class="font-normal text-gray-400 text-md mt-1 ml-2">전일대비<h2 class="ml-4">43%</h2></h2>
        </div>
        <div class="w-full self-center text-center">
          <h2 class="text-xl">5명</h2>
        </div>
      </div>
      <!-- end card -->
      <div class="card bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 w-full rounded-md p-5 border dark:border-gray-700 flex" @click="fetchDayOffEmp()">
        <div class="p-2 max-w-sm">
          <div class="bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto">
            <span class="">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="30px"
                  height="30px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                  <path
                      d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            휴가 인원
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1 ml-2">전일대비<h2 class="ml-4">43%</h2></h2>

        </div>
        <div class="w-full self-center text-center">
          <h2 class="text-xl">5명</h2>
        </div>
      </div>
      <!-- end card -->
    </div>



    <!-- end wrapper card -->

    <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
      <div class="mt-2 w-full">
        <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
          <div>
            <h2 class="font-bold text-base text-gray-800 dark:text-gray-200" id="title">
              전자결재 내역 현황
            </h2>
            <p class="text-gray-400 text-base font-roboto font-regular">
              현재 결재 대기중인 작업 목록
            </p>
          </div>
        </div>
      </div>
      <perfect-scrollbar class="h-4/6 mt-5 dark:divide-gray-700">
        <div class="wrapping-table mt-10">
          <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-1/2 lg:overflow-auto overflow-y-scroll"
          >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
            <tr class="bg-gray-300">
              <th
                  scope="col"
                  class="uppercase px-6 py-2"
              >
                사번
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                출근시간
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                퇴근시간
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                연장시간
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                근무시간
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                근무일
              </th>
              <th
                  scope="col"
                  class="uppercase px-6 py-3"
              >
                상태
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                v-for="items in list"
                :key="items.id"
            >
              <td class="px-6 py-2">
                {{ items.empId }}
              </td>
              <td class="px-6 py-4">
                {{ items.startTime }}
              </td>
              <td class="px-6 py-4">
                {{ items.endTime }}
              </td>
              <td class="px-6 py-4">
                {{ items.extraTime }}
              </td>
              <td class="px-6 py-4">
                {{ items.workingHour }}
              </td>
              <td class="px-6 py-4">
                {{ items.startDate }}
              </td>
              <td class="px-6 py-4 flex text-green-700">
                근무중
<!--                <button class="bg-cyan-700 border flex gap-2 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3 mr-3"> 승인하기 </button>
                <button class="bg-red-500 border flex gap-2 text-white hover:bg-red-700 dark:border-gray-700 rounded py-3 px-3"> 반려하기 </button>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </perfect-scrollbar>


    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import Button from "@/views/components/button.vue";
import axios from "axios";

export default {
  name: "Employee",
  data() {
    return {
      employeeCount: {},
      list: [],
      counts: []

    };
    // end chart data line
  },
  components: {
    Button,
    Icon,
  },
  mounted() {
    this.fnGetList()
    this.countsList()
    this.getEmployeeCount();
    this.getWorkingEmployeeCount();
    this.getVacationEmployeeCount();
    this.getOvertimeEmployeeCount();
  },
  methods: {
    async getWorkingEmployeeCount() {
      const response = await this.$axios.get(this.$serverUrl + "/employee/ep/count/1");
      this.employeeCount.working = response.data;
    },
    async getVacationEmployeeCount() {
      const response = await this.$axios.get(this.$serverUrl + "/employee/ep/count/3");
      this.employeeCount.vacation = response.data;
    },

    async getOvertimeEmployeeCount() {
      const response = await this.$axios.get(this.$serverUrl + "/employee/ep/count/4");
      this.employeeCount.overtime = response.data;
    },
    async getEmployeeCount() {
      const response = await this.$axios.get(this.$serverUrl + "/employee/ep/count");
      this.employeeCount = response.data;
    },
    fnGetList() {
      //스프링 부트에서 전송받은 데이터를 출력 처리

      this.$axios
          .get(this.$serverUrl + "/attendance/list",
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.list = res.data;
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
    countsList() {
    this.$axios
        .get(this.$serverUrl + "/salary/list",
            {
              params: this.requestBody,
              headers: {},
            })
        .then((res
        ) => {

          this.counts = res.data;
          // Update this line

        })
        .catch((err) => {
          console.error(err);
        });
  },

    fetchAllEmp() {
      this.$axios
          .get(this.$serverUrl + "/attendance/list",
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.list = res.data;
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
    fetchExtraEmp() {
      this.$axios
          .get(this.$serverUrl + "/ea/eaAttendanceList",
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.list = res.data;
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
    fetchDayOffEmp() {
      this.$axios
          .get(this.$serverUrl + "/ea//eaVacationList",
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.list = res.data;
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
    fetchNowWorking() {
      this.$axios
          .get(this.$serverUrl + "/employee/working/list",
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.list = res.data;
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
  }
}
</script>