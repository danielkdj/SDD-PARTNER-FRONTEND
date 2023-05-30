<template>
  <div class="dashboard p-2">
    <!-- end nav -->
    <div class="mt-2 w-full">
      <!-- site path -->
      <nav class="flex p-2" aria-label="Breadcrumb">
        <ol class="m-3 inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="/"
               class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
                  class="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              홈
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd">
                </path>
              </svg>
              <a href="/HR/employee" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                HR
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd">
                </path>
              </svg>
              <span
                  class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-500">
                상담
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
      <!-- end site path -->
      <div class="mt-2 w-full">
        <div class="m-6 lg:flex grid-cols-1 lg:space-y-0 space-y-2 gap-5 justify-between">

          <div>
            <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
              상담 목록
            </h2>
            <p class="text-gray-400 text-base font-roboto font-regular">
              이름으로 직원 검색 가능
            </p>
          </div>

          <div class="flex gap-2">
            <!-- search bar -->
            <div
                class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700">
                          <span class="text-3xl p-2 text-gray-400">
                          <Icon icon="ei:search"/></span>
              <input
                  type="text"
                  v-model="search"
                  placeholder="검색할 직원명을 입력하세요."
                  class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
              />
            </div>
            <!-- end search bar -->

            <!-- list button -->
            <button
                class="bg-cyan-700 hover:bg-cyan-500 text-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                @click="returnCounList()">
              목록
            </button>
            <!-- end list button -->
          </div>
        </div>
        <perfect-scrollbar class="h-4/6 dark:divide-gray-700">
          <div class="m-4 border rounded-md wrapping-table mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll" >
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
              <tr>
                <th scope="col" class="uppercase px-6 py-2" >
                  번호
                </th>
                <th scope="col" class="uppercase px-6 py-3" >
                  제목
                </th>
                <th scope="col" class="uppercase px-6 py-3" >
                  작성자
                </th>
                <th scope="col" class="uppercase px-6 py-3" >
                  작성일시
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="cursor-pointer rounded-md border bg-white dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                  v-for="(c, index) in counList"
                  :key="c.counId"
                  @click="selectCounseling(c)">
                <td class="px-6 py-2">
                  {{ counList.length - index }}
                </td>
                <td class="px-6 py-4">
                  {{ c.counTitle }}
                </td>
                <td class="px-6 py-4">
                  {{ c.name }}
                </td>
                <td class="px-6 py-4">
                  {{ c.requestAt }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </perfect-scrollbar>
      </div>

    <div class="dashboard p-4">
      {{ selectedCounseling[0].name }}
      <div class="mt-2 lg:flex block lg:gap-2 relative">
        <div
            class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
        >
          <h2 class="ml-4 mt-4 font-bold text-lg text-gray-800 dark:text-gray-200">
            상담신청상세
          </h2>
          <h2 class="ml-4 font-regular text-lg text-gray-400 dark:text-gray-200">
            상담신청을 확인하고 답변 작성
          </h2>
          <div class="wrapping-table mt-10">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
            >
              <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">
                  작성자
                </td>
                <td class="px-6 py-4">
                  <input class="p-3 w-full bg-gray-100 rounded-md outline-none" v-model="selectedCounseling[0].name"/>
                </td>
              </tr>
              <tr
                  class="bg-white border-b "
              >
                <td class="px-6 py-4">
                  제목
                </td>
                <td class="px-6 py-4">
                  <input type="text" class="p-3 w-full bg-gray-100 rounded-md outline-none"
                         v-model="selectedCounseling[0].counTitle"/>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">
                  신청내용
                </td>
                <td class="px-6 py-4">
                  <input class="p-3 w-full bg-gray-100 rounded-md outline-none" v-model="selectedCounseling[0].counContent">
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">
                  상담내용
                </td>
                <td class="px-6 py-4" >
                  <ckeditor :editor="editor" v-model="selectedCounseling[0].counAnswer" :config="editorConfig"></ckeditor>
                </td>
              </tr>
              </tbody>
            </table>
            <br>
            <div class="flex justify-end">
              <button
                  type="button"
                  class="bg-cyan-700 text-white hover:bg-cyan-500 dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5 mr-2"
                  @click="editCounsel()"
              >
                상담내용등록
              </button>
              <button
                  type="button"
                  class="bg-cyan-700 text-white hover:bg-cyan-500 dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                  @click="clearForm()"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { Button } from "@/views/components/button.vue";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import axios from "axios";

export default {
  name: "EaRequest",
  data() {
    return {
      requestBody: this.$route.query,
      counList: ref([]),
      selectedCounseling: [{
        counId: 0,
        empId: "",
        name: "",
        deptNo: 0,
        empSpot: "",
        empImg: "",
        counTitle: "",
        counContent: "",
        counAnswer: "",
        counAt: null,
        requestAt: null,
        requestedAt: null,
      }],
      defaultCounseling: {
        counId: 0,
        empId: "",
        name: "",
        deptNo: 0,
        empSpot: "",
        empImg: "",
        counTitle: "",
        counContent: "",
        counAnswer: "",
        counAt: null,
        requestAt: null,
        requestedAt: null,
      },
      search: "",
      //Editor 변수
      editor: Editor,
      editorData: '',
      editorConfig: {
        language: 'ko',
      }
    };
  },
  methods: {
    fetchCounseling() {
      let url = this.$serverUrl + "/counseling/coun";

      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      })
          .then((res) => {
            if (res.data.length > 0) {
              this.counList = res.data;
            } else {
              this.counList = [this.defaultCounseling];
            }
          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
            this.counList = [this.defaultCounseling];
          });
    },
    updateCounsel(selectedCounseling) {
      try {
        if (!selectedCounseling || !selectedCounseling.counId) {
          console.error('상담 ID가 없습니다.');
          return;
        }

        const requestBody = {
          counAnswer: selectedCounseling.counAnswer,
          counAt: new Date().toISOString()
        };

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        this.$axios.put(
            this.$serverUrl + `/counseling/coun/update/${selectedCounseling.counId}`,
            JSON.stringify(requestBody),
            config
        )
            .then((res) => {
              if (res.status === 200) {
                console.log('상담 업데이트 성공:', res.data);

                // 필요한 로직 추가
                this.fetchCounseling(); // 상담 목록 새로고침 등
                alert('상담 업데이트가 완료되었습니다.'); // 메시지 표시 등
              }
            })
            .catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
              } else {
                console.error('상담 업데이트 실패:', err);
              }
            });
      } catch (error) {
        console.error('오류 발생:', error);
      }
    },
    editCounsel() {
      if (confirm('상담 정보를 수정하시겠습니까?')) {
        this.updateCounsel(this.selectedCounseling[0]);
      }
    },
    selectCounseling(counseling) {
      this.selectedCounseling = [ counseling ];
    },
    clearForm() {
      this.selectedCounseling = [this.defaultCounseling];
    },
    returnCounList() {
      this.fetchCounseling();
    },
  },
  mounted() {
    this.fetchCounseling();
  },
  components: {
    Button,
    Icon,
  },
};
</script>