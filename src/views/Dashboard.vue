<template>
    <div class="dashboard p-4">

        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <div class="p-3 w-full text-center "> <!-- Add the "text-center" class to center align the content -->
                    <br><br>
                    <a href="#">
                        <img alt="..." class="avatar mx-auto" src="../assets/img/tinified/류준열씨.png"
                             style="weight: 200px; height: 300px"/>
                        <br>
                        <h5 class="title">사원명 : {{ tableTransaction3.name }}<!--{{ user.fullName }}--></h5>
                    </a>
                    <br><p class="description">
                        <!-- {{ user.title }}-->
                        직급<!--/부서--> : <span v-if="tableTransaction3.empSpot === 11"
                                             class="px-3 py-1 rounded-md">
                                          사장
                                </span>
                        <span v-if="tableTransaction3.empSpot === 12"
                              class="px-3 py-1 rounded-md">
                                         이사
                                </span>
                        <span v-if="tableTransaction3.empSpot === 13"
                              class="px-3 py-1 rounded-md">
                                       부장
                                </span>
                        <span v-if="tableTransaction3.empSpot === 14"
                              class="px-3 py-1 rounded-md">
                                       과장
                                </span>
                        <span v-if="tableTransaction3.empSpot === 15"
                              class="px-3 py-1 rounded-md">
                                       대리
                                </span>
                        <span v-if="tableTransaction3.empSpot === 16"
                              class="px-3 py-1 rounded-md">
                                       주임
                                </span>
                        <span v-else
                              class="px-3 py-1 rounded-md">
                                       사원
                                </span><!--/ {{ tableTransaction3.department.deptName }}-->
                    </p>

                    <br>
                    <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border dark:border-gray-700-lg border dark:border-gray-700-blue-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                            @click="handleGoToWorkClick">
                        출근
                    </button>

                    <button class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 border dark:border-gray-700-lg border dark:border-gray-700-pink-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="button"
                            @click="handleOffToWorkClick">
                        퇴근
                    </button>
                    <br><br>
                    <p class="description">
                        <!-- {{ user.title }}-->
                        근무상태<!--/부서--> : <span v-if="tableTransaction3.empStatus === 1"
                                             class="px-3 py-1 rounded-md bg-green-500">
                                          출근 중
                                </span>
                        <span v-if="tableTransaction3.empStatus === 2"
                              class="px-3 py-1 rounded-md bg-red-500">
                                         퇴근 중
                                </span>
                    </p>
                </div>
            </div>
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
                <div class="">
                    <FullCalendar id="calendar" :options="calendarOptions"/>
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
                                    <th class="uppercase px-6 py-2" scope="col">
                                        번호
                                    </th>
                                    <th class="uppercase px-6 py-3" scope="col">
                                        제목
                                    </th>
                                    <th class="uppercase px-6 py-4" scope="col">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="items in tableTransaction1"
                                    :key="items.documentNo"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                    @click="fnEaView(`${items.documentNo}`)">
                                    <td class="px-6 py-2">
                                        {{ items.documentNo }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ items.title }}
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
                                    <th class="uppercase px-6 py-2" scope="col">
                                        번호
                                    </th>
                                    <th class="uppercase px-6 py-3" scope="col">
                                        제목
                                    </th>
                                    <th class="uppercase px-6 py-4" scope="col">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="items in tableTransaction2"
                                    :key="items.documentNo"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                    @click="fnEaApproveView(`${items.documentNo}`)">
                                    <td class="px-6 py-2">
                                        {{ items.documentNo }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ items.title }}
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
                                    <th class="uppercase px-6 py-2" scope="col">
                                        번호
                                    </th>
                                    <th class="uppercase px-6 py-3" scope="col">
                                        제목
                                    </th>
                                    <th class="uppercase px-6 py-3" scope="col">
                                        작성자
                                    </th>
                                    <th class="uppercase px-6 py-3" scope="col">
                                        작성일시
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(items, index) in tableTransaction"
                                    :key="items.noticeNo"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50">
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
            ],
            tableTransaction3: [
                {
                    empId: "EMP-123456",
                    name: "류준열씨?",
                    empStatus: "1",
                    empSpot: "17",
                    department: {
                        deptNo: "2",
                        deptName: "인사팀"
                    }
                }
            ]
        }
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
            this.noticeNo = noticeNo
            this.$router.push({
                path: '/notice/NoticeDetail',
                query: this.requestBody
            })
        },
        fnEaView(documentNo) {
            this.documentNo = documentNo
            this.$router.push({
                path: './ea/eaDetail' + documentNo,
                query: this.requestBody
            })
        },
        fnEaApproveView(documentNo) {
            this.documentNo = documentNo
            this.$router.push({
                path: './ea/eaApproval' + documentNo,
                query: this.requestBody
            })
        },
        fnEmployee() {
            this.$axios.get(this.$serverUrl + "/employee/ep/id/" +  "EMP-123456", {
                params: this.requestBody,
            }).then((res) => {
                this.tableTransaction3 = res.data;
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                }
            });
        },
        handleGoToWorkClick(){
            this.fnGoToWork();

            this.fnSaveToWork();
        },
        fnGoToWork() {
            this.$axios.patch(this.$serverUrl + '/employee/workStatus/' + "EMP-123456", {
                empId: "EMP-123456",
                empStatus: 1
            }).then((res) => {
                console.log(res.data);
                window.location.href = 'http://localhost:3030';
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnSaveToWork() {
            this.$axios.post(this.$serverUrl + '/attendance/createAtt', {
                empId: "EMP-123456",
                startTime: this.startTime,
                endTime: this.endTime
            }).then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        handleOffToWorkClick(){
            this.fnOffToWork();

            this.fnSaveOffToWork();
        },
        fnOffToWork() {
            this.$axios.patch(this.$serverUrl + '/employee/workStatus/' + "EMP-123456", {
                empId: "EMP-123456",
                empStatus: 2
            }).then((res) => {
                console.log(res.data);
                window.location.href = 'http://localhost:3030';
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnSaveOffToWork() {
            this.$axios.post(this.$serverUrl + '/attendance/createAtt', {
                empId: "EMP-123456",
                startTime: this.startTime,
                endTime: this.endTime
            }).then((res) => {
                console.log(res.data);
                window.location.href = 'http://localhost:3030';
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
    },
    mounted() { //페이지로드시 함수 적용
        this.fnGetList()
        this.fnGetEaList()
        this.fnGetEaApprovalList()
        this.fnEmployee()
    },
};
</script>
