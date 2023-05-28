<template>
    <div class="dashboard p-4">

        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <div class="p-3 w-full text-center "> <!-- Add the "text-center" class to center align the content -->
                    <a href="#">
                        <img class="avatar mx-auto" src="../assets/img/류준열씨.png" alt="..."
                             style="weight: 200px; height: 300px"/>
                        <br>
                        <h5 class="title">사원명 : 홍길동<!--{{ user.fullName }}--></h5>
                    </a>
                    <p class="description">
                        <!-- {{ user.title }}-->
                        직급/부서 : 과장 / IT 1팀
                    </p>
                    <br>
                    <button type="button"
                            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border dark:border-gray-700-lg border dark:border-gray-700-blue-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        출근
                    </button>

                    <button type="button"
                            class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 border dark:border-gray-700-lg border dark:border-gray-700-pink-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        퇴근
                    </button>
                </div>
            </div>
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
                <div class="">
                    <FullCalendar :options="calendarOptions" id="calendar"/>
                </div>

            </div>
        </div>
        <div class="mt-2 lg:flex block lg:gap-2">
            <div
                    class="bg-white dark:bg-gray-800 p-5 lg:mt-0 mt-4 lg:w-2/4 border dark:border-gray-700 rounded-md w-full"
            >
                <div class="">
                    <h2 class="text-lg font-semibold dark:text-gray-200">
                        결재 신청 현황
                    </h2>
                </div>
                <perfect-scrollbar class="divide-y h-96 mt-5 dark:divide-gray-700">
                    <div class="p-3 w-full">
                        <div class="flex gap-5">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="uppercase px-6 py-2">
                                        번호
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-3">
                                        제목
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-4">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                    v-for="items in tableTransaction1"
                                    :key="items.documentNo">
                                    <td class="px-6 py-2">
                                        {{ items.documentNo }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a v-on:click="fnEaView(`${items.documentNo}`)">{{ items.title }}</a>
                                    </td>
                                    <td class="px-6 py-6">
                                        {{ items.createdAt }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </perfect-scrollbar>
            </div>
            <div
                    class="bg-white dark:bg-gray-800 p-5 lg:mt-0 mt-4 lg:w-2/4 border dark:border-gray-700 rounded-md w-full"
            >
                <div class="">
                    <h2 class="text-lg font-semibold dark:text-gray-200">
                        결재 요청 현황
                    </h2>
                </div>
                <perfect-scrollbar class="divide-y h-96 mt-5 dark:divide-gray-700">
                    <div class="p-3 w-full">
                        <div class="flex gap-5">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="uppercase px-6 py-2">
                                        번호
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-3">
                                        제목
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-4">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                    v-for="items in tableTransaction2"
                                    :key="items.documentNo">
                                    <td class="px-6 py-2">
                                        {{ items.documentNo }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a v-on:click="fnEaApproveView(`${items.documentNo}`)">{{ items.title }}</a>
                                    </td>
                                    <td class="px-6 py-6">
                                        {{ items.createdAt }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </perfect-scrollbar>
            </div>
            <div class="bg-white dark:bg-gray-800 p-5 lg:mt-0 mt-4 lg:w-3/4 border dark:border-gray-700 rounded-md w-full flex">
                <div class="p-3 w-full text-center"> <!-- Add the "text-center" class to center align the content -->
                    <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                        공지사항
                    </h2>
                    <perfect-scrollbar class="h-96 mt-10 dark:divide-gray-700">
                        <div class="wrapping-table mt-10">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="uppercase px-6 py-2">
                                        번호
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-3">
                                        제목
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-3">
                                        작성자
                                    </th>
                                    <th scope="col" class="uppercase px-6 py-3">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                    v-for="(items, index) in tableTransaction"
                                    :key="items.noticeNo">
                                    <td class="px-6 py-2">
                                        {{ tableTransaction.length - index }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a v-on:click="fnView(`${items.noticeNo}`)">{{ items.title }}</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ items.name }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ items.createdAt }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </perfect-scrollbar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {Icon} from "@iconify/vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {

    name: "Dashboard",

    components: {
        FullCalendar,
        Icon,
    },
    data() {
        return {
            // requestBody: {},
            // requestBody1: {},
            // requestBody2: {},

            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                height: 650,
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                    {title: '팀 회식', date: '2023-05-25'},
                    {title: '외주 업체 방문', date: '2023-05-08'},
                    {title: 'iso 국제규격검사 방문예정', date: '2023-05-15'},
                    {title: '공공데이터 프로젝트 시작', date: '2023-05-17'},
                ]
            },
            tableTransaction: [
                {
                    noticeNo: '',
                    title: '',
                    createdAt: '',
                    name: '',
                },
            ],
            tableTransaction1: [
                {
                    documentNo: '',
                    empId: '',
                    title: '',
                    content: '',
                    startDate: '',
                    endDate: '',
                    approvalStage: '',
                    createdAt: '',
                    categoryId: '',
                    categoryItem: {
                        category: '',
                        subCategory: ''
                    },
                    employee: {
                        name: ''
                    }
                }
            ],
            tableTransaction2: [
                {
                    documentNo: '',
                    empId: '',
                    name: '',
                    title: '',
                    content: '',
                    startDate: '',
                    endDate: '',
                    approvalStage: '',
                    createdAt: '',
                    categoryId: '',
                    category: '',
                    subCategory: '',
                }
            ]
        };
    },
    methods: {
        fnGetList() {
            this.$axios.get(this.$serverUrl + "/notice", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                this.tableTransaction = res.data;
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            });
        },
        fnGetEaList() {
            this.$axios.get(this.$serverUrl + "/ea/eaList", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                this.tableTransaction1 = res.data;
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            });
        },
        fnGetEaApprovalList() {
            this.$axios.get(this.$serverUrl + "/ea/eaApprovalList", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                this.tableTransaction2 = res.data;
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            });
        },
        fnView(noticeNo) {
            this.requestBody.noticeNo = noticeNo
            this.$router.push({
                path: './NoticeDetail',
                query: this.requestBody
            })
        },
        fnEaView(documentNo) {
            this.requestBody.documentNo = documentNo
            this.$router.push({
                path: './eaDetail/',
                query: this.requestBody
            })
        },
        fnEaApproveView(documentNo) {
            this.requestBody.documentNo = documentNo
            this.$router.push({
                path: './eaApproval/',
                query: this.requestBody
            })
        },
    },
    mounted() { //페이지로드시 함수 적용
        this.fnGetList()
        this.fnGetEaList()
        this.fnGetEaApprovalList()
    },
};
</script>
