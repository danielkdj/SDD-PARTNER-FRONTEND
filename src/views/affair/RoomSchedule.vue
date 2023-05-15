<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-3 flex items-center justify-end gap-x-2">
        <select v-model="sCategory"
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
        >
            <option value="">-항목구분-</option>
            <option value="A">A회의실</option>
            <option value="B">B회의실</option>
        </select>
        <div class="flex min-h-full flex-col lg:px-7">
          <input
                  v-model="sStart"
                  type="date"
                  class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
        ~
        <div class="flex min-h-full flex-col lg:px-7">
          <input
                  v-model="sEnd"
                  type="date"
                  class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
        <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>

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
              {{ items.docNo }}
          </td>
          <td class="px-6 py-4">
              {{ items.subCategory }}
          </td>
          <td class="px-6 py-4">
              {{ items.title }}
          </td>
          <td class="px-6 py-4">
              {{ items.writer }}
          </td>
          <td class="px-6 py-4">
              {{ items.deptName }}
          </td>
          <td class="px-6 py-4">
              {{ items.createdAt }}
          </td>
            <td class="px-6 py-4">
              {{ items.startDate }} ~ {{ items.endDate }}
          </td>
          <td class="px-6 py-4">
            <span
              class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
              v-if="items.status === '사용완료'"
            >
              {{ items.status }}
            </span>
              <span
                      class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                      v-else-if="items.status === '사용중'"
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
        sCategory:'',
        sStart:'',
        sEnd:'',
      tableTransaction: [
        {
        docNo: 1,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
        status: '',
        },

        {
        docNo: 2,
        subCategory: '항목구분',
        title: '제목',
        writer: '작성자',
        deptName: '소속부서',
        createdAt: '2023-05-03 23:24:00',
        startDate: '2023-05-03 23:24:00',
        endDate: '2023-05-03 23:24:00',
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
        let startD = new Date(transaction.startDate);
        let endD = new Date(transaction.endDate);

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
            category : this.sCategory,
            start : this.sStart,
            end : this.sEnd,
        }

        this.$axios.get(this.$serverUrl + "/RoomSchedule", {
            params: this.requestBody,
            headers: {}
        }).then((res)=>{
            if (res.data.resultCode === "OK") {
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
