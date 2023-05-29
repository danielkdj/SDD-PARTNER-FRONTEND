<template>
    <div class="h-3/5 mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
        <!--        <div class="h-1/6 flex items-center justify-end gap-x-6">-->
        <!--            <button type="button" v-on:click="fnYes" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">승인</button>-->
        <!--            <button type="button" v-on:click="fnNo" class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">반려</button>-->
        <!--            <button type="button" v-on:click="fnList" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>-->
        <!--        </div>-->
        <perfect-scrollbar class="h-5/6 dark:divide-gray-700">
            <div>
                <form>
                    <div class="space-y-5">
                        <div class="grid grid-cols-12 gap-4">
                            <label for="documentNo"
                                   class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                문서 번호
                            </label>
                            <div class="col-span-10">
                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                >{{ documentNo }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                작성자
                            </label>
                            <div class="col-span-10">
                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                >{{ employee.name }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <label for="category"
                                   class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                항목
                            </label>
                            <div class="col-span-10">
                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                >{{ categoryItem.category }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <label for="subCategory"
                                   class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                항목구분
                            </label>
                            <div class="col-span-10">
                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                >{{ categoryItem.subCategory }}</p>
                            </div>
                        </div>
                        <!--                        <div class="grid grid-cols-12 gap-4">-->
                        <!--                            <label for="createdAt" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">-->
                        <!--                                작성일시-->
                        <!--                            </label>-->
                        <!--                            <div class="col-span-10">-->
                        <!--                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"-->
                        <!--                                >{{createdAt}}</p>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <div class="grid grid-cols-12 gap-4">
                            <label for="date" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                사용일시
                            </label>
                            <div class="col-span-10">
                                <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                >{{ startDate }} ~ {{ endDate }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <label for="contents"
                                   class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                                내용
                            </label>
                            <div class="col-span-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6">
                                {{ content }}
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="button-container">
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                @click="fnEaApprove" >
                            승인
                        </button>
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                @click="fnEaReject" >
                            반려
                        </button>
                    </div>
                </form>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
import {Icon} from "@iconify/vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
    name: "EaDetail",
    data() {
        return {
            requestBody: this.$route.query,
            documentNo: this.$route.query.documentNo,
            title: "",
            startDate: "",
            endDate: "",
            content: "",
            approvalStatus: "",
            categoryItem: {
                category: "",
                subCategory: "",
            },
            employee: {
                empId: "",
                name: ""
            },
            //tableTransaction: ref([]),
        };
    },
    components: {
        Dropdown,
        Icon,
    },

    // watch: {
    //     search: function(newVal) {
    //         console.log(newVal)
    //         this.fnGetList(newVal)
    //     }
    // },
    mounted() { //페이지로드시 함수 적용
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/ea/eaDetail/' + this.documentNo, {
                params: this.requestBody
            }).then((res) => {
                console.log(res.data);
                    this.categoryItem.category = res.data.categoryItem.category,
                    this.categoryItem.subCategory = res.data.categoryItem.subCategory,
                    this.employee.name = res.data.employee.name,
                    this.title = res.data.title,
                    this.content = res.data.content,
                    this.createdAt = res.data.createdAt,
                    this.startDate = res.data.startDate,
                    this.endDate = res.data.endDate,
                    this.approvalStatus = res.data.approvalStatus;
                window.location.href = 'http://localhost:3030';
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnEaApprove() {
            this.$axios.put(this.$serverUrl + '/ea/eaApprovalStatus/' + this.documentNo, {
                param: this.documentNo,
                params: this.requestBody
            }).then((res) => {
                console.log(res.data);
                    this.documentNo = res.data.documentNo,
                    this.title = res.data.title,
                    this.content = res.data.content,
                    this.createdAt = res.data.createdAt,
                    this.startDate = res.data.startDate,
                    this.endDate = res.data.endDate,
                    this.approvalStatus = res.data.approvalStatus
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnEaReject() {
            this.$axios.put(this.$serverUrl + '/ea/eaRejectStatus/' + this.documentNo, {
                param: this.documentNo,
                params: this.requestBody
            }).then((res) => {
                console.log(res.data);
                    this.documentNo = this.documentNo,
                    this.title = res.data.title,
                    this.content = res.data.content,
                    this.createdAt = res.data.createdAt,
                    this.startDate = res.data.startDate,
                    this.endDate = res.data.endDate,
                    this.approvalStatus = res.data.approvalStatus
            }).catch((err) => {
                console.log("error!")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
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