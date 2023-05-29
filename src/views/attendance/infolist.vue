<template>
  <div class="w-full h-screen">
    <div class="container bg-gray-200 mx-auto h-full">
      <div class="grid grid-row-2 h-full">
        <div class="h-full">
          <div class="bg-white p-6 rounded-lg shadow-lg h-full">
            <header class="text-black text-3xl font-bold mb-4">총 사원수</header>
            <hr>
            <div class="mb-4 flex justify-center mt-3">
              <select class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 mr-2">
                <option value="">검색 구분</option>
                <option value="option1">사 번</option>
                <option value="option2">부 서</option>
                <option value="option3">이 름</option>
              </select>
              <input type="text" placeholder="Search" class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 ml-2">
            </div>
            <perfect-scrollbar class="divide-y h-full mt-5 dark:divide-gray-700">
              <div class="p-3 w-full">
                <div class="flex gap-5  place-content-between">

                  <div>
                    <img
                        class="w-14 rounded-md"
                        src="@/assets/img/user1.png"
                        alt=""
                    />
                  </div>

                  <div class="mt-1">
                    <h2 class="dark:text-gray-200">김동준</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      IT 1팀 /  팀장
                    </p>


                  </div>
                  <div>
                    <button class="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">x</button>
                  </div>


                </div>
              </div>
            </perfect-scrollbar>


            <div class="bg-white hover:bg-gray-400 text-black text-3xl font-bold py-2 px-4 rounded">5명</div>
          </div>
        </div>
        <div class="h-full">
          <div class="bg-white p-6 rounded-lg shadow-lg h-full">
            <header class="text-black text-3xl font-bold mb-4">총 사원수</header>
            <hr>
            <div class="mb-4 flex justify-center mt-3">
              <select class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 mr-2">
                <option value="">검색 구분</option>
                <option value="option1">사 번</option>
                <option value="option2">부 서</option>
                <option value="option3">이 름</option>
              </select>
              <input type="text" placeholder="Search" class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 ml-2">
            </div>
            <perfect-scrollbar class="divide-y h-full mt-5 dark:divide-gray-700">
              <div class="p-3 w-full">
                <div class="flex gap-5  place-content-between">

                  <div>
                    <img
                        class="w-14 rounded-md"
                        src="@/assets/img/user1.png"
                        alt=""
                    />
                  </div>

                  <div class="mt-1">
                    <h2 class="dark:text-gray-200">김동준</h2>
                    <p class="text-sm dark:text-gray-500 text-gray-400">
                      IT 1팀 /  팀장
                    </p>


                  </div>



                </div>
              </div>
            </perfect-scrollbar>



          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import AppAccordion from "../../components/AppAccordion.vue";
  import MenuAccordion from "../../components/MenuAccordion.vue";
  export default {
    components: {
      Icon,
      AppAccordion,
      MenuAccordion,
    },
    mounted() {},
  };
</script>
