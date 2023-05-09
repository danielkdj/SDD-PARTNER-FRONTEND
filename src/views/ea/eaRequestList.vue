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
                        <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                v-for="items in tableTransaction"
                                :key="items.transaction"
                        >
                            <td class="px-6 py-4">
                                {{ items.transaction }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.item }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.sub_item }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.datetime1 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.datetime2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.status }}
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
import { Icon } from "@iconify/vue";

export default {

    name: "Dashboard",
    data() {
        return {
            tableTransaction: [
                {
                    transaction: "1",
                    item: "휴가",
                    sub_item: "연차",
                    title: "연차 사용",
                    datetime1: "2019.04.09",
                    datetime2: "2019.04.10 ~ 2019.04.12",
                    status: "완료",
                },
                {
                    transaction: "1",
                    item: "휴가",
                    sub_item: "포상휴가",
                    title: "포상휴가 사용",
                    datetime1: "2019.04.19",
                    datetime2: "2019.04.20 ~ 2019.04.22",
                    status: "대기",
                },
                {
                    transaction: "1",
                    item: "휴가",
                    sub_item: "공가",
                    title: "공가 사용",
                    datetime1: "2019.04.09",
                    datetime2: "2019.04.10 ~ 2019.04.12",
                    status: "반려",
                },
                {
                    transaction: "1",
                    item: "휴가",
                    sub_item: "연차",
                    title: "연차 사용",
                    datetime1: "2019.04.09",
                    datetime2: "2019.04.10 ~ 2019.04.12",
                    status: "대기",
                },
                {
                    transaction: "1",
                    item: "차량",
                    sub_item: "차량A 신청",
                    title: "회사 차량 신청",
                    datetime1: "2019.04.10",
                    datetime2: "2019.04.10 ~ 2019.04.10",
                    status: "완료",
                },

            ],
        };
        // end chart data line
    },
    components: {
        Icon,
    },
    mounted() {},
};
</script>
