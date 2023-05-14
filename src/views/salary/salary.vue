<template xmlns="http://www.w3.org/1999/html">
  <div class="dashboard p-4">

      <div class="grid grid-cols-2 min-h-full">
        <div class="row-span-2 p-6"><div class="bg-white p-6 rounded-lg box-border border h-full">
          <header class="text-black bg-gray-200 text-center text-3xl font-bold mb-4">사원 검색</header>

          <div class="flex items-center justify-center space-x-2 mb-4">
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
          </div>
          <div class="mb-4 flex justify-center">
            <dropdown placement="left">
              <template v-slot:button>
                <button class="flex px-9 py-3 rounded-md bg-blue-100 text-gray-400">
                  선택
                  <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                  /></span>
                </button>
              </template>
              <template v-slot:content>
                <div class="">
                  <!-- 검색 유형 옵션 추가 -->
                  <button @click="searchType = 'empId'">직원 ID</button>
                  <button @click="searchType = 'salaryDate'">급여 날짜</button>
                </div>
              </template>
            </dropdown>
            <input type="text" placeholder="Search" class="w-1/3 bg-blue-100 border-0.4 rounded-lg py-2 px-3 ml-2">
          </div>
          <template>
            <div>
              <h1>{{ greeting }}</h1>
            </div>
          </template>
        </div></div>

        <div class="p-6 h-full">
          <div class="bg-white box-border border p-6 rounded-lg shadow-lg h-full">
          <div class="flex-row">
            <div class="text-black bg-gray-200 text-center text-3xl font-bold mb-4 ml-12">급여대장


            </div>
          </div>

          <div class="grid grid-cols-4 h-full text-center p-3">
            <div>기본급 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>국민연금 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>식대 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>건강보험 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>연장수당 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>고용보험 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>직책수당 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>장기요양 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>상여급 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>소득세 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>급여 소급분 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div>연말 정산 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div class="text-2xl">합계 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div class="text-2xl">세금 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3"></div>
            <div class="col-span-2 text-4xl text-end">지급금액 :</div>
            <div class="text-xl mt-2"><input type="text" class="bg-gray-400 w-2/3 mb-2">원</div>
            <div><button class="bg-cyan-900 mb-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mr-6">등록하기</button></div>
          </div>

        </div>
          <div>

          </div>
         </div>
      </div>
    <!-- end wrapper card -->

    <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
      <div class="mt-2 w-full">
        <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
          <div>
            <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
              급여 미등록 내역 현황
            </h2>
            <p class="text-gray-400 text-base font-roboto font-regular">
              현재 결재 대기중인 작업 목록
            </p>
          </div>
        </div>
      </div>
      <perfect-scrollbar class="h-4/6 mt-5 dark:divide-gray-700">
        <div class="wrapping-table mt-10">
          <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-1/2 lg:overflow-auto overflow-y-scroll"
          >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
            <tr class="bg-gray-300">
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
      </perfect-scrollbar>


    </div>
  </div>
</template>
<script>

import Dropdown from "@/components/Dropdown.vue";


export default {
  components: {Dropdown},
  data() {
    return {
      greeting: ""
    }
  },
  mounted() {
    this.greeting = "Hello world!";
  }
}
</script>
