<template>
  <!-- Search component button with name of type, press Ctrl + F -->
  <div class="dashboard p-4">
  <div class="w-full h-screen">
    <div class="bg-gray-200 mx-auto h-full">
      <div class="grid grid-cols-2 min-h-full">
        <div class="row-span-2 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg h-full">
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
        <div class="p-4"><div class="bg-white p-6 rounded-lg box-border border h-full w-full">
          <div class="text-3xl text-center items-center font-bold bg-gray-200">
            월별조회
          </div>
          <hr>
          <perfect-scrollbar class="divide-y h-full mt-5 dark:divide-gray-700">
            <div
                v-for="(user, index) in selectedUsers"
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
                  <input
                      type="checkbox"
                      v-model="selectedItems"
                      :value="user"
                  />
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

        </div></div>
        <div class="p-6">
          <div class="bg-white p-6 rounded-lg shadow-lg h-full">
            <div class="text-center text-3xl font-bold bg-gray-200">

             근무내역
            </div>

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



  export default {
    components: {
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
        const workBook = Xlsx.utils.book_new();
        const workSheet = Xlsx.utils.json_to_sheet(this.selectedItems);
        Xlsx.utils.book_append_sheet(workBook, workSheet, 'example');
        Xlsx.writeFile(workBook, 'example.xlsx');
      },
      selectUser(user) {

        this.selectedUsers.push(user);
      },
      removeUser(index) {
        this.selectedUsers.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>

