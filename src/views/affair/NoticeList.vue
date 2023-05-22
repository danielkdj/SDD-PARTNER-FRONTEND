<template>
    <HomeLink :homeLink="homeLink"/>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen" >
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
                    <input
                            v-model = "search"
                            type="text"
                            placeholder="SearchTitle..."
                            class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                    />
                </div>
            </div>
            <button v-on:click="fnWrite" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">등록</button>
        </div>
        <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
            <div class="wrapping-table mt-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                        <tr>
                            <th scope="col" class="uppercase px-6 py-2" >
                                번호
                            </th>
                            <th scope="col" class="uppercase px-6 py-3" >
                                제목
                            </th>
                            <th scope="col" class="uppercase px-6 py-3" >
                                작성자
                            </th>
                            <th scope="col" class="uppercase px-6 py-3" >
                                작성일시
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                             v-for="(items, index) in tableTransaction"
                              :key="items.noticeNo" >
                            <td class="px-6 py-2">
                                {{tableTransaction.length - index}}
                            </td>
                            <td class="px-6 py-4">
                                <a v-on:click="fnView(`${items.noticeNo}`)">{{ items.title }}</a>
                            </td>
                            <td class="px-6 py-4">
                                {{ items.users.userName }}
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
</template>

<script>
import HomeLink from "@/components/HomeLink.vue";
import {ref} from "vue";

export default {
    name: "NoticeList",
    components: {HomeLink},
    data() { //변수생성
        return {
            //검색용
            search: '',
            //link 변수
            homeLink: {
                name1: "Affair",
                name2: "NoticeList",
                link1: "/Affairs",
                link2: "/NoticeList",
                link3: "#",
            },
            requestBody:{},
            tableTransaction  : ref([]),
        }
    },
    watch: {
        search: function(newVal) {
            console.log(newVal)
            this.fnGetList(newVal)
        }
    },
    methods: {
        fnGetList(search) { //스프링 부트통해 DB에서 전송받은 list 출력 처리
            let url = this.$serverUrl + "/notice"
            if(search){
                url += "/search/" + search
            }
            this.$axios.get(url, {
                params: this.requestBody,
                headers: {}
            }).then((res) => {

                this.tableTransaction = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnWrite() {
            this.$router.push({
                path: './NoticeWrite'
            })
        },
        fnView(noticeNo) {
            this.requestBody.noticeNo = noticeNo
            this.$router.push({
                path: './NoticeDetail',
                query: this.requestBody
            })
        },
    },
    mounted() { //페이지로드시 함수 적용
        this.fnGetList()
    }
}
</script>
