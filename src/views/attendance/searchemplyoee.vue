<template>

  <div class="dashboard p-4">
  <div class="w-full h-screen">
    <div class="bg-gray-200 mx-auto h-full">
      <div class="grid grid-cols-2 h-full gap-2">
        <div class="">
          <!-- 전체 사원 리스트 -->
          <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700 h-full">
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
                      :key="items.empId"
                      @click="selectUser(`${items.empId}`)">
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
        <div class="flex flex-col h-full row-span-2">
          <div class="bg-white p-4 rounded-lg box-border border h-3/4 w-full mt-4">
            <div class="mt-4">
              <FullCalendar :options="calendarOptions" id="calendar"/>
            </div>
          </div>
          <div class="flex-grow bg-white p-4 rounded-lg shadow-lg h-full">
            <div class="text-center text-3xl font-bold bg-gray-200">
              근무내역
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
                      번호
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                      항목구분
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                      제목
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                      신청자
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                      소속부서
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                      사용일시
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
                      v-for="items in selectedUsers"
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
        <!-- 전자결재 리스트-->
        <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border p-4">
          <div class="mt-2 w-full">
            <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
              <div>
                <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
                  전자결재 내역 현황
                </h2>
                <p class="text-gray-400 text-base font-roboto font-regular">
                  현재 결재 대기중인 작업 목록
                </p>
              </div>
              <div class="flex gap-2">
                <button class="bg-cyan-700 border flex gap-2 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3">
                  승인하기
                </button>
                <button class="bg-cyan-700 border flex gap-2 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3">
                  <span class="text">반려하기</span>
                </button>
              </div>
            </div>
          </div>

          <div class="wrapping-table mt-10">
            <perfect-scrollbar class="divide-y mt-5 h-80">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="uppercase px-6 py-3">
                    신청내역
                  </th>
                  <th scope="col" class="uppercase px-6 py-3">
                    신청일자
                  </th>
                  <th scope="col" class="uppercase px-6 py-3">
                    소속부서
                  </th>

                  <th scope="col" class="uppercase px-6 py-3">
                    신청자
                  </th>
                  <th scope="col" class="uppercase px-6 py-3">
                    승인여부
                  </th>
                  <th scope="col" class="uppercase px-6 py-3">
                    확인
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50" v-for="items in eaList" :key="items.eaStatus">
                  <td class="px-6 py-3">
                    {{ items.category }}
                  </td>
                  <td class="px-6 py-3">
                    {{ items.datetime }}
                  </td>
                  <td class="px-6 py-3">
                    {{ items.dept }}
                  </td>
                  <td class="px-6 py-3">
                    {{ items.name }}
                  </td>
                  <td>
                            <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                                  v-if="items.confirmStatus == 'completed'">
                                {{ items.confirmStatus }}
                            </span>
                    <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                          v-else-if="items.confirmStatus == 'progress'">
                                {{ items.confirmStatus }}
                            </span>
                    <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                                {{ items.confirmStatus }}
                            </span>
                  </td>
                  <!-- 체크박스 -->
                  <td class="px-6 py-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" v-model="items.checked"/>
                  </td>
                </tr>
                </tbody>
              </table>
            </perfect-scrollbar>
            <div class="p-2 flex justify-end">
              <button class="bg-cyan-700 border mt-4 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3" @click="toggleAll">
                전체선택
              </button>
            </div>
          </div>
        </div>
        <!-- 전자결재 리스트 end -->
      </div>
    </div>
  </div>

  </div>
</template>

<script>

import { ref } from "vue";
import Button from "@/views/components/button.vue";
import { Icon } from "@iconify/vue";
import Dropdown from "@/components/Dropdown.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  data() {
    return {
      events: [],
      selectedUsers: [],
      empList: ref([]),
      searchEmpList: ref([]),
      selectedEmployee: [{

      }],
      defaultEmployee: {

      },

      requestBody: {},
      search: "",greeting: "",
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        height: 425,
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: this.events,
      },
    };
  },
  watch: {
    search: function(newVal) {
      this.fetchEmployees(newVal);
    }
  },
  methods: {
    fetchEaList() {
      let url = this.$serverUrl + "/ea/eaHRList";

      this.$axios.get(url, {
        params: this.requestBody,  // 필요한 파라미터가 있다면 여기에 추가
        headers: {}  // 필요한 헤더가 있다면 여기에 추가
      }).then((res) => {
        if (res.data.length > 0) {
          this.eaList = res.data;
        } else {
          this.eaList = [];  // 데이터가 없을 경우의 기본값을 설정합니다.
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
        this.eaList = [];  // 오류 발생 시 기본값을 설정합니다.
      })
    },
    async approveSelectedEA() {
      const selectedEaList = this.eaList.filter(e => e.checked);
      for (const ea of selectedEaList) {
        await this.approveEA(ea.documentNo);
      }
    },
    async rejectSelectedEA() {
      const selectedEaList = this.eaList.filter(e => e.checked);
      for (const ea of selectedEaList) {
        await this.rejectEA(ea.documentNo);
      }
    },
    async approveEA(documentNo) {
      try {
        const ea = this.eaList.find(e => e.documentNo === documentNo);
        const response = await this.$axios.put(`/ea/eaApprovalStatus/${documentNo}`, ea);
        if (response.status === 200) {
          const index = this.eaList.findIndex(e => e.documentNo === documentNo);
          this.eaList[index] = {...response.data, checked: false};
        }
      } catch (error) {
        console.error(error);
      }
    },
    async rejectEA(documentNo) {
      try {
        const ea = this.eaList.find(e => e.documentNo === documentNo);
        const response = await this.$axios.put(`/ea/eaRejectStatus/${documentNo}`, ea);
        if (response.status === 200) {
          const index = this.eaList.findIndex(e => e.documentNo === documentNo);
          this.eaList[index] = {...response.data, checked: false};
        }
      } catch (error) {
        console.error(error);
      }
    },
    async toggleAll() {
      this.allChecked = !this.allChecked;
      this.eaList = this.eaList.map(e => ({...e, checked: this.allChecked}));
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
        this.empList = this.defaultEmpCard;
      })
    },

    selectUser(empId) {
      this.$axios
          .get(this.$serverUrl + "/attendance/list/id/" + empId,
              {
                params: this.requestBody,
                headers: {},
              })
          .then((res) => {
            this.selectedUsers = res.data;

            this.events = this.selectedUsers.map(user => ({
              title: "출근",
              start: user.startDate,
            }));

            this.calendarOptions = {
              ...this.calendarOptions,
              events: this.events,
            };
          })
          .catch((err) => {
            console.error(err);
          });
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
  },computed: {
    getDeptName() {
      return (deptNo) => {
        switch (deptNo) {
          case 1: return '개발';
          case 2: return '인사';
          case 3: return '급여';
          case 4: return '총무';
          default: return '알 수 없음'; // deptNo가 예상 범위 외의 값을 가질 때
        }
      }
    },
    getEmpSpot() {
      return (empSpot) => {
        switch (empSpot) {
          case '11': return '사장';
          case '12': return '이사';
          case '13': return '부장';
          case '14': return '과장';
          case '15': return '대리';
          case '16': return '주임';
          case '17': return '사원';
          default: return '알 수 없음'; // empSpot가 예상 범위 외의 값을 가질 때
        }
      }
    },
  },
  mounted() {
    this.fetchEmployees();


  },
  components: {
    Button,
    Icon,Dropdown, FullCalendar
  },
};


</script>

<style>

</style>

