<template>
    <div class="dashboard p-4">

        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                    전자결재 신청내역
                </h2>
                <div class="wrapper-button flex justify-between mt-3">
                    <p
                            class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
                    >
                        현재날짜
                    </p>
                    <div
                            class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"
                    >
                      <span class="text-3xl p-2 text-gray-400"
                      ><Icon icon="ei:search"
                      /></span>
                        <input
                                type="text"
                                placeholder="Search..."
                                class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                        />
                    </div>
                </div>
                <div class="wrapping-table mt-10">
                    <table
                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
                    >
                        <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >
                        <tr>
                            <th
                                    scope="col"
                                    class="uppercase px-6 py-3"
                            >
                                번호
                            </th>
                            <th
                                    scope="col"
                                    class="uppercase px-6 py-3"
                            >
                                항목
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
                                신청일시
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
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                            v-for="items in tableTransaction"
                            :key="items.documentNo"
                            @click="fnEaView(`${items.documentNo}`)">
                            <td class="px-6 py-4">
                                {{ items.documentNo }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.categoryItem.category }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.categoryItem.subCategory }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.createdAt }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.startDate }} - {{ items.endDate }}
                            </td>
                            <td class="px-6 py-4">
                                <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                                      v-if="items.approvalStatus === 1">
                                          처리 전
                                </span>
                                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                                      v-else-if="items.approvalStatus === 2">
                                         승인
                                </span>
                                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                                      v-else>
                                       반려
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import {Icon} from "@iconify/vue";

export default {
    name: "EaRequestList",

    components: {
        Icon,
    },
    data() {
        return {
            requestBody: {},
            tableTransaction: [
                {
                    documentNo: '',
                    title: '',
                    content: '',
                    startDate: '',
                    endDate: '',
                    approvalStatus: '',
                    createdAt: '',
                    categoryItem: {
                        category: '',
                        subCategory: ''
                    },
                    employee: {
                        empId: '',
                        name: ''
                    }
                }
            ],
        };
    },
    methods: {
        fnGetEaApprovalList() {
            this.$axios.get(this.$serverUrl + "/ea/eaList", {
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

        fnEaView(documentNo) {
            this.requestBody.documentNo = documentNo
            this.$router.push({
                path: './eaDetail',
                query: this.requestBody
            })
        },
    },
    mounted() { //페이지로드시 함수 적용
        this.fnGetEaApprovalList()
    },
    // computed: {
    //     getStatusText() {
    //         return function(approvalStatus) {
    //             if (approvalStatus === 1) {
    //                 return '대기';
    //             } else if (approvalStatus === 2) {
    //                 return '승인';
    //             } else if (approvalStatus === 3) {
    //                 return '반려';
    //             } else {
    //                 return '';
    //             }
    //         };
    //     }
    // },
};
</script>
