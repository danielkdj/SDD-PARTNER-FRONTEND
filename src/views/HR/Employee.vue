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
                    <button class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5" @click="addEmployee()">
                        등록
                    </button>
                    <button
                        class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5" @click="updateEmployee">
                        수정
                    </button>
                    <button class="bg-white hover:border-gray-200 border rounded py-3 px-5" @click="deleteEmployee(employee)">
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
            <perfect-scrollbar class="divide-y mt-5 h-80">
                <!--                <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex" v-for="emp in filteredEmployees" :key="emp.employee">-->
                <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex" v-for="emp in empArr" :key="emp.empId">
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
                                <input class="text-center" type="text" v-model="emp.empNo" placeholder="{{ emp.empNo }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">이  름</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.empName" placeholder="{{ emp.empName }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">성  별</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.gender">
                                    <option value="">{{ emp.gender }}</option>
                                    <option value="">남자</option>
                                    <option value="">여자</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">전화번호</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.phone" placeholder="{{ emp.phone }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">이메일</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.email" placeholder="{{ emp.email }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">연  봉</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.salary" placeholder="{{ emp.salary }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">급여계좌번호</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.accountNo" placeholder="{{ emp.accountNo }}"/>
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
                                <input class="text-center" type="text" v-model="emp.empRank" placeholder="{{ emp.empRank }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">직  위</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.empSpot">
                                    <option value="">{{ emp.empSpot }}</option>
                                    <option value="">01: 사장</option>
                                    <option value="">02: 이사</option>
                                    <option value="">03: 부장</option>
                                    <option value="">04: 과장</option>
                                    <option value="">05: 대리</option>
                                    <option value="">06: 주임</option>
                                    <option value="">07: 사원</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">직  책</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.empPosition" placeholder="{{ emp.empPosition }}"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">소속부서</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.deptNo">
                                    <option value="">{{ emp.deptNo }}</option>
                                    <option value="">01: 개발</option>
                                    <option value="">02: 인사</option>
                                    <option value="">03: 급여</option>
                                    <option value="">04: 총무</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">입사일</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.hireDate" placeholder="{{ emp.hireDate }}"/>
                            </td>
                            <th class="py-2 border bg-gray-100">결혼여부</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.marriage">
                                    <option value="">{{ emp.marriage }}</option>
                                    <option value="">Y</option>
                                    <option value="">N</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">채용구분</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.classification">
                                    <option value="">{{ emp.classification }}</option>
                                    <option value="">01: 공개채용</option>
                                    <option value="">02: 특별채용</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">고용구분</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.empClassification">
                                    <option value="">{{ emp.empClassification }}</option>
                                    <option value="">01: 정규직</option>
                                    <option value="">02: 시간제</option>
                                    <option value="">03: 무기계약직</option>
                                    <option value="">04: 계약직</option>
                                    <option value="">05: 파견직</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">입사구분</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.admission">
                                    <option value="">{{ emp.admission }}</option>
                                    <option value="">01: 신입</option>
                                    <option value="">02: 경력</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">자격정보</th>
                            <td class="py-2 border">
                                <input class="text-center" type="text" v-model="emp.qualification" placeholder="{{ emp.qualification }}"/>
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
                                    <option value="">Y</option>
                                    <option value="">N</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">퇴사사유코드</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.leaveCode">
                                    <option value="">{{ emp.leaveCode }}</option>
                                    <option value="">11: 개인사정 자진퇴사</option>
                                    <option value="">12: 사업장이전등으로 자진퇴사</option>
                                    <option value="">22: 폐업, 도산</option>
                                    <option value="">23: 해고, 권고사직등</option>
                                    <option value="">26: 근로자 귀책해고, 권고사직</option>
                                    <option value="">31: 정년</option>
                                    <option value="">32: 계약만료</option>
                                    <option value="">41: 고용보험미적용</option>
                                    <option value="">42: 이중고용</option>
                                </select>
                            </td>
                            <th class="py-2 border bg-gray-100">재직상태</th>
                            <td class="py-2 border">
                                <select class="text-center" v-model="emp.empStatus">
                                    <option value="">{{ emp.empStatus }}</option>
                                    <option value="">01: 재직</option>
                                    <option value="">02: 퇴직</option>
                                    <option value="">03: 퇴직예정</option>
                                    <option value="">04: 휴직</option>
                                    <option value="">05: 휴직예정</option>
                                    <option value="">06: 입사예정</option>
                                    <option value="">07: 수습</option>
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
import  { axios } from 'axios'
import { ref } from 'vue';
import { Icon } from "@iconify/vue";
import Button from "@/views/components/button.vue";

export default {
    data() {
        return {
            search: '',
            empArr:[
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "류준열씨?",
                    checked: false,
                    empId: "2022-0001",
                    password: "password1",
                    empNo: "881203-1234567",
                    gender: "남자",
                    marriage: "N",
                    phone: "010-1234-5678",
                    email: "realryu@example.com",
                    salary: 5000000,
                    accountNo: "123-456-789",
                    address: "Seoul, South Korea",
                    empSpot: "07: 사원",
                    empPosition: " ",
                    empRank: "1",
                    empStatus: "01: 재직",
                    classification: "01: 공개채용",
                    empClassification: "01: 정규직",
                    admission: "01: 신입",
                    hireDate: "2022-01-01",
                    leaveDate: " ",
                    leaveReason: " ",
                    leaveIs: " ",
                    leaveCode: " ",
                    deptName: '02: 인사',
                    awards: " ",
                    qualification: " ",
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "김종국씨?",
                    checked: false,
                    empId: "2022-0001",
                    password: "password1",
                    empNo: "881203-1234567",
                    gender: "남자",
                    marriage: "N",
                    phone: "010-1234-5678",
                    email: "realryu@example.com",
                    salary: 5000000,
                    accountNo: "123-456-789",
                    address: "Seoul, South Korea",
                    empSpot: "07: 사원",
                    empPosition: " ",
                    empRank: "1",
                    empStatus: "01: 재직",
                    classification: "01: 공개채용",
                    empClassification: "01: 정규직",
                    admission: "01: 신입",
                    hireDate: "2022-01-01",
                    leaveDate: " ",
                    leaveReason: " ",
                    leaveIs: " ",
                    leaveCode: " ",
                    deptName: '02: 인사',
                    awards: " ",
                    qualification: " ",
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "유재석씨?",
                    checked: false,
                    empId: "2022-0001",
                    password: "password1",
                    empNo: "881203-1234567",
                    gender: "남자",
                    marriage: "N",
                    phone: "010-1234-5678",
                    email: "realryu@example.com",
                    salary: 5000000,
                    accountNo: "123-456-789",
                    address: "Seoul, South Korea",
                    empSpot: "07: 사원",
                    empPosition: " ",
                    empRank: "1",
                    empStatus: "01: 재직",
                    classification: "01: 공개채용",
                    empClassification: "01: 정규직",
                    admission: "01: 신입",
                    hireDate: "2022-01-01",
                    leaveDate: " ",
                    leaveReason: " ",
                    leaveIs: " ",
                    leaveCode: " ",
                    deptName: '02: 인사',
                    awards: " ",
                    qualification: " ",
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "김종민씨?",
                    checked: false,
                    empId: "2022-0001",
                    password: "password1",
                    empNo: "881203-1234567",
                    gender: "남자",
                    marriage: "N",
                    phone: "010-1234-5678",
                    email: "realryu@example.com",
                    salary: 5000000,
                    accountNo: "123-456-789",
                    address: "Seoul, South Korea",
                    empSpot: "07: 사원",
                    empPosition: " ",
                    empRank: "1",
                    empStatus: "01: 재직",
                    classification: "01: 공개채용",
                    empClassification: "01: 정규직",
                    admission: "01: 신입",
                    hireDate: "2022-01-01",
                    leaveDate: " ",
                    leaveReason: " ",
                    leaveIs: " ",
                    leaveCode: " ",
                    deptName: '02: 인사',
                    awards: " ",
                    qualification: " ",
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "이상혁씨?",
                    checked: false,
                    empId: "2022-0001",
                    password: "password1",
                    empNo: "881203-1234567",
                    gender: "남자",
                    marriage: "N",
                    phone: "010-1234-5678",
                    email: "realryu@example.com",
                    salary: 5000000,
                    accountNo: "123-456-789",
                    address: "Seoul, South Korea",
                    empSpot: "07: 사원",
                    empPosition: " ",
                    empRank: "1",
                    empStatus: "01: 재직",
                    classification: "01: 공개채용",
                    empClassification: "01: 정규직",
                    admission: "01: 신입",
                    hireDate: "2022-01-01",
                    leaveDate: " ",
                    leaveReason: " ",
                    leaveIs: " ",
                    leaveCode: " ",
                    deptName: '02: 인사',
                    awards: " ",
                    qualification: " ",
                },
            ],
            eaStatus: [
                {
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    empName: "이영희",
                    checked: false,
                },
                {
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    empName: "설유화",
                    checked: false,
                },
                {
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    empName: "김정수",
                    checked: false,
                },
                {
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "김철수",
                    checked: false,
                },
                {
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    empName: "이영희",
                    checked: false,
                },
                {
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    empName: "설유화",
                    checked: false,
                },
                {
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    empName: "김정수",
                    checked: false,
                },
                {
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    empName: "김철수",
                    checked: false,
                },
                {
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    empName: "이영희",
                    checked: false,
                },
                {
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    empName: "설유화",
                    checked: false,
                },
                {
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    empName: "김정수",
                    checked: false,
                },
            ],
            isAllChecked: false,  // 전체 선택 상태를 추적하는 속성
        };
    },
    computed: {
        filteredEmpArr() {
            return this.empArr.filter(emp => {
                return emp.empName.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    },
    methods: {
        addEmployee() {
            axios.post('/employee', this.newEmployee)
                .then(response => {
                    this.empArr.push(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        updateEmployee(employee) {
            axios.put(`/employee/${employee.id}`, employee)
                .then(response => {
                    let index = this.empArr.findIndex(emp => emp.id === employee.id);
                    this.empArr.splice(index, 1, response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteEmployee(employee) {
            axios.delete(`employee/${employee.id}`)
                .then(response => {
                    const index = this.empArr.findIndex(emp => emp.id === employee.id);
                    if (index !== -1) {
                        this.empArr.splice(index, 1);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        openPostcode(emp) {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    emp.address = data.roadAddress;
                }
            }).open();
        },
        toggleAll() {
            this.isAllChecked =! this.isAllChecked;  // 전체 선택 상태 토글
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
                    const empIndex = this.empArr.findIndex(emp => emp.empId === this.emp.empId);
                    if (empIndex !== -1) {
                        this.$set(this.empArr[empIndex], 'empImg', fileDataUrl);
                    }
                };
                reader.readAsDataURL(file);
            }
        },
    },
    components: {
        Button,
        Icon,
    },
    mounted() {
        let script = document.createElement('script');
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);
    },
};
</script>
