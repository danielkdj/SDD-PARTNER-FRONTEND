<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">부서 리스트</h1>
        <table class="w-full border border-gray-400">
            <thead class="bg-gray-200">
            <tr>
                <th class="p-2 border-r border-gray-400">부서번호</th>
                <th class="p-2 border-r border-gray-400">부서이름</th>
                <th class="p-2 border-r border-gray-400">설명</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(department, index) in filteredUsers" :key="index" @click="selectUser(user)">
                <th class="p-2 border-r border-gray-400">{{department.empNo}}</th>
                <td class="p-2 border-r border-gray-400">{{ department.name }}</td>
                <td class="p-2 border-r border-gray-400">{{ department.department }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">직급 리스트</h1>
        <table class="w-full border border-gray-400">
            <thead class="bg-gray-200">
            <tr>
                <th class="p-2 border-r border-gray-400">직급번호</th>
                <th class="p-2 border-r border-gray-400">직급이름</th>
                <th class="p-2 border-r border-gray-400">설명</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in filteredUsers" :key="index" @click="selectUser(user)">
                <th class="p-2 border-r border-gray-400">{{user.empNo}}</th>
                <td class="p-2 border-r border-gray-400">{{ user.name }}</td>
                <td class="p-2 border-r border-gray-400">{{ user.department }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Button from "@/views/components/button.vue";

export default {
    components: {Button},
    data() {
        return {
            department: [
                { deptNo : "100", deptName: "가나다", description: "개발팀"},
                { deptNo : "110", deptName: "가나다", description: "개발팀1" },
                { deptNo : "120", deptName: "가나다", description: "개발팀2" },
                { deptNo : "130", deptName: "가나다", description: "개발팀3" },
            ],
            rank : [
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