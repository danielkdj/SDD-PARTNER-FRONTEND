<template xmlns="http://www.w3.org/1999/html">
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
                            Home
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
                              인사
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
                                class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                사원관리
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <!-- end site path -->

          <div class="lg:flex sh grid-cols-1 lg:space-y-0 space-y-2 gap-5 justify-between">

              <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium p-2">
                사원관리
              </h1>

            <div class="flex gap-2">
              <!-- crud 버튼 -->
              <button
                  class="bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5" @click="addButtonClick()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <button
                  class="bg-cyan-700 text-white hover:bg-cyan-500 dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                  @click="createEmployee()">
                등록
              </button>
              <button
                  class="bg-cyan-700 text-white hover:bg-cyan-500 dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                  @click="editEmployee()">
                수정
              </button>
              <button class="bg-red-700 text-white hover:bg-red-500 border rounded py-3 px-5"
                      @click="deleteEmployee()">
                삭제
              </button>
              <!-- end crud 버튼 -->
            </div>
          </div>
        </div>
      <!-- 사원 상세정보 출력 카드 -->
      <div class="mt-2 h-auto w-full bg-white dark:bg-gray-800 p-4 rounded-md box-border border dark:border-gray-700">
        <div class="mt-2 mb-5">
          <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
            사원 카드
          </h2>
          <p class="text-gray-400 text-base font-roboto font-regular">
            사원 상세 정보
          </p>
        </div>
        <div class="flex" v-for="e in selectedEmployee" :key="e.empId">
            <div class="mr-4">
              <img :src="getRelativePath(e.empImgDisplay)" alt="사원사진" class="rounded-lg border items-center w-80 h-80 cursor-pointer"
                   @click="triggerUpload"/>
              <input type="file" accept="image/*" ref="fileInput" @change="handleFileUpload" style="display: none;"/>
            </div>
            <table class="w-full text-sm rounded-md text-center text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
              <tr>
                <th class="py-2 border bg-gray-100">사원번호</th>
                <td class="py-2 border">{{ e.empId }}</td>
                <th class="py-2 border bg-gray-100">주민번호</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.empSsn"
                         placeholder="주민번호 입력"/>
                </td>
                <th class="py-2 border bg-gray-100">이 름</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.name"
                         placeholder="이름 입력"/>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">성 별</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.gender">
                    <option value="e.gender">{{ e.gender }}</option>
                    <option value=""></option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">전화번호</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.phone"
                         placeholder="전화번호 입력"/>
                </td>
                <th class="py-2 border bg-gray-100">이메일</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.email"
                         placeholder="e-mail 입력"/>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">연 봉</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.salary"
                         placeholder="급여 입력"/>
                </td>
                <th class="py-2 border bg-gray-100">급여계좌번호</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.accountNo"
                         placeholder="급여계좌번호 입력"/>
                </td>
                <th class="py-2 border bg-gray-100">주 소</th>
                <td class="py-2 border">
                  <input class="text-center w-2/3" type="text" v-model="e.address"
                         placeholder="주소찾기 버튼클릭"/>
                  <button @click="openPostcode(e)" class="ml-2 px-2 py-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded">주소찾기</button>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">호 봉</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.empRank"
                         placeholder="호봉 입력"/>
                </td>
                <th class="py-2 border bg-gray-100">직 위</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.empSpot">
                    <option value="e.empSpot">{{ e.empSpot }}</option>
                    <option value=""></option>
                    <option value="11">사장</option>
                    <option value="12">이사</option>
                    <option value="13">부장</option>
                    <option value="14">과장</option>
                    <option value="15">대리</option>
                    <option value="16">주임</option>
                    <option value="17">사원</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">직 책</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.empPosition"/>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">소속부서</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.dept.deptNo">
                    <option value="e.dept.deptNo">{{ getDeptName(e.dept.deptNo) }}</option>
                    <option value=""></option>
                    <option value="1">개발</option>
                    <option value="2">인사</option>
                    <option value="3">급여</option>
                    <option value="4">총무</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">입사일</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.hireDate"/>
                </td>
                <th class="py-2 border bg-gray-100">결혼여부</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.marriage">
                    <option value="e.marriage">{{ e.marriage }}</option>
                    <option value=""></option>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">채용구분</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.classification">
                    <option value="e.classification">{{ e.classification }}</option>
                    <option value=""></option>
                    <option value="11">공개채용</option>
                    <option value="12">특별채용</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">고용구분</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.empClassification">
                    <option value="e.empClassification">{{ e.empClassification }}</option>
                    <option value=""></option>
                    <option value="11">정규직</option>
                    <option value="12">시간제</option>
                    <option value="13">무기계약직</option>
                    <option value="14">계약직</option>
                    <option value="15">파견직</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">입사구분</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.admission">
                    <option value="e.admission"></option>
                    <option value=""></option>
                    <option value="11">신입</option>
                    <option value="12">경력</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">자격정보</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.qualification"/>
                </td>
                <th class="py-2 border bg-gray-100">퇴사일자</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.leaveDate"/>
                </td>
                <th class="py-2 border bg-gray-100">퇴사사유</th>
                <td class="py-2 border">
                  <input class="text-center cursor-pointer" type="text" v-model="e.leaveReason"/>
                </td>
              </tr>
              <tr>
                <th class="py-2 border bg-gray-100">퇴사여부</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.leaveIs">
                    <option value="">{{ e.leaveIs }}</option>
                    <option value=""></option>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">퇴사사유코드</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.leaveCode">
                    <option value="e.leaveCode">{{ e.leaveCode }}</option>
                    <option value=""></option>
                    <option value="11">11: 개인사정 자진퇴사</option>
                    <option value="12">12: 사업장이전등으로 자진퇴사</option>
                    <option value="22">22: 폐업, 도산</option>
                    <option value="23">23: 해고, 권고사직등</option>
                    <option value="26">26: 근로자 귀책해고, 권고사직</option>
                    <option value="31">31: 정년</option>
                    <option value="32">32: 계약만료</option>
                    <option value="41">41: 고용보험미적용</option>
                    <option value="42">42: 이중고용</option>
                  </select>
                </td>
                <th class="py-2 border bg-gray-100">재직상태</th>
                <td class="py-2 border">
                  <select class="text-center cursor-pointer" v-model="e.empStatus">
                    <option value="e.empStatus">{{ e.empStatus }}</option>
                    <option value=""></option>
                    <option value="11">재직</option>
                    <option value="12">퇴직</option>
                    <option value="13">퇴직예정</option>
                    <option value="14">휴직</option>
                    <option value="15">휴직예정</option>
                    <option value="16">입사예정</option>
                    <option value="17">수습</option>
                  </select>
                </td>
              </tr>
            </table>
        </div>
      </div>
      <!-- 사원카드 end -->

      <!-- 전체 사원 리스트 -->
      <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
        <div class="mt-2 w-full">
          <div class="lg:flex sh grid-cols-1 lg:space-y-0 space-y-2 gap-5 justify-between">

            <div>
              <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
                사원 리스트
              </h2>
              <p class="text-gray-400 text-base font-roboto font-regular">
                이름으로 사원 조회 지원
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
                    placeholder="검색할 사원명을 입력하세요."
                    class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                />
              </div>
              <!-- end search bar -->

              <!-- 목록 버튼 -->
              <button
                  class="bg-cyan-700 hover:bg-cyan-500 text-white dark:bg-gray-800 hover:border-gray-200 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 border rounded py-3 px-5"
                  @click="returnEmpList()">
                목록
              </button>
              <!-- end 목록 버튼 -->
            </div>
          </div>
        </div>
          <div class="wrapping-table mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
              <thead class="text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 w-1/12">순번</th>
                <th scope="col" class="px-6 py-3 w-1/12">사원사진</th>
                <th scope="col" class="px-6 py-3 w-1/6">사원번호</th>
                <th scope="col" class="px-6 py-3 w-1/6">사원명</th>
                <th scope="col" class="px-6 py-3 w-1/6">소속부서</th>
                <th scope="col" class="px-6 py-3 w-1/6">직위</th>
              </tr>
              </thead>
            </table>
            <perfect-scrollbar class="mt-5 h-80 border-gray-100">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                <colgroup>
                  <col class="w-1/12">
                  <col class="w-1/12">
                  <col class="w-1/6">
                  <col class="w-1/6">
                  <col class="w-1/6">
                  <col class="w-1/6">
                </colgroup>
                <tbody class="text-sm text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400 odd:bg-gray-100 even:border-t bg-white" v-for="(el, index) in empList">
                <tr class="cursor-pointer text-gray-500 border-b dark:bg-gray-800 dark:border-gray-700"
                    :key="el.empId"
                    @click="selectEmployee(el)">
                  <td class="px-6 py-3">{{ empList.length - index }}</td>
                  <td class="px-6 py-3">
                    <img :src="getRelativePath(el.empImgDisplay)" alt="사원사진" class="w-14 h-14 rounded-2xl">
                  </td>
                  <td class="px-6 py-3">{{ el.empId }}</td>
                  <td class="px-6 py-3">{{ el.name }}</td>
                  <td class="px-6 py-3">{{ getDeptName(el.dept.deptNo) }}</td>
                  <td class="px-6 py-3">{{ getEmpSpot(el.empSpot) }}</td>
                </tr>
                </tbody>
              </table>
            </perfect-scrollbar>
          </div>
        </div>
      </div>

        <!-- 전자결재 리스트-->
        <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
            <div class="mt-2 w-full">
                <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
                    <div>
                        <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
                            전자결재 내역 현황
                        </h2>
                        <p class="text-gray-400 text-base font-roboto font-regular">
                            현재 결재 대기중인 작업 목록
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <button class="bg-cyan-700 border flex gap-2 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3">
                            승인하기
                        </button>
                        <button class="bg-cyan-700 border flex gap-2 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3">
                            <span class="text">반려하기</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="wrapping-table mt-10">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                        <thead class="text-sm text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 w-1/6">
                                신청내역
                            </th>
                            <th scope="col" class="px-6 py-3 w-1/6">
                                신청일자
                            </th>
                            <th scope="col" class="px-6 py-3 w-1/6">
                                소속부서
                            </th>

                            <th scope="col" class="px-6 py-3 w-1/6">
                                신청자
                            </th>
                            <th scope="col" class="px-6 py-3 w-1/6">
                                승인여부
                            </th>
                            <th scope="col" class="px-6 py-3 w-1/6">
                                확인
                            </th>
                        </tr>
                        </thead>
                        <perfect-scrollbar class="divide-y mt-5">
                        <tbody>
                        <tr class="border text-gray-500 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50" v-for="items in eaStatus" :key="items.eaStatus">
                            <td class="px-6 py-3">
                                {{ items.category }}
                            </td>
                            <td class="px-6 py-3">
                                {{ items.datetime }}
                            </td>
                            <td class="px-6 py-3">
                                {{ items.dept }}
                            </td>
                            <td class="px-6 py-3">
                                {{ items.name }}
                            </td>
                            <td class="px-6 py-3">
                            <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                                  v-if="items.confirmStatus == 'completed'">
                                {{ items.confirmStatus }}
                            </span>
                                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                                      v-else-if="items.confirmStatus == 'progress'">
                                {{ items.confirmStatus }}
                            </span>
                                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                                {{ items.confirmStatus }}
                            </span>
                            </td>

                            <!-- 체크박스 -->
                            <td class="px-6 py-3">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" v-model="items.checked"/>
                            </td>
                        </tr>
                        </tbody>
                        </perfect-scrollbar>
                    </table>
                <div class="p-2 flex justify-end">
                    <button class="bg-cyan-700 border mt-4 text-white hover:bg-cyan-900 dark:border-gray-700 rounded py-3 px-3" @click="toggleAll">
                        전체선택
                    </button>
                </div>
            </div>
        </div>
    <!-- 전자결재 리스트 end -->
