<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
    >
        <div style="display: flex">
            <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200"> 사원 상세정보 </h1>
            <div class="flex-grow"></div> <!-- 추가된 부분 -->
            <div class="mt-3 flex items-center justify-end gap-x-2">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> 비밀번호 변경 </button>
            </div>
        </div>
        <div style="display: flex">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"  style="border: 1px solid #E8EAED; width: 85%;"
            >
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' } ">사원번호</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">주민번호</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">이름</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">성별</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">전화번호</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">이메일</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">연봉</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">주소</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">직위</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">직급</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">직책</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">소속부서</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">채용구분</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">고용구분</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">입사구분</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">입사일</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">근무상태</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">상벌</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
                <tr>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">수상이력</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">자격정보</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                    <th class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</th>
                    <td class="py-2" :style="{ border: '1px solid #E8EAED' }">나중에 추가</td>
                </tr>
            </table>
            <div class="flex-grow"></div>
            <img class="img2"
                 src="@/assets/img/user1.png" width="150px"
                 style="position: relative; height: 150px">
        </div>
        <br><br><br><br><br>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">신청내역</button> &nbsp; <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">승인내역</button> &nbsp; <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">교육내역</button>
        <br>
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"  style="border: 1px solid #E8EAED; width: 85%;"
        >
            <tr >
                <th>일자</th>
                <th>제목</th>
                <th>신청번호</th>
                <th>승인여부</th>
                <th></th>
            </tr>
<!--            <tr v-for="item in ">-->
<!--                <td></td>-->
<!--                <td></td>-->
<!--                <td></td>-->
<!--                <td></td>-->
<!--                <td><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">삭제</button></td>-->
<!--            </tr>-->
        </table>
    </div>
</template>

<script>
import Button from "@/views/components/button.vue";

export default {
    name: "myPage.vue",
    components: {
        Button

    },
}
</script>

<style scoped>
th {
    background-color: #f2f2f2;
}

th, td {
    text-align: center;
}
</style>