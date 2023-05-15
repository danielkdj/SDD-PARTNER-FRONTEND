<template>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen">
    <div class="mt-3 flex items-center justify-end gap-x-6">
      <select v-model ='sCategory'
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
        <option value="">-항목구분-</option>
        <option value="1">산업안전보건교육</option>
        <option value="2">성희롱예방교육</option>
        <option value="3">개인정보보호교육</option>
        <option value="4">장애인인식개선교육</option>
        <option value="5">퇴직연금교육</option>
    </select>
    <input
            v-model ='sStart'
            type="date"
            class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
    />
    ~
    <input
            v-model ='sEnd'
            type="date"
            class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
    />
    <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>
    <button v-on:click="fnWrite" class="bg-amber-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">등록</button>
    </div>
    <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
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
                {{ items.eduNo }}
            </td>
            <td class="px-6 py-4">
                {{ items.legId }}
            </td>
            <td class="px-6 py-4">
                <a v-on:click="fnView(`${items.eduNo}`)">{{ items.eduTitle }}</a>
            </td>
            <td class="px-6 py-4">
                {{ items.presenter }}
            </td>
            <td class="px-6 py-4">
                {{ items.location }}
            </td>
            <td class="px-6 py-4">
                {{ items.eduCount }}
            </td>
            <td class="px-6 py-4">
                {{ items.eduStart }} ~ {{ items.eduEnd }}
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: "EduList",
  data() { //변수생성
    return {
      requestBody: this.$route.query,
        //검색용 변수
        sCategory: '',
        sStart:'',
        sEnd:'',

      tableTransaction: [
        {
            eduNo: 1,
            legId: '산업안전보건교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },
        {
            eduNo: 2,
            legId: '성희롱예방교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },
        {
            eduNo: 3,
            legId: '개인정보보호교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },
        {
            eduNo: 4,
            legId: '장애인인식개선교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },
        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
        },        {
            eduNo: 5,
            legId: '퇴직연금교육',
            eduTitle: '교육제목',
            presenter: '교육진행자',
            location: '교육장소',
            eduCount: 23,
            eduStart: '2023-02-18 23:24:00',
            eduEnd: '2023-02-19 23:24:00',
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
    fnView(eduNo) {
        this.requestBody.eduNo = eduNo
        this.$router.push({
            path: './EduDetail',
            query: this.requestBody
        })
    },
    fnSearch(){
        this.requestBody = {
            category: this.sCategory,
            start : this.sStart,
            end : this.sEnd,
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
