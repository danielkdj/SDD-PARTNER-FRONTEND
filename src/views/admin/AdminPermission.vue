<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">사원 리스트</h1>
        <div class="flex mb-4">
            <input type="text" v-model="searchName" placeholder="이름으로 검색" class="w-1/3 border border-gray-400 p-2 rounded-md mr-4">
            <select v-model="searchDepartment" class="w-1/3 border border-gray-400 p-2 rounded-md mr-4">
                <option value="">부서 선택</option>
                <option v-for="department in departments" :value="department">{{ department }}</option>
            </select>
            <select v-model="searchPosition" class="w-1/3 border border-gray-400 p-2 rounded-md">
                <option value="">직급 선택</option>
                <option v-for="position in positions" :value="position">{{ position }}</option>
            </select>
            <a-button type="primary" @click="getExcel">
                Excel download
            </a-button>
        </div>
<!--        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">-->
<!--            <thead class="btext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">-->
<!--            <tr>-->
<!--                <th class="uppercase px-6 py-3">사원번호</th>-->
<!--                <th class="uppercase px-6 py-3">이름</th>-->
<!--                <th class="uppercase px-6 py-3">부서</th>-->
<!--                <th class="uppercase px-6 py-3">직급</th>-->
<!--                <th class="uppercase px-6 py-3">이메일</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="(user, index) in filteredUsers" :key="index" @click="selectUser(user)">-->
<!--                <th class="px-6 py-4">{{user.empNo}}</th>-->
<!--                <td class="px-6 py-4">{{ user.name }}</td>-->
<!--                <td class="px-6 py-4">{{ user.department }}</td>-->
<!--                <td class="px-6 py-4">{{ user.position }}</td>-->
<!--                <td class="px-6 py-4">{{ user.email }}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
        <div class="wrapping-table mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="uppercase px-6 py-3">사원번호</th>
                    <th class="uppercase px-6 py-3">이름</th>
                    <th class="uppercase px-6 py-3">부서</th>
                    <th class="uppercase px-6 py-3">직급</th>
                    <th class="uppercase px-6 py-3">이메일</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, index) in filteredUsers" :key="index" @click="selectUser(user)" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50">
                    <th class="px-6 py-4">{{ user.empNo }}</th>
                    <td class="px-6 py-4">{{ user.name }}</td>
                    <td class="px-6 py-4">{{ user.department }}</td>
                    <td class="px-6 py-4">{{ user.position }}</td>
                    <td class="px-6 py-4">{{ user.email }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div>
        <div v-if="selectedUser">
            <h1 class="text-2xl font-bold mb-4">{{ selectedUser.name }}의 상세정보</h1>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                <thead class="bg-gray-200">
                <tr>
                    <th class="uppercase px-6 py-3">관리자 권한</th>
                    <th class="uppercase px-6 py-3">부서 변경</th>
                    <th class="uppercase px-6 py-3">직급 변경</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <select class="w-1/3 border border-gray-400 p-2 rounded-md" v-model="selectedPermission" @change="selectPermission(selectedUser)">
                            <option value="">관리자 권한</option>
                            <option v-for="adminPermission in adminPermissions" :value="adminPermission">{{ adminPermission }}</option>
                        </select>
                    </td>
                    <td>
                        <select class="w-1/3 border border-gray-400 p-2 rounded-md" v-model="selectedDepartment" @change="selectDepartment(selectedUser)">
                            <option value="">부서 선택</option>
                            <option v-for="department in departments" :value="department">{{ department }}</option>
                        </select>
                    </td>
                    <td>
                        <select class="w-1/3 border border-gray-400 p-2 rounded-md" v-model="selectedPosition" @change="selectPosition(selectedUser)">
                            <option value="">직급 선택</option>
                            <option v-for="position in positions" :value="position">{{ position }}</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
            <button @click="print(selectedUser)">aaaaa</button>
        </div>
    </div>
</template>

<script>
import Button from "@/views/components/button.vue";
import * as Xlsx from "xlsx";

export default {
    components: {Button},
    data() {
        return {
            users: [
                { empNo : "20191111", name: "가나다", department: "개발팀", position: "대리",adminPermission:"관리자" },
                { empNo : "20191112", name: "라마바", department: "개발팀", position: "과장",adminPermission:"관리자" },
                { empNo : "20223432", name: "집으로", department: "영업팀", position: "차장",adminPermission:"관리자" },
                { empNo : "20233232", name: "집가", department: "인사팀", position: "부장",adminPermission:"관리자" },
            ],
            filteredUsers: [],
            departments: ["영업팀", "인사팀", "개발팀"],
            positions: ["대리", "주임", "과장","차장"],
            adminPermissions : ["관리자","일반"],
            searchDepartment: "",
            searchPosition: "",
            searchName: "",
            selectedUser:"",
            selectedPermission:"",
            selectedDepartment:"",
            selectedPosition:"",

        };
    },
    methods: {
        filterUsers() {
            this.filteredUsers = this.users.filter((user) => {
                return (
                    user.department.includes(this.searchDepartment) &&
                    user.position.includes(this.searchPosition) &&
                    user.name.includes(this.searchName)
                );
            });
        },
        selectUser(user) {
            this.selectedUser = user;
        },
        selectPermission(user) {
            user.adminPermission = this.selectedPermission;
        },
        selectDepartment(user) {
            user.department = this.selectedDepartment;
            console.log(this.selectedDepartment);
        },
        selectPosition(user) {
            user.position = this.selectedPosition;
        },
        print(user) {
            console.log(user);
        },
        getExcel() {
            const workBook = Xlsx.utils.book_new()
            const workSheet = Xlsx.utils.json_to_sheet(this.filteredUsers)
            Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
            Xlsx.writeFile(workBook, 'example.xlsx')
        }
    },
    watch: {
        searchDepartment() {
            this.filterUsers();
        },
        searchPosition() {
            this.filterUsers();
        },
        searchName() {
            this.filterUsers();
        },
    },
    mounted() {
        this.filteredUsers = this.users;
    },
};
</script>