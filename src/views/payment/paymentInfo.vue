<template>

  <div class="dashboard p-4">
    <div class="w-full h-screen">
      <div class="bg-gray-200 mx-auto h-full">
        <div class="grid grid-cols-2 h-1/2">
          <div class="p-4 h-full">
            <!-- 전체 사원 리스트 -->
            <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
              <div class="mt-2 w-full">
                <div class="lg:flex sh grid-cols-1 lg:space-y-0 space-y-2 gap-5 justify-between">

                  <div>
                    <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
                      사원 리스트

                    </h2>
                    <p class="text-gray-400 text-base font-roboto font-regular">
                      이름으로 사원 조회 지원
                    </p>
                  </div>

                  <div class="flex gap-2">
                    <!-- search bar -->
                    <div
                        class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700">
                        <span class="text-3xl p-2 text-gray-400">
                        <Icon icon="ei:search"/></span>
                      <input
                          type="text"
                          v-model="search"
                          placeholder="검색할 사원명을 입력하세요."
                          class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                      />
                    </div>
                    <!-- end search bar -->

                    <!-- 목록 버튼 -->
                    <button
                        class="bg-cyan-700 hover:bg-cyan-500 text-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                        @click="returnEmpList()">
                      목록
                    </button>
                    <!-- end 목록 버튼 -->
                  </div>
                </div>
              </div>
              <div class="wrapping-table mt-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                  <thead class="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 w-1/12">순번</th>
                    <th scope="col" class="px-6 py-3 w-1/12">사원사진</th>
                    <th scope="col" class="px-6 py-3 w-1/6">사원번호</th>
                    <th scope="col" class="px-6 py-3 w-1/6">사원명</th>
                    <th scope="col" class="px-6 py-3 w-1/6">소속부서</th>
                    <th scope="col" class="px-6 py-3 w-1/6">직위</th>
                  </tr>
                  </thead>
                </table>
                <perfect-scrollbar class="mt-5 h-80 border-gray-100">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                    <colgroup>
                      <col class="w-1/12">
                      <col class="w-1/12">
                      <col class="w-1/6">
                      <col class="w-1/6">
                      <col class="w-1/6">
                      <col class="w-1/6">
                    </colgroup>
                    <tbody class="text-sm text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400 odd:bg-gray-100 even:border-t bg-white" v-for="(items, index) in empList">
                    <tr class="cursor-pointer text-gray-500 border-b dark:bg-gray-800 dark:border-gray-700"
                        :key="items.empId" @click="selectUser(`${items.empId}`)">


                      <td class="px-6 py-3">{{ empList.length - index }}</td>
                      <td class="px-6 py-3">
                        <img :src="items.empImg" alt="사원사진" class="w-14 h-14 rounded-2xl">
                      </td>
                      <td class="px-6 py-3">{{ items.empId }}</td>
                      <td class="px-6 py-3">{{ items.name }}</td>
                      <td class="px-6 py-3">{{ getDeptName(items.deptNo) }}</td>
                      <td class="px-6 py-3">{{ getEmpSpot(items.empSpot) }}</td>
                    </tr>
                    </tbody>
                  </table>
                </perfect-scrollbar>
            </div>
          </div>
          </div>
          <div class="p-4"><div class="bg-white p-6 rounded-lg box-border border h-full mx-h-auto w-full">
            <div class="text-center text-3xl font-bold bg-gray-200">

              사원 리스트

            </div>
            <div class="h-3/4">
            <perfect-scrollbar class="divide-y mt-5 dark:divide-gray-700 max-h-72">
              <div
                  v-for="user in selectedUsers"
                  :key="user.empId"
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
                    <h2 class="dark:text-gray-200">{{ user.employeeName }}</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      {{ getDeptName(user.deptNo) }} 팀
                    </p>
                  </div>
                  <div class="self-center">
                    {{user.salaryDate}}
                  </div>
                  <div class="self-center">
                    {{user.payment}}
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
                          <td class="border px-4 py-2">급여</td>
                          <td class="border px-4 py-2">{{ user.payment }}</td>
                          <td class="border px-4 py-2">(주)SSD파트너</td>
                          <td class="border px-4 py-2">{{ user.employeeName }}</td>
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
import {ref} from "vue";



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

      searchType: 'empId',
      selectedItems: [],
      previewData: [],
      list: [],
      selectedUsers: [],
      users: [], // Add this to store the fetched users
      requestBody: {},
      search: "",
      empList: ref([]),
      searchEmpList: ref([]),
      selectedEmployee: [],
      defaultEmployee: {},
      defaultEmpCard: [{}],

    };
  },
  watch: {
    search: function(newVal) {
      this.fetchEmployees(newVal);
    }
  },
  mounted() {
    this.fnGetList(),
        this.fetchEmployees();
  },
  //function
  methods: {
    selectUser(empId) {
      this.$axios
          .get(this.$serverUrl + "/salary/id/"+empId,
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res
          ) => {

            this.selectedUsers.push(res.data);
            // Update this line

          })
          .catch((err) => {
            console.error(err);
          });
    },
    removeUser(index) {
      this.selectedUsers.splice(index, 1);
    },
    previewXlsx() {
      this.previewData = [...this.selectedUsers];
    },
    today() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // JavaScript counts months from 0 to 11. January is 0. December is 11.
      const formattedMonth = month < 10 ? '0' + month : month; // to make sure that single digit months are prefixed with a '0'
      return year + '-' + formattedMonth;
    },
    fnGetList() {
      //스프링 부트에서 전송받은 데이터를 출력 처리

      this.$axios
          .get(this.$serverUrl + "/salary/list",
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

    fetchEmployees(search) {
      let url = this.$serverUrl + "/employee/ep";
      if (search) {
        url += "/name/" + search;
      }

      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        if (res.data.length > 0) {

          this.empList = res.data.map(emp => ({
            ...emp,
            empImgDisplay: this.getRelativePath(emp.empImg)
          }));
        } else {
          this.empList = this.defaultEmpCard;
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
        this.empList = this.selectedEmployee;
      })
    },
    returnEmpList() {
      this.search = '';
      this.fetchEmployees();
    },
    getRelativePath(path) {
      const fileSystemBasePath = 'C:/SDD/public/img/';
      const serverBasePath = 'http://localhost:3030/img/';

      if (path && typeof path === 'string') {
        if (path.startsWith(fileSystemBasePath)) {
          const newPath = serverBasePath + path.substring(fileSystemBasePath.length);
          console.log("Converted path:", newPath);
          return newPath;
        }
      }
      console.log("Unchanged path:", path);
      return path;
    },
  },
  computed: {
    getDeptName() {
      return (deptNo) => {
        switch (deptNo) {
          case 1:
            return '개발';
          case 2:
            return '인사';
          case 3:
            return '급여';
          case 4:
            return '총무';
          default:
            return '알 수 없음'; // deptNo가 예상 범위 외의 값을 가질 때
        }
      }
    },
    getEmpSpot() {
      return (empSpot) => {
        switch (empSpot) {
          case '11':
            return '사장';
          case '12':
            return '이사';
          case '13':
            return '부장';
          case '14':
            return '과장';
          case '15':
            return '대리';
          case '16':
            return '주임';
          case '17':
            return '사원';
          default:
            return '알 수 없음'; // empSpot가 예상 범위 외의 값을 가질 때
        }
      }
    },

    makeExcelFile5() {
      // Create a new workbook
      const wb = xlsx.utils.book_new();

      // Map your selectedUsers data to only include the properties you want
      const data = this.selectedUsers.map(user => ({
        청구년월: this.today(),
        청구항목: "급여",
        청구금액: user.payment,
        납부자명: "(주)SSD파트너",
        납부자구분: user.name,
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
    currency(value) {
      return new Intl.NumberFormat().format(value);
    },



  }
}
</script>

<style>
</style>

