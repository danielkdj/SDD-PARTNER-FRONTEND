<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-3 flex items-center justify-end gap-x-2">
        <select v-model="s_category"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-항목구분-</option>
            <option value="A">A회의실</option>
            <option value="B">B회의실</option>
        </select>
        <div class="flex min-h-full flex-col lg:px-7">
          <input
                  v-model="s_start"
                  type="date"
                  class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
        ~
        <div class="flex min-h-full flex-col lg:px-7">
          <input
                  v-model="s_end"
                  type="date"
                  class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
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
              {{ items.title }}
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
              v-if="items.status == '사용완료'"
            >
              {{ items.status }}
            </span>
              <span
                      class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                      v-else-if="items.status == '사용중'"
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
export default {
  name: "RoomList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
        //검색용 변수
        s_category:'',
        s_start:'',
        s_end:'',
      tableTransaction: [
        {
        doc_no: 1,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at: '2023-05-03 23:24:00',
        start_date: '2023-05-03 23:24:00',
        end_date: '2023-05-03 23:24:00',
        status: '',
        },

        {
        doc_no: 2,
        sub_category: '항목구분',
        title: '제목',
        writer: '작성자',
        dept_name: '소속부서',
        created_at: '2023-05-03 23:24:00',
        start_date: '2023-05-03 23:24:00',
        end_date: '2023-05-03 23:24:00',
        status: '',
        },
      ]
    }
  },
  methods:{
    setStatus(){
      let now = new Date();
      for (let i = 0; i < this.tableTransaction.length; i++) {
        let transaction = this.tableTransaction[i];
        let startD = new Date(transaction.start_date);
        let endD = new Date(transaction.end_date);

        if (startD > now) {
            transaction.status = '사용전';
        }
        if (startD <= now && endD >= now) {
            transaction.status = '사용중';
        }else{
            transaction.status = '사용완료';
        }
      }
    },
    fnSearch(){
        this.requestBody = {
            category : this.s_category,
            start : this.s_start,
            end : this.s_end,
        }

        this.$axios.get(this.$serverUrl + "/RoomSchedule", {
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
  },
  mounted() { //페이지로드시 함수 적용
      this.setStatus()
  },
}
</script>
