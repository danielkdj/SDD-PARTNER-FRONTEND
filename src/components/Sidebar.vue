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

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </template>

                            <template v-slot:title> My Page </template>

                            <template v-slot:content>

                                <router-link

                                    to="/mypage/myInfo"

                                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"

                                >

                                    내 정보 보기

                                </router-link>

                                <router-link

                                    to="/mypage/requestCounsel"

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

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                </svg>

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

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

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

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

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
                                <span class="mr-3 text-xl">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                    </svg>

                                </span>
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

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </template>
                        <template v-slot:title> 급여 & 근태</template>
                        <template v-slot:content>
                            <router-link
                                to="/component/badge"
                                class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              근태조회 등록
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
                              급여 이체 신청
                            </router-link>
                        </template>
                    </menu-accordion>
                </div>

                <div class="item mt-3">
                    <menu-accordion>
                        <template v-slot:icon>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>


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
                        </template>
                    </menu-accordion>
                </div>

                <div class="item mt-3">
                    <menu-accordion>
                        <template v-slot:icon>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>

                        </template>
                      <template v-slot:title> 총무</template>
                      <template v-slot:content>
                        <router-link
                            to="/Affairs"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          총무과 메인
                        </router-link>
                        <router-link
                            to="/NoticeList"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          공지사항
                        </router-link>
                        <router-link
                            to="/RoomList"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          회의실 신청내역
                        </router-link>
                        <router-link
                            to="/RoomSchedule"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          회의실 사용일정
                        </router-link>
                        <router-link
                            to="/CarList"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          차량 신청내역
                        </router-link>
                        <router-link
                            to="/CarSchedule"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          차량 사용일정
                        </router-link>
                        <router-link
                            to="/DrvList"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          차량 관리대장
                        </router-link>
                        <router-link
                            to="/CompletionList"
                            class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          이수관리
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