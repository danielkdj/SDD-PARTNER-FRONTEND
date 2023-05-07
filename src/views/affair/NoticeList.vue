<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
    >
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <div class="flex flex-no-shrink items-center">
                <button
                        class="text-gray-500 lg:hidden ml-3 block"
                        @click="$emit('sidebarToggle', true)"
                >
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="2em"
                            height="2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 16 16"
                    >
                        <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                        />
                    </svg>
                </button>
                <div
                        class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"
                >
                  <span class="text-3xl p-2 text-gray-400">
                      <Icon icon="ei:search"/>
                  </span>
                    <input
                            v-model = 's_title'
                            type="text"
                            placeholder="SearchTitle..."
                            class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                    />
                </div>
            </div>
            <button type="button" v-on:click="fnSearch" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">검색</button>
            <button type="button" v-on:click="fnWrite" class="rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">등록</button>
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
                            class="uppercase px-6 py-2"
                    >
                        번호
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
                        작성자
                    </th>
                    <th
                            scope="col"
                            class="uppercase px-6 py-3"
                    >
                        작성일시
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                        v-for="items in tableTransaction"
                        :key="items.transaction"
                >
                    <td class="px-6 py-2">
                        {{ items.notice_no }}
                    </td>
                    <td class="px-6 py-4">
                        <a v-on:click="fnView(`${items.notice_no}`)">{{ items.title }}</a>
                    </td>
                    <td class="px-6 py-4">
                        {{ items.writer }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.created_at }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    name: "NoticeList",
    data() { //변수생성
        return {
            //검색용
            s_title: '',
            requestBody: this.$route.query,
            tableTransaction: [
                {
                    notice_no: 1,
                    title: '제목',
                    writer: '작성자',
                    contents: '내용',
                    created_at: '작성일시',
                },

                {
                    notice_no: 2,
                    title: '제목',
                    writer: '작성자',
                    contents: '내용',
                    created_at: '작성일시',
                },
            ]
        }
    },
    methods: {
        fnWrite() {
            this.$router.push({
                path: './NoticeWrite'
            })
        },
        fnView(notice_no) {
            this.requestBody.notice_no = notice_no
            this.$router.push({
                path: './NoticeDetail',
                query: this.requestBody
            })
        },
        fnSearch(){
            this.requestBody = {
                title: this.s_title
            }
            this.$axios.get(this.$serverUrl + "/notice/list",{
                params: this. requestBody,
                headers: {}
            }).then((res)=>{
                this.list = res.data.data
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        }
    }
}
</script>
