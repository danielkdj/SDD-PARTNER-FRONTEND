<template>
    <div class="dashboard p-4">
        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                    전자결재
                </h2>
                <div class="wrapping-table mt-10"
                >
                    <table
                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
                    >
                        <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >
                        <tr>
                            <th>
                            </th>
                            <th>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                작성자
                            </td>
                            <td class="px-6 py-4 ">
                                   {{ employee.name }} ( {{ employee.empId }} )
                            </td>
                        </tr>


                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                항목분류
                            </td>
                            <td class="px-6 py-4">
                                <select class="cursor-pointer flex px-5 py-3 rounded-md bg-blue-100 text-gray-400"
                                        v-model="categoryItem.categoryId">
                                    <option value="1">근태 : 연장근무</option>
                                    <option value="2">휴가 : 연차</option>
                                    <option value="3">휴가 : 공가</option>
                                    <option value="4">휴가 : 오전반차</option>
                                    <option value="5">휴가 : 오후반차</option>
                                    <option value="6">휴가 : 병가</option>
                                    <option value="7">휴가 : 신혼</option>
                                    <option value="8">휴가 : 출산</option>
                                    <option value="9">휴가 : 연중</option>
                                    <option value="10">휴가 : 특별</option>
                                    <option value="11">회의실 : 회의실 A</option>
                                    <option value="12">회의실 : 회의실 B</option>
                                    <option value="13">차량 : 차량 A</option>
                                    <option value="14">차량 : 차량 B</option>
                                    <option value="15">문서 : 경력증명서</option>
                                    <option value="16">문서 : 재직증명서</option>
                                </select>
                            </td>
                        </tr>
                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                제목
                            </td>
                            <td class="px-6 py-4">
                                <input
                                        type="text"
                                        placeholder=""
                                        class="p-3 w-full bg-blue-100 rounded-md outline-none"
                                        v-model="title"/>
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="px-6 py-4">
                                일시
                            </td>
                            <td class="px-6 py-4 flex flex-wrap">
                                <div class="w-60 flex">
                                    <input class="p-3 bg-blue-100 rounded-md outline-none"
                                           type="datetime-local"
                                           v-model="startDate"/>
                                </div>
                                <div>
                                    _
                                </div>
                                <div class="px-6 w-80 flex">
                                    <input class="p-3 bg-blue-100 rounded-md outline-none"
                                           type="datetime-local"
                                           v-model="endDate"/>
                                </div>
                            </td>
                        </tr>
                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                내용입력
                            </td>
                            <td class="px-6 py-4">
                                <textarea
                                        type="text"
                                        style="white-space: pre-line;"
                                        placeholder=""
                                        class="p-3 w-full h-20 bg-blue-100 rounded-md outline-none"
                                        v-model="content"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class="button-container">
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                @click="createEa"
                        >
                            신청
                        </button>
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                @click="clearForm"
                        >
                            취소
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Icon} from "@iconify/vue";
import Dropdown from "@/components/Dropdown.vue";
import axios from "axios";
import moment from "moment";

export default {
    name: "EaRequest",
    data() {
        return {
            requestBody: this.$route.query,

            employee:{
                empId: "EMP-123456",
                name: "류준열씨?",
            },
            categoryItem:{
                categoryId: "",
            },
            title: "",
            startDate: '',
            endDate: '',
            content: ""
        };
    },
    components: {
        Dropdown,
        Icon,
    },
    methods: {
        createEa() {

            this.ea = {
                title: this.title,
                startDate: moment(this.startDate).format("yyyy-MM-DD HH:mm"),
                endDate: moment(this.endDate).format("yyyy-MM-DD HH:mm"),
                content: this.content,
                approvalStatus: 1,
                categoryItem:{
                    categoryId: this.categoryItem.categoryId,
                },
                employee:{
                    empId: "EMP-123456",
                    name: this.name
                },
            };
            this.$axios.post(this.$serverUrl + '/ea/createEa', this.ea)
                .then((res) => {
                    alert('전자결재 신청 완료')
                    window.location.href = 'http://localhost:3030';
                }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
            console.log(this.ea);
        },
        clearForm() {
            // Object.assign(this.$data, this.$options.data());
            window.location.href = 'http://localhost:3030';
        },

        mounted() { //페이지로드시 함수 적용
        },
    },
};
</script>
<style>
.button-container {
    display: flex;
    justify-content: flex-end;
}
</style>