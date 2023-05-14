<template>
  <!-- Search component button with name of type, press Ctrl + F -->
  <div class="w-full h-screen">
    <div class="container bg-gray-200 mx-auto h-full">
      <div class="grid grid-cols-2 min-h-full gap-4">
        <div class="row-span-2 p-6"><div class="bg-white p-6 rounded-lg shadow-lg h-full">
          <header class="text-black text-center text-3xl font-bold mb-4">사원 검색</header>
          <hr>
          <div class="flex items-center justify-center space-x-2 mb-4">
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
          </div>
          <div class="mb-4 flex justify-center">
            <select class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 mr-2">
              <option value="">검색 구분</option>
              <option value="option1">사 번</option>
              <option value="option2">부 서</option>
              <option value="option3">이 름</option>
            </select>
            <input type="text" placeholder="Search" class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 ml-2">
          </div>
          <template>
            <div>
              <h1>{{ greeting }}</h1>
            </div>
          </template>
        </div></div>
        <div class="p-6 h-full"><div class="bg-white p-6 rounded-lg shadow-lg h-full">
          <header class="text-black text-center text-3xl font-bold mb-4">사원 리스트</header>
          <hr>


        </div></div>
        <div class="p-6"><div class="bg-white p-6 rounded-lg shadow-lg h-full">
          <div class="flex-row">
            <div class="text-black text-center text-3xl font-bold mb-4 ml-12">급여대장
              <button class="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mr-6">등록</button>

            </div>
          </div>
          <hr>
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
            <div><input type="text" class="bg-gray-400 w-2/3 mb-2">


            </div>
          </div>

        </div></div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/views/components/button.vue";

export default {
  components: {Button},
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
