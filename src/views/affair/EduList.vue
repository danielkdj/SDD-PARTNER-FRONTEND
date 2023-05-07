<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
  >
    <div class="mt-3 flex items-center justify-end gap-x-2">
      <select
              name="sub_category"
              id="sub_category"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
        <option value="">-항목구분-</option>
        <option value="1">산업안전보건교육</option>
        <option value="2">성희롱예방교육</option>
        <option value="3">개인정보보호교육</option>
        <option value="4">장애인인식개선교육</option>
        <option value="5">퇴직연금교육</option>
      </select>
      <div class="flex min-h-full flex-col lg:px-7">
        <input
                type="date"
                class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
        />
      </div>
      ~
      <div class="flex min-h-full flex-col lg:px-7">
        <input
                type="date"
                class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
        />
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
            교육진행자
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            교육장소
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            교육인원
          </th>
          <th
            scope="col"
            class="uppercase px-6 py-3"
          >
            교육일시
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
              {{ items.edu_no }}
          </td>
          <td class="px-6 py-4">
              {{ items.leg_id }}
          </td>
          <td class="px-6 py-4">
              <a v-on:click="fnView(`${items.edu_no}`)">{{ items.edu_title }}</a>
          </td>
          <td class="px-6 py-4">
              {{ items.presenter }}
          </td>
          <td class="px-6 py-4">
              {{ items.location }}
          </td>
          <td class="px-6 py-4">
              {{ items.edu_count }}
          </td>
          <td class="px-6 py-4">
              {{ items.edu_start }} ~ {{ items.edu_end }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EduList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
        s_category: '',
        s_start: '',
        s_end: '',

      tableTransaction: [
        {
            edu_no: 1,
            leg_id: '산업안전보건교육',
            edu_title: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            edu_count: 23,
            edu_start: '2023-02-18 23:24:00',
            edu_end: '2023-02-19 23:24:00',
        },
        {
            edu_no: 2,
            leg_id: '성희롱예방교육',
            edu_title: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            edu_count: 23,
            edu_start: '2023-02-18 23:24:00',
            edu_end: '2023-02-19 23:24:00',
        },
        {
            edu_no: 3,
            leg_id: '개인정보보호교육',
            edu_title: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            edu_count: 23,
            edu_start: '2023-02-18 23:24:00',
            edu_end: '2023-02-19 23:24:00',
        },
        {
            edu_no: 4,
            leg_id: '장애인인식개선교육',
            edu_title: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            edu_count: 23,
            edu_start: '2023-02-18 23:24:00',
            edu_end: '2023-02-19 23:24:00',
        },
        {
            edu_no: 5,
            leg_id: '퇴직연금교육',
            edu_title: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            edu_count: 23,
            edu_start: '2023-02-18 23:24:00',
            edu_end: '2023-02-19 23:24:00',
        },
      ]
    }
  },
  methods: {
    fnWrite() {
        this.$router.push({
            path: './EduWrite'
        })
    },
    fnView(edu_no) {
        this.requestBody.edu_no = edu_no
        this.$router.push({
            path: './EduDetail',
            query: this.requestBody
        })
    },
    fnSearch(){
        this.requestBody = {
            category: this.s_category,
            start : this.s_start,
            end : this.s_end,
        }
        this.$axios.get(this.$serverUrl + "/edu/list",{
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
