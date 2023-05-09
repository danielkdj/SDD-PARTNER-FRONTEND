<template>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700"
    >
        <div class="mt-3 flex items-center justify-end gap-x-2">
            <select
                v-model ='sCategory'
                class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400"
            >
                <option value="">-항목구분-</option>
                <option value="A차량">A차량</option>
                <option value="B차량">B차량</option>
                <option value="C차량">C차량</option>
            </select>
            <div class="flex min-h-full flex-col lg:px-7">
                <input
                    type="date"
                    class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                    v-model ='sStart'
                />
            </div>
            ~
            <div class="flex min-h-full flex-col lg:px-7">
                <input
                    type="date"
                    class="p-3 w-full border bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                    v-model ='sEnd'
                />
            </div>
            <button v-on:click="fnSearch" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mr-3">검색</button>

        </div>
        <div class="wrapping-table mt-10">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
            >
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                <tr>
                    <th
                        scope="col"
                        class="uppercase px-6 py-2"
                    >
                        번호
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        항목구분
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        제목
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        신청자
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        소속부서
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        사용일시
                    </th>
                    <th
                        scope="col"
                        class="uppercase px-6 py-3"
                    >
                        상태
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                    v-for="items in tableTransaction"
                    :key="items.transaction"
                >
                    <td class="px-6 py-2">
                        {{ items.docNo }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.subCategory }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.writer }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.deptName }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.startDate }} ~ {{ items.endDate }}
                    </td>
                    <td class="px-6 py-4">
                        <span
                            class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                            v-if="items.status === '사용완료'"
                        >
                          {{ items.status }}
                        </span>
                                    <span
                                        class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                                        v-else-if="items.status === '사용중'"
                                    >
                          {{ items.status }}
                        </span>
                                    <span
                                        class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                                        v-else
                                    >
                          {{ items.status }}
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700" >
    <form>
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" v-on:click="fnYes" class="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">승인</button>
            <button type="button" v-on:click="fnNo" class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">반려</button>
            <button type="button" v-on:click="fnList" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3">목록</button>
        </div>
        <div class="space-y-5">
            <div class="grid grid-cols-12 gap-4">
                <label for="notice_no" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    문서 번호
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{docNo}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="writer" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    작성자
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{writer}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="category" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    항목
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{category}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="sub_category" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    항목구분
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{subCategory}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="created_at" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    작성일시
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{createdAt}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="title" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    사용일시
                </label>
                <div class="col-span-10">
                    <p class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    >{{startDate}} ~ {{endDate}}</p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-4">
                <label for="contents" class="text-sm text-gray-500 dark:text-gray-400 col-span-2 self-center">
                    내용
                </label>
                <div class="col-span-10">
                    <textarea rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"> {{contents}} </textarea>
                </div>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "CarApprove",
    data() { //변수생성
        return {
            //검색용 변수
            sCategory:'',
            sStart:'',
            sEnd:'',
            resultCode:'',
            requestBody: this.$route.query,
            docNo: this.$route.query.doc_no,
            category: '차량',
            subCategory: 'A차량',
            title: '제목',
            writer: '작성자',
            deptName: '소속부서',
            contents: '세부내용',
            createdAt:'2023-05-04 23:24:00',
            startDate:'2023-05-05 23:24:00',
            endDate:'2023-05-05 23:24:00',
            tableTransaction: [
                {
                    docNo: 12,
                    subCategory: '항목구분',
                    title: '제목',
                    writer: '작성자',
                    deptName: '소속부서',
                    createdAt: '2023-05-03 23:24:00',
                    startDate: '2023-05-03 23:24:00',
                    endDate: '2023-05-03 23:24:00',
                    status: '',
                },
                {
                    docNo: 22,
                    subCategory: 'B차량',
                    title: '제목',
                    writer: '작성자',
                    deptName: '소속부서',
                    createdAt: '2023-02-11 23:24:00',
                    startDate: '2023-02-18 23:24:00',
                    endDate: '2023-02-19 23:24:00',
                    status: '',
                },
            ]
        }
    },
    methods: {
        fnList() {
            delete this.requestBody.docNo
            this.$router.push({
                path: './CarList',
                query: this.requestBody
            })
        },
        fnYes() {
            if (!confirm("승인하시겠습니까?")) return //취소 클릭시

            this.$axios.update(this.$serverUrl + '/car/' + this.docNo, {}) //확인 클릭시
                .then(() => {
                    alert('승인되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
                this.fnList(); //test용
            })
        },
        fnNo() {
            if (!confirm("반려하시겠습니까?")) return //취소 클릭시

            this.$axios.update(this.$serverUrl + '/car/' + this.docNo, {}) //확인 클릭시
                .then(() => {
                    alert('반려되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
                this.fnList(); //test용
            })
        },
        fnSearch(){
            this.requestBody = {
                category : this.sCategory,
                start : this.sStart,
                end : this.sEnd,
            }

            this.$axios.get(this.$serverUrl + "/CarSchedule", {
                params: this.requestBody,
                headers: {}
            }).then((res)=>{
                if (res.data.resultCode === "OK") {
                    this.list = res.data.data
                }

            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        setStatus(){
            let now = new Date();
            for (let i = 0; i < this.tableTransaction.length; i++) {
                let transaction = this.tableTransaction[i];
                let startD = new Date(transaction.startDate);
                let endD = new Date(transaction.endDate);

                if (startD > now) {
                    transaction.status = '사용전';
                }
                if (startD <= now && endD >= now) {
                    transaction.status = '사용중';
                }else{
                    transaction.status = '사용완료';
                }
            }
        }
    },
    mounted() { //페이지로드시 함수 적용
        this.setStatus()
    },
}
</script>

<style scoped>
</style>