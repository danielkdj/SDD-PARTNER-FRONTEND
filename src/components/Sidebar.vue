<template>
  <!-- sidebar -->
    <nav class="sidebar bg-white dark:bg-gray-800">
        <!-- sidebar head -->
        <div class="sidebar-head p-4">
            <router-link
                    to="/"
                    exact
                    class="flex"
            >
                <img
                        class="w-8 mt-1"
                        src="@/assets/logo.png"
                        alt="logo SSD"
                />
                <h2
                        class="text-2xl font-normal ml-3 mt-2 text-gray-800 dark:text-gray-200"
                        translate="no"
                >
                    SDD
                </h2>
            </router-link>
            <div
                    class="bg-gray-700 absolute mt-3 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200"
            >
                Dark mode
            </div>
            <button
                    class="lg:hidden block dark:text-gray-400 float-right -mt-7"
                    @click="$emit('sidebarToggle')"
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="25px"
                        height="25px"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                >
                    <path
                            fill="currentColor"
                            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
                    />
                </svg>
            </button>
        </div>
        <!-- sidebar list -->
        <div class="sidebar-list p-4 mt-4 divide-y dark:divide-gray-700">
            <div class="pb-5">
                <p class="font-medium text-gray-400 dark:text-gray-400">Menu</p>
                <div class="wrap-item mt-4 dark:text-gray-500">
                    <div class="item">
                        <menu-accordion>
                            <template v-slot:icon>
                                <Icon icon="bxs:dashboard"/>
                            </template>
                            <template v-slot:title> My Page</template>
                            <template v-slot:content>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    내 정보 보기
                                </router-link>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    비밀번호 변경
                                </router-link>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    발령정보 조회
                                </router-link>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    상담신청
                                </router-link>

                            </template>
                        </menu-accordion>
                    </div>
<div class="item mt-3">

                        <menu-accordion>

                            <template v-slot:icon>

                                <Icon icon="bxs:dashboard" />

                            </template>

                            <template v-slot:title> 전자결재 </template>

                            <template v-slot:content>

                                <router-link

                                        to="/ea/eaRequest"

                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"

                                >

                                    전자결재 신청

                                </router-link>

                                <router-link

                                        to="/ea/eaRequestList"

                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"

                                >

                                    전자결재 신청내역 조회

                                </router-link>

                                <router-link

                                        to="/ea/eaApprovalList"

                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"

                                >

                                    전자결재 요청내역 조회

                                </router-link>

                            </template>

                        </menu-accordion>

                    </div>

                    <!-- 오늘은 요기까지 -->
                    <div class="item mt-3">
                        <menu-accordion>
                            <template v-slot:icon>
                                <Icon icon="bxs:dashboard"/>
                            </template>
                            <template v-slot:title> 근태관리</template>
                            <template v-slot:content>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    근태 내역 조회
                                </router-link>
                                <router-link
                                        to="/component/accordion"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    휴가 사용현황 조회
                                </router-link>

                            </template>
                        </menu-accordion>
                    </div>
                    <div class="item mt-3">
                        <menu-accordion>
                            <template v-slot:icon>
                                <Icon icon="bxs:dashboard"/>
                            </template>
                            <template v-slot:title> 일정관리</template>
                            <template v-slot:content>
                                <router-link
                                        to="/component/alert"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    회의실 사용일정 조회
                                </router-link>
                                <router-link
                                        to="/component/accordion"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    차량 사용일정 조회
                                </router-link>
                                <router-link
                                        to="/component/badge"
                                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    팀 일정 조회
                                </router-link>

                            </template>
                        </menu-accordion>
                    </div>
                    <div class="item mt-3">
                        <div class="item">
                            <router-link
                                    to="/component/badge"
                                    exact
                                    class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <span class="mr-3 text-xl"><Icon icon="bxs:dashboard"/></span>
                                <span class="w-full"> 공지사항 </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-5">
                <p class="font-medium text-gray-400 mt-4 dark:text-gray-400">
                    관리부서 Menu
                </p>

                <div class="item mt-3">
                    <menu-accordion>
                        <template v-slot:icon>
                            <Icon icon="gg:components"/>
                        </template>
                        <template v-slot:title> 근태 & 근태</template>
                        <template v-slot:content>
                            <router-link
                                    to="/component/alert"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                급여대장 등록
                            </router-link>
                            <router-link
                                    to="/component/accordion"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                급여목록 조회
                            </router-link>
                            <router-link
                                    to="/component/badge"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                근태등록 조회
                            </router-link>
                            <router-link
                                    to="/component/breadcumb"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                휴가등록 조회
                            </router-link>

                        </template>
                    </menu-accordion>
                </div>

                <div class="item mt-3">
                    <menu-accordion>
                        <template v-slot:icon>
                            <Icon icon="gg:components"/>
                        </template>
                        <template v-slot:title> 인사</template>
                        <template v-slot:content>
                            <router-link to="/HR/employee"
                                         class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                                사원관리
                            </router-link>

                            <router-link to="/HR/counseling"
                                         class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                                상담
                            </router-link>

                            <router-link to="/HR/AD"
                                         class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                                입사서류
                            </router-link>

                            <router-link to="/HR/insurance"
                                         class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                                4대보험
                            </router-link>

                            <router-link to="/HR/dispatch"
                                         class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                                발령
                            </router-link>
                        </template>
                    </menu-accordion>
                </div>

                <div class="item mt-3">
                    <menu-accordion>
                        <template v-slot:icon>
                            <Icon icon="gg:components"/>
                        </template>
                        <template v-slot:title> 총무</template>
                        <template v-slot:content>
                            <router-link
                                    to="/component/badge"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                공지사항
                            </router-link>
                            <router-link
                                    to="/component/breadcumb"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                비품구매
                            </router-link>
                            <router-link
                                    to="/component/button"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                회의실 사용
                            </router-link>
                            <router-link
                                    to="/component/card"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                차량사용
                            </router-link>
                            <router-link
                                    to="/component/dropdown"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                법정 의무교육
                            </router-link>
                            <router-link
                                    to="/component/modal"
                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                서류함
                            </router-link>
                        </template>
                    </menu-accordion>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {Icon} from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";

export default {
    components: {
        Icon,
        MenuAccordion,
    },
};
</script>
