<template>
    <div class="dashboard p-4">

        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                    발령정보 조회
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
                                소속부서
                            </th>
                            <th
                                scope="col"
                                class="uppercase px-6 py-3"
                            >
                                소속팀
                            </th>
                            <th
                                scope="col"
                                class="uppercase px-6 py-3"
                            >
                                발령날짜
                            </th>
                            <th
                                scope="col"
                                class="uppercase px-6 py-3"
                            >
                                근무기간
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
                                {{ items.datetime }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.amount }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.statusTransaction }}
                            </td>
                            <td class="px-6 py-4">
                                {{ items.datetime2 }}
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
                    datetime: "IT 개발부서",
                    amount: "개발 3팀",
                    statusTransaction: "2019.04.10",
                    datetime2: "2019.04.10 ~ 2022.12.23",
                },
                {
                    transaction: "2",
                    datetime: "IT 개발부서",
                    amount: "개발 1팀",
                    statusTransaction: "2017.04.19",
                    datetime2: "2017.04.19 ~ 2019.04.10",
                },
                {
                    transaction: "3",
                    datetime: "IT 개발부서",
                    amount: "개발 2팀",
                    statusTransaction: "2012.04.12",
                    datetime2: "2012.04.12 ~ 2017.04.19",
                },
                {
                    transaction: "4",
                    datetime: "IT 개발부서",
                    amount: "개발 1팀",
                    statusTransaction: "2010.03.10",
                    datetime2: "2010.03.10 ~ 2012.04.12",
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
