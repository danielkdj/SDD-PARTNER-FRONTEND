<template>
    <div class="dashboard p-4">
        <div class="mt-2 lg:flex block lg:gap-2 relative">
            <div
                    class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
            >
                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                    전자결재
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
                                사원명
                            </td>
                        </tr>

                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                항목
                            </td>
                            <td class="px-6 py-4">
                                <dropdown placement="left">
                                    <template v-slot:button>
                                        <button class="flex px-5 py-3 rounded-md bg-blue-100 text-gray-400">
                                            선택
                                            <span class="ml-5 mt-1"
                                            ><Icon icon="ant-design:caret-down-filled"
                                            /></span>
                                        </button>
                                    </template>
                                    <template v-slot:content>
                                        <div class="">
                                            <a
                                                    href="#"
                                                    class="block hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 1</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 2</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 3</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 4</a
                                            >
                                        </div>
                                    </template>
                                </dropdown>
                            </td>
                        </tr>
                        <tr
                                class="bg-white border-b "
                        >
                            <td class="px-6 py-4">
                                항목분류
                            </td>
                            <td class="px-6 py-4">
                                <dropdown placement="left">
                                    <template v-slot:button>
                                        <button class="flex px-5 py-3 rounded-md bg-blue-100 text-gray-400">
                                            선택
                                            <span class="ml-5 mt-1"
                                            ><Icon icon="ant-design:caret-down-filled"
                                            /></span>
                                        </button>
                                    </template>
                                    <template v-slot:content>
                                        <div class="">
                                            <a
                                                    href="#"
                                                    class="block hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 1</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 2</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 3</a
                                            >
                                            <a
                                                    href="#"
                                                    class="block mt-4 hover:bg-blue-100 hover:text-gray-400 px-4 py-2"
                                            >Action 4</a
                                            >
                                        </div>
                                    </template>
                                </dropdown>
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
                                />
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="px-6 py-4">
                                일시
                            </td>
                            <td class="px-6 py-4 flex flex-wrap">
                                <div class="w-60 flex">
                                    <input class="p-3 bg-blue-100 rounded-md outline-none" type="datetime-local"/>
                                </div>
                                <p>_</p>
                                <div class="px-6 w-80 flex">
                                    <input class="p-3 bg-blue-100 rounded-md outline-none" type="datetime-local"/>
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
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class="flex ">
                        <p class="px-6 text-sm dark:text-gray-400">
                            1차 결재자
                            <input
                                    type="text"
                                    placeholder=""
                                    class="p-3 w-full bg-gray-100 rounded-md outline-none"
                            />
                        </p>
                        <p class="px-6 text-sm dark:text-gray-400">
                            2차 결재자
                            <input
                                    type="text"
                                    placeholder=""
                                    class="p-3 w-full bg-gray-100 rounded-md outline-none"
                            />
                        </p>
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            결재자 선택
                        </button>
                    </div>
                    <div class="button-container">
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            신청
                        </button>
                        <button
                                type="button"
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 border dark:border-gray-700-lg border dark:border-gray-700-red-500/50 dark:border dark:border-gray-700-lg dark:border dark:border-gray-700-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
import { Icon } from "@iconify/vue";
import Dropdown from "@/components/Dropdown.vue";
export default {
    components: {
        Dropdown,
        Icon,
    },
    methods: {
        alert() {
            alert("Hello");
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