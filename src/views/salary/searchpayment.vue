<template xmlns="http://www.w3.org/1999/html">
  <div class="dashboard p-4">
    <div class="container mx-auto h-full bg-gray-200">
      <div class="grid grid-rows-2 min-h-full gap-4 text-center">

        <div class="grid grid-cols-3 gap-4 h-full">
          <div class="min-h-full p-6 row-span-2">
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
          <div class="row-span-2 min-h-0 p-6 flex-grow">
            <div class="bg-white p-6 rounded-lg shadow-lg h-full">
              <header class="text-black text-3xl font-bold mb-4">기간 검색</header>
              <hr>
              <div class="mb-4 mt-3 flex justify-center">
                <select class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 mr-2 ">
                  <option value="">구분</option>
                  <option value="option1">사 번</option>
                  <option value="option2">부 서</option>
                  <option value="option3">이 름</option>
                </select>
                <input type="text" placeholder="Search" class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 ml-2">
              </div>
              <div class="mb-4 mt-3 flex justify-center">
                <select class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 mr-2 ">
                  <option value="">구분</option>
                  <option value="option1">사 번</option>
                  <option value="option2">부 서</option>
                  <option value="option3">이 름</option>
                </select>
                <input type="text" placeholder="Search" class="w-1/3 bg-sky-200 border-0.4 rounded-lg py-2 px-3 ml-2">
              </div>


            </div>
          </div>
          <div class="row-span-2 min-h-0 p-6 flex-grow">
            <div class="bg-white p-6 rounded-lg shadow-lg h-full">
              <header class="text-black text-3xl font-bold mb-4">상세내역</header>
              <hr>
              <div class="flex items-center justify-center space-x-2 mb-4">
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
              </div>
              <div class="h-2/3">
                <p class="text-gray-400">Brief description of the card goes here.</p>
              </div>
              <div class="mb-0 place-content-end">
                <button class="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">등록</button>
              </div>
            </div>
          </div>


        </div>

        <div class="grid grid-cols-1 gap-4 mb-1 min-h-full">
          <div class="min-h-0 p-6 flex-grow">
            <div class="bg-white p-6 rounded-lg shadow-lg h-2/3">
              <header class="text-black text-3xl font-bold mb-4">목록보기</header>
              <hr>

              <perfect-scrollbar class="divide-y h-2/3 mt-5 dark:divide-gray-700">
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
                    <div class="self-center mr-2 text-red-800">
                      연장 근무 신청
                    </div>
                    <div class="self-center mr-2 text-red-800">
                      신청 시간
                    </div>
                    <div class="self-center mr-2 text-red-800">
                      <button class="bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">승인</button>
                      <button class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">반려</button>
                    </div>
                  </div>
                </div>
                <div class="p-3 w-full">
                  <div class="flex gap-5">
                    <div>
                      <img
                          class="w-14 rounded-md"
                          src="@/assets/img/user2.png"
                          alt=""
                      />
                    </div>
                    <div class="mt-1">
                      <h2 class="dark:text-gray-200">Ethan Roger</h2>
                      <p class="text-sm dark:text-gray-500 text-gray-400">
                        Active now
                      </p>
                    </div>

                  </div>
                </div>
                <div class="p-3 w-full">
                  <div class="flex gap-5">
                    <div>
                      <img
                          class="w-14 rounded-md"
                          src="@/assets/img/user3.png"
                          alt=""
                      />
                    </div>
                    <div class="mt-1">
                      <h2 class="dark:text-gray-200">Tobi Ferreira</h2>
                      <p class="text-sm dark:text-gray-500 text-gray-400">
                        last online 2 hours ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-3 w-full">
                  <div class="flex gap-5">
                    <div>
                      <img
                          class="w-14 rounded-md"
                          src="@/assets/img/user4.png"
                          alt=""
                      />
                    </div>
                    <div class="mt-1">
                      <h2 class="dark:text-gray-200">Taylor neal</h2>
                      <p class="text-sm dark:text-gray-500 text-gray-400">
                        last online 2 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-3 w-full">
                  <div class="flex gap-5">
                    <div>
                      <img
                          class="w-14 rounded-md"
                          src="@/assets/img/user5.png"
                          alt=""
                      />
                    </div>
                    <div class="mt-1">
                      <h2 class="dark:text-gray-200">Bruno Barron</h2>
                      <p class="text-sm dark:text-gray-500 text-gray-400">
                        last online 2 hours ago
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
  </div>
</template>
<style>
hr{
  border: 1px solid #000000;
  margin: 0px;
}

</style>
<script setup>
import Button from "@/views/components/button.vue";
</script>