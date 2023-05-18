<template xmlns="http://www.w3.org/1999/html">
    <div class="dashboard p-2">
        <!-- end nav -->
        <div class="mt-2 w-full">
            <!-- site path -->
            <nav class="flex p-2" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="/"
                           class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg
                                class="mr-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg
                                class="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd">
                                </path>
                            </svg>
                            <a href="#"
                               class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                                인사
                            </a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg
                                class="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                            <span
                                class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                사원관리
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <!-- end site path -->

            <!-- 사원카드 -->
            <div class="lg:flex sh grid-cols-1 lg:space-y-0 space-y-2 gap-5 justify-between">
                <div>
                    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium p-2">
                        사원카드
                    </h1>
                </div>
                <div class="flex gap-2">
                    <!-- search bar -->
                    <div class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700">
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

                    <!-- crud 버튼 -->
                    <button class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5" @click="createEmployee(emp, file)">
                        등록
                    </button>
                    <button
                        class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5" @click="updateEmployee(emp.empId, emp, file)">
                        수정
                    </button>
                    <button class="bg-white hover:border-gray-200 border rounded py-3 px-5" @click="deleteEmployee(emp.empId)">
                        삭제
                    </button>
                    <router-link to="/EmpList">
                        <button
                            class="bg-cyan-700 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-5">
                            목록
                        </button>
                    </router-link>
                    <!-- end crud 버튼 -->
                </div>
            </div>
        </div>

        <!-- 사원 상세정보 출력 카드 -->
        <div class="mt-2 h-90 w-full bg-gray-100 dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
            <perfect-scrollbar class="divide-y mt-3 h-80">
                <!-- <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex" v-for="em4p in filteredEmployees" :key="emp.employee">-->
                <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex"
                     v-for="emp in empList"
                     :key="emp.empId">

                    {{ empList }}

                    <div class="mr-6 max-w-sm items-center">
                        <img :src="emp.empImg" alt="사원사진" class="pt-1 w-72 h-72 rounded-sm cursor-pointer" @click="triggerUpload"/>
                        <input type="file" accept="image/*" ref="fileInput" @change="handleFileUpload" style="display: none;"/>
                    </div>
                    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                        <tr>
                            <th class="py-2 border bg-gray-100">사원번호</th>
                            <td class="py-2 border">{{ emp.empId }}</td>
                            <th class="py-2 border bg-gray-100">주민번호</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.empNo" placeholder="{{ emp.empNo }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">이  름</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.name" placeholder="{{ emp.name }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">성  별</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.gender">
                                    <option value="">{{ emp.gender }}</option>
                                    <option value=""> </option>
                                    <option value="남자">남자</option>
                                    <option value="여자">여자</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">전화번호</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.phone" placeholder="{{ emp.phone }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">이메일</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.email" placeholder="{{ emp.email }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">연  봉</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.salary" placeholder="{{ emp.salary }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">급여계좌번호</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.accountNo" placeholder="{{ emp.accountNo }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">주  소</th>
                            <td class="py-2 border">
                                <input class="text-center w-2/3" type="text" v-model="emp.address" placeholder="{{ emp.address }}"/>
                                <button @click="openPostcode(emp)" class="ml-2 px-2 py-1 bg-cyan-700 text-white rounded">주소찾기</button>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">호  봉</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.empRank" placeholder="{{ emp.empRank }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">직  위</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.empSpot">
                                    <option value="">{{ emp.empSpot }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 사장</option>
                                    <option value="12">12: 이사</option>
                                    <option value="13">13: 부장</option>
                                    <option value="14">14: 과장</option>
                                    <option value="15">15: 대리</option>
                                    <option value="16">16: 주임</option>
                                    <option value="17">17: 사원</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">직  책</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.empPosition" placeholder="{{ emp.empPosition }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">소속부서</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.deptNo">
                                    <option value="">{{ emp.deptNo }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 개발</option>
                                    <option value="12">12: 인사</option>
                                    <option value="13">13: 급여</option>
                                    <option value="14">14: 총무</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">입사일</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.hireDate" placeholder="{{ emp.hireDate }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">결혼여부</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.marriage">
                                    <option value="">{{ emp.marriage }}</option>
                                    <option value=""> </option>
                                    <option value="Y">Y</option>
                                    <option value="N">N</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">채용구분</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.classification">
                                    <option value="">{{ emp.classification }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 공개채용</option>
                                    <option value="12">12: 특별채용</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">고용구분</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.empClassification">
                                    <option value="">{{ emp.empClassification }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 정규직</option>
                                    <option value="12">12: 시간제</option>
                                    <option value="13">13: 무기계약직</option>
                                    <option value="14">14: 계약직</option>
                                    <option value="15">15: 파견직</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">입사구분</th>
                            <td class="py-2 border">
                                <select class="text-center cursor-pointer" v-model="emp.admission">
                                    <option value="">{{ emp.admission }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 신입</option>
                                    <option value="12">12: 경력</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">자격정보</th>
                            <td class="py-2 border">
                                <input class="text-center cursor-pointer" type="text" v-model="emp.qualification" placeholder="{{ emp.qualification }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">퇴사일자</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.leaveDate" placeholder="{{ emp.leaveDate }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">퇴사사유</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.leaveReason" placeholder="{{ emp.leaveReason }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">퇴사여부</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.leaveIs">
                                    <option value="">{{ emp.leaveIs }}</option>
                                    <option value=""> </option>
                                    <option value="Y">Y</option>
                                    <option value="N">N</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">퇴사사유코드</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.leaveCode">
                                    <option value="">{{ emp.leaveCode }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 개인사정 자진퇴사</option>
                                    <option value="12">12: 사업장이전등으로 자진퇴사</option>
                                    <option value="22">22: 폐업, 도산</option>
                                    <option value="23">23: 해고, 권고사직등</option>
                                    <option value="26">26: 근로자 귀책해고, 권고사직</option>
                                    <option value="31">31: 정년</option>
                                    <option value="32">32: 계약만료</option>
                                    <option value="41">41: 고용보험미적용</option>
                                    <option value="42">42: 이중고용</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">재직상태</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.empStatus">
                                    <option value="">{{ emp.empStatus }}</option>
                                    <option value=""> </option>
                                    <option value="11">11: 재직</option>
                                    <option value="12">12: 퇴직</option>
                                    <option value="13">13: 퇴직예정</option>
                                    <option value="14">14: 휴직</option>
                                    <option value="15">15: 휴직예정</option>
                                    <option value="16">16: 입사예정</option>
                                    <option value="17">17: 수습</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
            </perfect-scrollbar>
        </div>
        <!-- 사원카드 end -->

        <!-- 전자결재 리스트-->
        <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
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
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50" v-for="items in eaStatus" :key="items.eaStatus">
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
    </div>
    <!-- 전자결재 리스트 end -->
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import { Icon } from "@iconify/vue";
import Button from "@/views/components/button.vue";

export default {
  data() {
    return {
      requestBody: {},
      empList: [],
    };
  },
    methods: {
      fetchEmployees() {
      this.$axios.get(this.$serverUrl + "/employee/ep", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
          this.empList = res.data;
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    /*createEmployee(emp, file) {
      const formData = new FormData();
      formData.append("emp", JSON.stringify(emp));
      formData.append("file", file);
      this.$axios.post(this.$serverUrl + "/employee/ep/create", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        if (res.data.resultCode === "OK") {
          this.fetchEmployees();
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    updateEmployee(empId, emp, file) {
      const formData = new FormData();
      formData.append("emp", JSON.stringify(emp));
      formData.append("file", file);
      this.$axios.put(this.$serverUrl + `/employee/ep/update/${empId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        if (res.data.resultCode === "OK") {
          this.fetchEmployees();
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },*/
  openPostcode(emp) {
    new window.daum.Postcode({
      oncomplete: function (data) {
        emp.address = data.roadAddress;
      }
    }).open();
  },
  toggleAll() {
    this.isAllChecked = !this.isAllChecked;  // 전체 선택 상태 토글
    this.eaStatus.forEach(item => item.checked = this.isAllChecked);  // 모든 항목의 체크 상태를 전체 선택 상태와 동기화
  },
  triggerUpload() {
    this.$nextTick(() => {
      let fileInput = this.$refs.fileInput;
      if (Array.isArray(fileInput)) {
        // If fileInput is an array, use the first element
        fileInput = fileInput[0];
      }
      if (fileInput) {
        fileInput.click();
      }
    });
  },
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && this.emp && this.emp.empId) {
      let reader = new FileReader();
      reader.onload = e => {
        const fileDataUrl = e.target.result;
        const empIndex = this.empList.findIndex(emp => emp.empId === this.emp.empId);
        if (empIndex !== -1) {
          this.$set(this.empList[empIndex], 'empImg', fileDataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  }

    },

    components: {
        Button,
        Icon,
    },
    mounted() {
        this.fetchEmployees();
        let script = document.createElement('script');
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);
    },
};
</script>
