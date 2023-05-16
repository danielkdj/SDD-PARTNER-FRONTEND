<template>

  <div class="dashboard p-4">
    <div class="w-full h-screen">
      <div class="bg-gray-200 mx-auto h-full">
        <div class="grid grid-cols-2 h-1/2">
          <div class="p-4 h-full">
            <div class="bg-white p-6 rounded-lg h-full">
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
              <perfect-scrollbar class="divide-y max-h-72 mt-5 dark:divide-gray-700">
                <div
                    v-for="(user, index) in list"
                    :key="index"
                    class="p-3 w-full"
                >
                  <div class="flex gap-5 place-content-between">
                    <div>
                      <img
                          class="w-14 rounded-md"
                          :src="user.empImg"
                          alt=""
                      />
                    </div>
                    <div class="mt-1">
                      <h2 class="dark:text-gray-200">{{ user.name }}</h2>
                      <p class="text-sm dark:text-gray-500 text-gray-400">
                        {{ user.empId }}
                      </p>
                    </div>
                    <div class="self-center">
                      {{user.empRank}}
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
          <div class="p-4"><div class="bg-white p-6 rounded-lg box-border border h-full mx-h-auto w-full">
            <div class="text-center text-3xl font-bold bg-gray-200">

              사원 리스트

            </div>
            <div class="h-3/4">
            <perfect-scrollbar class="divide-y mt-5 dark:divide-gray-700 max-h-72">
              <div
                  v-for="(user, index) in selectedUsers"
                  :key="index"
                  class="p-3 w-full"
              >
                <div class="flex gap-5 place-content-between">
                  <div>
                    <img
                        class="w-14 rounded-md"
                        :src="user.empImg"
                        alt=""
                    />
                  </div>

                  <div class="mt-1">
                    <h2 class="dark:text-gray-200">{{ user.name }}</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      {{ user.empId }}
                    </p>
                  </div>
                  <div class="self-center">
                    {{user.empRank}}
                  </div>

                  <div>
                    <button
                        @click="removeUser(index)"
                        class="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      x
                    </button>

                  </div>
                </div>
              </div>
            </perfect-scrollbar>

            </div>
            <div class="justify-end">
              <button class="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mt-4 mr-6"
                       @click="previewXlsx()">내보내기</button>
            </div>
          </div>
         </div>
          <div class="p-4 col-span-2 h-auto">
            <div class="bg-white p-6 rounded-lg h-full">


                <div class="text-center bg-gray-200 text-3xl font-bold">미리보기</div>
                <div class="h-60">
                  <perfect-scrollbar class="h-full dark:divide-gray-700">
                    <div class="wrapping-table mt-10">
                      <table class="table-auto w-full mt-4">
                        <thead>
                        <tr class="bg-gray-300">
                          <th class="bgpx-4 py-2 border-black ">청구년월</th>
                          <th class="px-4 py-2 border">청구항목</th>
                          <th class="px-4 py-2 border">청구금액</th>
                          <th class="px-4 py-2 border">납부자명</th>
                          <th class="px-4 py-2 border">납부자구분</th>
                          <th class="px-4 py-2 border">납부전용계좌</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user, index) in previewData" :key="index">
                          <td class="border px-4 py-2">{{ today() }}</td>
                          <td class="border px-4 py-2">{{ user.empId }}</td>
                          <td class="border px-4 py-2">{{ user.empRank }}</td>
                          <td class="border px-4 py-2">(주)SSD파트너</td>
                          <td class="border px-4 py-2">급여</td>
                          <td class="border px-4 py-2">{{ user.empRank }}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </perfect-scrollbar>
                </div>


                <button class="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mb-4 mr-6" @click="makeExcelFile5()">내려받기</button>

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
import Default from "@fullcalendar/vue3";



export default {
  components: {
    Default,
    Dropdown,
    Icon,
    xlsx,
    name: 'App'
  },

  data() {
    return {
      search: '',
      searchType: 'empId',
      selectedItems: [],
      previewData: [],
      list: [
        {
          idx: 1,
          empId: "3891394",
          empImg:"src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
        {
          idx: 2,
          empId: "3891393",
          empImg: "src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
        {
          idx: 3,
          empId: "3891392",
          empImg: "src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
        {
          idx: 4,
          empId: "3891391",
          empImg: "src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
        {
          idx: 5,
          empId: "3891391",
          empImg: "src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
        {
          idx: 6,
          empId: "3891391",
          empImg: "src/assets/img/user2.png",//이미지
          empRank: "사원", //직급
          name: "전병현", //이름
        },
      ],
      selectedUsers: [],
      users: [] // Add this to store the fetched users
    };
  },
  mounted() {
    this.fnGetList()
  },
  //function
  methods: {

    fnGetList() {
      //스프링 부트에서 전송받은 데이터를 출력 처리
      this.requestBody = {
        sk: this.searchType,
        sv: this.search,
        page: this.page,
        size: this.size,
      };

      this.$axios
          .get(this.$serverUrl + "/salary/list", {
            params: this.requestBody,
            headers: {},
          })
          .then((res) => {
            this.users = res.data.content; // Update this line
          })
          .catch((err) => {
            console.error(err);
          });
    },
    makeExcelFile5() {
      // Create a new workbook
      const wb = xlsx.utils.book_new();

      // Map your selectedUsers data to only include the properties you want
      const data = this.selectedUsers.map(user => ({
        청구년월: this.today(),
        청구항목: user.empId,
        청구금액: user.empRank,
        납부자명: "(주)SSD파트너",
        납부자구분: "급여",
        납부전용계좌: user.empRank
      }));

      // Convert your selectedUsers data to worksheet
      const ws = xlsx.utils.json_to_sheet(data);

      // Append the worksheet to the workbook
      xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

      // Write the workbook to a file and trigger a download
      // You may need to run this in the browser environment to see the download dialog
      xlsx.writeFile(wb, "급여이체내역서.xlsx");
    },
    selectUser(user) {

      this.selectedUsers.push(user);
    },
    removeUser(index) {
      this.selectedUsers.splice(index, 1);
    },
    previewXlsx(selectedUsers) {
      this.previewData = [...this.selectedUsers];

    },
    today() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // JavaScript counts months from 0 to 11. January is 0. December is 11.
      const formattedMonth = month < 10 ? '0' + month : month; // to make sure that single digit months are prefixed with a '0'
      return year + '-' + formattedMonth;
    },


  }
}
</script>

<style>
</style>

