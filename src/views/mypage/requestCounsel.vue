<template>
    <div class="dashboard p-4">
        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                    상담신청
                </h2>
                <div class="wrapping-table mt-10">
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
                            <td class="px-6 py-4">
                                {{ employee.name }} ({{ employee.empId }})
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
                                    v-model="counTitle"/>
                            </td>
                        </tr>
<!--                        <tr class="bg-white border-b">-->
<!--                            <td class="px-6 py-4">-->
<!--                                일시-->
<!--                            </td>-->
<!--                            <td class="px-6 py-4 flex flex-wrap">-->
<!--                                <div class="w-60 flex">-->
<!--                                    <input class="p-3 bg-blue-100 rounded-md outline-none"-->
<!--                                           type="date"-->
<!--                                           v-model="requestAt"/>-->
<!--                                </div>-->
<!--                            </td>-->
<!--                        </tr>-->
                        <tr
                            class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                내용입력
                            </td>
                            <td class="px-6 py-4">
                                <ckeditor :editor="editor" v-model="counContent" :config="editorConfig"></ckeditor>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class="flex justify-end">
                        <button
                            type="button"
                            class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            @click="createCounsel"
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
import { ref } from 'vue';
import Dropdown from "@/components/Dropdown.vue";
import {Icon} from "@iconify/vue";
import moment from "moment/moment";
import Editor from 'ckeditor5-custom-build/build/ckeditor';

const date = ref(new Date());

export default {
    name: "EaRequest",
    data() {
        return {
            requestBody: this.$route.query,

            employee:{
                empId: "EMP-123456",
                name: "",
            },
            counTitle: "",
            counContent: '',

            //Editor 변수
            editor: Editor,
            editorData: '',
            editorConfig: {
                language: 'ko',
            },
        };
    },
    components: {
        Dropdown,
        Icon,
    },
    methods: {
        createCounsel() {
            this.coun = {
                employee:{
                    empId: this.employee.empId,
                },
                counTitle: this.counTitle,
                counContent: this.counContent,
            };
            this.$axios.post(this.$serverUrl + '/coun/create', this.coun)
                .then((res) => {
                    alert('상담 신청 완료')
                    window.location.href = 'http://localhost:3030';
                }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
            console.log(this.coun);
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
