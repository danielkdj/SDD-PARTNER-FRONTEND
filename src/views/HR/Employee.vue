<template xmlns="http://www.w3.org/1999/html">
    <div class="dashboard p-2">
        <!-- end nav -->
        <div class="mt-2 w-full">
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
            <div class="lg:flex sh grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
                <div>
                    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium p-2">
                        사원카드
                    </h1>
                </div>
                <div class="flex gap-2">
                    <router-link to="/EmpDetail">
                        <button
                            class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-2 px-5">
                            등록
                        </button>
                    </router-link>
                    <router-link to="/EmpDetail">
                        <button
                            class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-2 px-5">
                            수정
                        </button>
                    </router-link>
                    <router-link to="/Employee">
                        <button class="bg-white hover:border-gray-200 border rounded py-2 px-5">
                            삭제
                        </button>
                    </router-link>
                    <router-link to="/EmpList">
                        <button
                            class="bg-primary text-white hover:bg-primary/80 dark:border-gray-700 rounded py-2 px-5">
                            목록
                        </button>
                    </router-link>
                </div>
            </div>
        </div>


        <!-- 사원 상세정보 츨력 카드 -->
        <div class="mt-2 h-90 w-full bg-gray-100 dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
            <!-- card  -->
            <perfect-scrollbar class="divide-y mt-5 h-80">
                <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex" v-for="items in employee" :key="items.employee">
                    <div class="p-2 max-w-sm">
                        <img :src="items.empImg" alt="사원사진" class="w-60 h-60 rounded-sm" />
                    </div>
                    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                        <tr>
                            <th class="py-2 border bg-gray-100">사원번호</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">주민번호</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">이  름</th>
                            <td class="py-2 border">나중에 추가</td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">성  별</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">전화번호</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">이메일</th>
                            <td class="py-2 border">나중에 추가</td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">연  봉</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">급여계좌번호</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">주  소</th>
                            <td class="py-2 border">나중에 추가</td>

                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">호  봉</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">직  위</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">직  책</th>
                            <td class="py-2 border">나중에 추가</td>

                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">소속부서</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">입사일</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">수상이력</th>
                            <td class="py-2 border">나중에 추가</td>

                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">채용구분</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">고용구분</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">입사구분</th>
                            <td class="py-2 border">나중에 추가</td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">자격정보</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">퇴사일자</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">퇴사사유</th>
                            <td class="py-2 border">나중에 추가</td>
                        </tr>
                        <tr>
                            <th class="py-2 border bg-gray-100">퇴사여부</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">퇴사사유코드</th>
                            <td class="py-2 border">나중에 추가</td>
                            <th class="py-2 border bg-gray-100">근무상태</th>
                            <td class="py-2 border">나중에 추가</td>
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
                        <button class="bg-primary border flex gap-2 text-white hover:bg-primary/80 dark:border-gray-700 rounded py-3 px-3">
                            승인하기
                        </button>
                        <button class="bg-primary border flex gap-2 text-white hover:bg-primary/80 dark:border-gray-700 rounded py-3 px-3">
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
                        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50" v-for="items in employee" :key="items.employee">
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
                    <button class="bg-primary border text-white hover:bg-primary/80 dark:border-gray-700 rounded py-3 px-3" @click="toggleAll">
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
import { Icon } from "@iconify/vue";
import Button from "@/views/components/button.vue";

export default {
    data() {
        return {
            employee: [
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    name: "김철수",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    name: "이영희",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    name: "설유화",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    name: "김정수",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    name: "김철수",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    name: "이영희",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    name: "설유화",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    name: "김정수",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-01",
                    dept: "인사1팀",
                    confirmStatus: "completed",
                    name: "김철수",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "재직증명서 발급",
                    datetime: "2023-05-02",
                    dept: "급여1팀",
                    confirmStatus: "completed",
                    name: "이영희",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "이직신청서 발급",
                    datetime: "2023-05-05",
                    dept: "개발1팀",
                    confirmStatus: "progress",
                    name: "설유화",
                    checked: false,
                },
                {
                    empImg: require("@/assets/img/류준열씨.png"),
                    category: "상담신청",
                    datetime: "2023-05-05",
                    dept: "개발2팀",
                    confirmStatus: "cancelled",
                    name: "김정수",
                    checked: false,
                },
            ],
            isAllChecked: false,  // 전체 선택 상태를 추적하는 속성
        };
        // end chart data line
    },
    methods: {
        toggleAll() {
            this.isAllChecked =! this.isAllChecked;  // 전체 선택 상태 토글
            this.employee.forEach(item => item.checked = this.isAllChecked);  // 모든 항목의 체크 상태를 전체 선택 상태와 동기화
        }
    },
    components: {
        Button,
        Icon,
    },
    mounted() {},
};
</script>
