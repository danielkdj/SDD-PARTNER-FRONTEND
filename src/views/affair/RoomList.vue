<template>
  <HomeLink :homeLink="homeLink"/>
  <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700 h-screen"
  >
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <select
              v-model="search.category"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
          <option value="">-항목선택-</option>
          <option value="A회의실">A회의실</option>
          <option value="B회의실">B회의실</option>
          <option value="C회의실">C회의실</option>
      </select>
      <select
              v-model="search.status"
              class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
      >
          <option value="">-상태-</option>
          <option value="1">처리 전</option>
          <option value="2">반려</option>
          <option value="3">승인</option>
      </select>
<!--      <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>-->
    </div>
    <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
    <div class="wrapping-table mt-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="(items, index) in tableTransaction"
              :key="items.transaction" >
          <td class="px-6 py-2">
              {{tableTransaction.length - index}}
          </td>
          <td class="px-6 py-4">
              {{ items.categoryId }}
          </td>
          <td class="px-6 py-4">
              <a v-on:click="fnView(`${items.documentNo}`)">{{ items.title }}</a>
          </td>
          <td class="px-6 py-4">
              {{ items.name }}
          </td>
          <td class="px-6 py-4">
              {{ items.deptNo }}
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
              v-if="items.status === 1">
              처리 전
            </span>
            <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.status === 2">
              반려
            </span>
            <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                  v-else        >
              승인
            </span>
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
  name: "RoomList",
  components: {HomeLink},
  data() { //변수생성
    return {
      //link 변수
      homeLink: {
        name1: "Affair",
        name2: "RoomList",
        link1: "/Affairs",
        link2: "/RoomList",
        link3: "#",
      },
      requestBody: this.$route.query,
      //검색용 변수
      search : {
        category: '',
        status: '',
      },
      tableTransaction : ref([
        {
          name : '',
          title : '',
          categoryId :'',
          createdAt : '',
          deptNo : '',
          documentNo : '',
          empId : '',
          endDate : '',
          startDate: ''
        }
      ]),
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
      let url = this.$serverUrl + "/use/list/1"
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
    fnView(documentNo) {
        this.requestBody.documentNo = documentNo
        this.$router.push({
            path: './RoomApprove',
            query: this.requestBody
        })
    },
  },
  mounted() {
    this.fnGetList()
  }
}
</script>
