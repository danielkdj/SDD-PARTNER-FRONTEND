<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-6 flex items-center justify-end gap-x-6">
        <select
                v-model="s_category"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-항목선택-</option>
            <option value="A회의실">A회의실</option>
            <option value="B회의실">B회의실</option>
            <option value="C회의실">C회의실</option>
        </select>
        <select
                v-model="s_status"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option default value="">-상태-</option>
            <option value="1">처리 전</option>
            <option value="2">반려</option>
            <option value="3">승인</option>
        </select>
        <button type="button" v-on:click="fnSearch" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700-600">검색</button>
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
            신청자
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
            작성일시
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
          <td class="px-6 py-2">
              {{ items.doc_no }}
          </td>
          <td class="px-6 py-4">
              {{ items.sub_category }}
          </td>
          <td class="px-6 py-4">
              <a v-on:click="fnView(`${items.doc_no}`)">{{ items.title }}</a>
          </td>
          <td class="px-6 py-4">
              {{ items.writer }}
          </td>
          <td class="px-6 py-4">
              {{ items.dept_name }}
          </td>
          <td class="px-6 py-4">
              {{ items.created_at }}
          </td>
            <td class="px-6 py-4">
              {{ items.start_date }} ~ {{ items.end_date }}
          </td>
          <td class="px-6 py-4">
        <span
          class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
          v-if="items.status == '승인'"
        >
          {{ items.status }}
        </span>
          <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.status == '승인전'"
          >
          {{ items.status }}
        </span>
          <span
            class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
            v-else
          >
          {{ items.status }}
        </span>
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
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      s_category : '',
      s_status : '',
      tableTransaction: [
        {
        doc_no : 123,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at:'2023-05-04 23:24:00',
        start_date:'2023-05-05 23:24:00',
        end_date:'2023-05-05 23:24:00',
        status: '승인전',
        },

        {
        doc_no : 125,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at: '2023-05-03 23:24:00',
        start_date: '2023-05-03 23:24:00',
        end_date: '2023-05-03 23:24:00',
        status: '반려',
        },
      ]
    }
  },
    methods: {
        fnView(doc_no) {
            this.requestBody.doc_no = doc_no
            this.$router.push({
                path: './RoomApprove',
                query: this.requestBody
            })
        },
        fnSearch(){
            this.requestBody = {
                category : this.s_category,
                status : this.s_status
            }

            this.$axios.get(this.$serverUrl + "/RoomList", {
                params: this.requestBody,
                headers: {}
            }).then((res)=>{
                if (res.data.result_code === "OK") {
                    this.list = res.data.data
                }

            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        }
    }
}
</script>