</template>

<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Button from "@/views/components/button.vue";

export default {
  data() {
    return {
      empList: ref([]),
      searchEmpList: ref([]),
      selectedEmployee: [{
        empId: "",
        name: "",
        password: "",
        empImg: "",
        empImgDisplay: "",
        empSsn: "",
        gender: "",
        marriage: "",
        phone: "",
        email: "",
        salary: "",
        accountNo: "",
        address: "",
        empSpot: "",
        empPosition: "",
        empRank: "",
        empStatus: "",
        classification: "",
        empClassification: "",
        admission: "",
        permission: "",
        hireDate: null,
        leaveDate: null,
        leaveReason: "",
        leaveIs: "",
        leaveCode: "",
        awards: "",
        qualifications: "",
        dept:{
          deptNo:"",
          deptName: "",
        },
      }],
      defaultEmployee: {
        empId: "",
        name: "",
        password: "",
        empImg: "",
        empImgDisplay: "",
        empSsn: "",
        gender: "",
        marriage: "",
        phone: "",
        email: "",
        salary: "",
        accountNo: "",
        address: "",
        empSpot: "",
        empPosition: "",
        empRank: "",
        empStatus: "",
        classification: "",
        empClassification: "",
        admission: "",
        permission: "",
        hireDate: null,
        leaveDate: null,
        leaveReason: "",
        leaveIs: "",
        leaveCode: "",
        awards: "",
        qualifications: "",
        dept:{
          deptNo:"",
          deptName: "",
        },
      },
      defaultEmpCard: [{
        empId: "",
        name: "",
        password: "",
        empImg: "",
        empImgDisplay: "",
        empSsn: "",
        gender: "",
        marriage: "",
        phone: "",
        email: "",
        salary: "",
        accountNo: "",
        address: "",
        empSpot: "",
        empPosition: "",
        empRank: "",
        empStatus: "",
        classification: "",
        empClassification: "",
        admission: "",
        permission: "",
        hireDate: null,
        leaveDate: null,
        leaveReason: "",
        leaveIs: "",
        leaveCode: "",
        awards: "",
        qualifications: "",
        dept:{
          deptNo:"",
          deptName: "",
        },
      }],
      requestBody: {},
      search: "",
    };
  },
  watch: {
    search: function(newVal) {
      this.fetchEmployees(newVal);
    }
  },
  computed: {
    getDeptName() {
      return (deptNo) => {
        switch (deptNo) {
          case 1: return '개발';
          case 2: return '인사';
          case 3: return '급여';
          case 4: return '총무';
          default: return '알 수 없음'; // deptNo가 예상 범위 외의 값을 가질 때
        }
      }
    },
    getEmpSpot() {
      return (empSpot) => {
        switch (empSpot) {
          case '11': return '사장';
          case '12': return '이사';
          case '13': return '부장';
          case '14': return '과장';
          case '15': return '대리';
          case '16': return '주임';
          case '17': return '사원';
          default: return '알 수 없음'; // empSpot가 예상 범위 외의 값을 가질 때
        }
      }
    },
  },
  methods: {
    fetchEmployees(search) {
      let url = this.$serverUrl + "/employee/ep";
      if (search) {
        url += "/name/" + search;
      }

      this.$axios.get(url, {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        if (res.data.length > 0) {

          this.empList = res.data.map(emp => ({
            ...emp,
            empImgDisplay: this.getRelativePath(emp.empImg)
          }));
        } else {
          this.empList = this.defaultEmpCard;
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
        this.empList = this.defaultEmpCard;
      })
    },
    selectEmployee(employee) {
      this.selectedEmployee = [employee];
    },
    addButtonClick() {
      this.selectedEmployee = this.defaultEmpCard;
    },
    returnEmpList() {
      this.search = '';
      this.fetchEmployees();
    },
    async createEmployee() {
      let url = this.$serverUrl + "/employee/ep/create";

      const randomEmpId = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

      this.selectedEmployee[0].empId = `EMP-${randomEmpId}`;
      this.selectedEmployee[0].password = this.selectedEmployee[0].empId;

      const formData = new FormData();
      formData.append('emp', JSON.stringify(this.selectedEmployee[0]));

      let fileInput = this.$refs.fileInput;
      if (Array.isArray(fileInput)) {
        fileInput = fileInput[0];
      }
      const file = fileInput.files[0];

      formData.append('file', file, file.name);
      try {
        const response = await this.$axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(`새로 등록된 사원의 번호로 사번, 초기비밀번호가 전송되었습니다.`);
      } catch (error) {
        if(e.empID === e.newEmpId) {
          alert('이미 등록된 사원입니다.');
        } else {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      }
    },
    updateEmployee(empId, emp, file) {
      const formData = new FormData();
      if (emp === undefined || emp === null) {
        emp = this.defaultEmployee;
      }
      formData.append("emp", JSON.stringify(emp));
      formData.append("file", file);

      this.$axios.put(this.$serverUrl + `/employee/ep/update/${empId}`, formData)
          .then((res) => {
            if (res.status === 200) {
              alert('사원정보 수정 완료되었습니다.');
              this.fetchEmployees();
            }
          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
    },
    editEmployee() {
      let fileInput = this.$refs.fileInput;
      if (Array.isArray(fileInput)) {
        fileInput = fileInput[0];
      }
      const file = fileInput.files[0];
      this.updateEmployee(this.selectedEmployee[0].empId, this.selectedEmployee[0], file);
    },
    deleteEmployee() {
      this.$axios.delete(this.$serverUrl + `/employee/ep/delete/${this.selectedEmployee[0].empId}`)
          .then((res) => {
            if (res.status === 204) {
              alert('사원 삭제 성공하였습니다.');
              window.location.reload();
            }
          }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    getRelativePath(path) {
      const fileSystemBasePath = 'C:/SDD/public/img/';
      const serverBasePath = 'http://localhost:3030/img/';

      if (path && typeof path === 'string') {
        if (path.startsWith(fileSystemBasePath)) {
          const newPath = serverBasePath + path.substring(fileSystemBasePath.length);
          console.log("변환된 경로:", newPath);
          return newPath;
        }
      }
      console.log("경로 읽기 실패:", path);
      return path;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedEmployee[0].empImg = file.name;
        this.selectedEmployee[0].empImgDisplay = this.getRelativePath('C:/SDD/public/img/' + file.name);
      }
    },
    triggerUpload() {
      this.$nextTick(() => {
        let fileInput = this.$refs.fileInput;
        if (Array.isArray(fileInput)) {
          fileInput = fileInput[0];
        }
        if (fileInput) {
          fileInput.click();
        }
      });
    },
    openPostcode(emp) {
      new window.daum.Postcode({
        oncomplete: function (data) {
          emp.address = data.roadAddress;
        }
      }).open();
    },
    toggleAll() {
      this.isAllChecked = !this.isAllChecked;  // 전체 선택 상태 토글
      this.eaStatus.forEach(item => item.checked = this.isAllChecked);  // 모든 항목의 체크 상태를 전체 선택 상태와 동기화
    },
  },
  mounted() {
    this.fetchEmployees();

    let script = document.createElement('script');
    script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  },
  components: {
    Button,
    Icon,
  },
};
</script>