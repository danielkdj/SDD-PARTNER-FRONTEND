<template xmlns="http://www.w3.org/1999/html">
  <div class="dashboard p-4">

      <div class="grid grid-cols-2 min-h-full">
        <div class="row-span-2 p-4">
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
                <thead class="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                  <tbody class="text-sm text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400 odd:bg-gray-100 even:border-t bg-white" v-for="(items, index) in empList">
                  <tr class="cursor-pointer text-gray-500 border-b dark:bg-gray-800 dark:border-gray-700"
                      :key="items.empId"
                      @click="selectUser(`${items.empId}`)">
                    <td class="px-6 py-3">{{ empList.length - index }}</td>
                    <td class="px-6 py-3">
                      <img :src="items.empImg" alt="사원사진" class="w-14 h-14 rounded-2xl">
                    </td>
                    <td class="px-6 py-3">{{ items.empId }}</td>
                    <td class="px-6 py-3">{{ items.name }}</td>
                    <td class="px-6 py-3">{{ getDeptName(items.deptNo) }}</td>
                    <td class="px-6 py-3">{{ getEmpSpot(items.empSpot) }}</td>
                  </tr>
                  </tbody>
                </table>
              </perfect-scrollbar>
            </div>
          </div>
        </div>

        <div class="row-span-2 p-4 h-full">
          <div class="bg-white box-border border p-4 rounded-lg shadow-lg h-full">
          <div class="flex-row">

            <div class="text-black bg-gray-200 text-center text-3xl font-bold mb-4 ml-12">급여대장


            </div>
          </div>

          <div class="grid grid-cols-4 h-full text-center p-3">

            <div>기본급 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(selectedUsers.salary)"
                        v-on:input="selectedUsers.salary = parseNumber($event.target.value)"></div>
            <div>국민연금 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.nationalPensionFee)"
                        v-on:input="taxInformation.nationalPensionFee = parseNumber($event.target.value)"></div>
            <div>식대 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(eatfee)"
                        v-on:input="eatfee = parseNumber($event.target.value)"></div>
            <div>건강보험 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.healthInsurancePremium)"
                        v-on:input="taxInformation.healthInsurancePremium = parseNumber($event.target.value)"></div>
            <div>연장수당 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"></div>
            <div>고용보험 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.employmentInsurancePremium)"
                        v-on:input="taxInformation.employmentInsurancePremium = parseNumber($event.target.value)"></div>
            <div>직책수당 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"></div>
            <div>장기요양 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.longTermCareInsurancePremium)"
                        v-on:input="taxInformation.longTermCareInsurancePremium = parseNumber($event.target.value)"></div>
            <div>상여금 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(bonus)"
                        v-on:input="bonus = parseNumber($event.target.value)"></div>
            <div>근로소득세 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.earnedIncomeTax)"
                        v-on:input="taxInformation.earnedIncomeTax = parseNumber($event.target.value)"></div>
            <div>급여 소급분 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"></div>
            <div>지방소득세 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(taxInformation.localIncomeTax)"
                        v-on:input="taxInformation.localIncomeTax = parseNumber($event.target.value)"></div>
            <div class="text-2xl">합계 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(totalWithMealFeeAndBonus)"
                        v-on:input="totalWithMealFeeAndBonus = parseNumber($event.target.value)"></div>
            <div class="text-2xl">세금 :</div>
            <div><input type="text" class="bg-gray-400 w-2/3 text-center"
                        v-bind:value="formatNumber(selectedUsers.tax)"
                        v-on:input="selectedUsers.tax = parseNumber($event.target.value)"></div>
            <div class="col-span-2 text-4xl text-end">지급금액 :</div>
            <div class="text-xl mt-2">
              <input type="text" class="bg-gray-400 w-2/3 mb-2 text-center"
                     v-bind:value="formatNumber(paymentAmount)"
                     v-on:input="paymentAmount = parseNumber($event.target.value)">원
            </div>
            <div>
              <button class="bg-cyan-900 mb-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mr-6" @click="updateSalary()">등록하기</button>
            </div>
          </div>

        </div>
          <div>

          </div>
         </div>
      </div>
    <!-- end wrapper card -->

    <div class="mt-2 bg-white dark:bg-gray-800 p-4 w-full rounded-md box-border border dark:border-gray-700">
      <div class="mt-2 w-full">
        <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
          <div>
            <h2 class="font-bold text-base text-gray-800 dark:text-gray-200">
              급여 미등록 내역 현황
            </h2>
            <p class="text-gray-400 text-base font-roboto font-regular">
              현재 결재 대기중인 작업 목록
            </p>
          </div>
        </div>
      </div>
      <perfect-scrollbar class="dark:divide-gray-700">
        <div class="wrapping-table mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-1/2 lg:overflow-auto overflow-y-scroll">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-2" >
                사번
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                이름
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                부서
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                지급월
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                지급액
              </th>
              <th scope="col" class="uppercase px-6 py-2" >
                결제
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                v-for="items in list"
                :key="items.id" >
              <td class="px-6 py-2">
                {{ items.empId }}
              </td>
              <td class="px-6 py-4">
                {{ items.name }}
              </td>
              <td class="px-6 py-4">
                {{ items.deptName }}
              </td>
              <td class="px-6 py-4">
                {{items.salaryDate}}
              </td>
              <td class="px-6 py-4">
                {{ formatNumber(items.payment) }}
              </td>
              <td class="px-6 py-4">
                미지급
                <!--                      <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                            v-if="setStatus(items.startDate, items.endDate) === '사용완료'">
                          사용완료
                      </span>
                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                      v-else-if="setStatus(items.startDate, items.endDate) === '사용중'" >
                          사용중
                      </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                      v-else>
                          사용전
                      </span>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </perfect-scrollbar>


    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Button from "@/views/components/button.vue";

export default {
  data() {
    return {
      paymentAmount: 0,
      list: [],
      paytotal: this.totalWithMealFeeAndBonus - this.tax,
      bonus: '',
      eatfee:"",
      empList: ref([]),
      searchEmpList: ref([]),
      selectedUsers:ref([]),
      employeeSalary: 0,
      taxInformation: {
        healthInsurancePremium: 0,
        employmentInsurancePremium: 0,
        nationalPensionFee: 0,
        earnedIncomeTax: 0,
        localIncomeTax: 0,
        longTermCareInsurancePremium: 0,
        totalDeductions: 0,
        actualPaymentSalary: 0,
      },
      requestBody: {},
      search: "",
    };
  },
  watch: {
    search: function (newVal) {
      this.fetchEmployees(newVal);


    },

  },
    mounted() {
      this.fnGetList()
      this.fetchEmployees();
    },
    methods: {
      formatNumber(number) {
        if (number !== undefined && number !== null) {
          return number.toLocaleString('en-US');
        }
        return number;
      },
      parseNumber(formattedNumber) {
        return Number(formattedNumber.replace(/,/g, ''));
      },
      fnGetList() {
        //스프링 부트에서 전송받은 데이터를 출력 처리

        this.$axios
            .get(this.$serverUrl + "/salary/list",
                {
                  params: this.requestBody,
                  headers: {},
                })
            .then((res
            ) => {

              this.list = res.data;


            })
            .catch((err) => {
              console.error(err);
            });
      },
      selectUser(empId) {
        this.$axios
            .get(this.$serverUrl + "/salary/id/" + empId,
                {
                  params: this.requestBody,
                  headers: {},
                })
            .then((res) => {
              if (res.data && 'totalSalary' in res.data) {
                this.selectedUsers = res.data;
                this.totalSalary = res.data.totalSalary;
                this.calculateTax();
              } else {
                console.error("API 응답에 문제가 있습니다. 응답:", res);
              }
            })
            .catch((err) => {
              console.error(err);
            });
      },
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
      calculateTax() {
        let salary = this.totalSalary;
        this.taxInformation.healthInsurancePremium = Math.round((salary - 200000) * 0.03545);
        this.taxInformation.employmentInsurancePremium = Math.round((salary - 200000) * 0.009);
        this.taxInformation.nationalPensionFee = salary <= 5530000 ? Math.round(salary * 0.045) : Math.round(5530000 * 0.045);

        if (salary < 14000000) {
          this.taxInformation.earnedIncomeTax = Math.round(salary * 0.06);
        } else if (salary < 50000000) {
          this.taxInformation.earnedIncomeTax = Math.round(840000 + ((salary - 14000000) * 0.15));
        } else if (salary < 88000000) {
          this.taxInformation.earnedIncomeTax = Math.round(6240000 + ((salary - 50000000) * 0.24));
        } else if (salary < 150000000) {
          this.taxInformation.earnedIncomeTax = Math.round(15360000 + ((salary - 88000000) * 0.35));
        } else if (salary < 300000000) {
          this.taxInformation.earnedIncomeTax = Math.round(37060000 + ((salary - 150000000) * 0.38));
        } else if (salary < 500000000) {
          this.taxInformation.earnedIncomeTax = Math.round(94060000 + ((salary - 300000000) * 0.40));
        } else if (salary < 1000000000) {
          this.taxInformation.earnedIncomeTax = Math.round(174060000 + ((salary - 500000000) * 0.42));
        } else {
          this.taxInformation.earnedIncomeTax = Math.round(384060000 + ((salary - 1000000000) * 0.45));
        }

        this.taxInformation.localIncomeTax = Math.round(this.taxInformation.earnedIncomeTax * 0.1);
        this.taxInformation.longTermCareInsurancePremium = Math.round(this.taxInformation.healthInsurancePremium * 0.1281);

        this.taxInformation.totalDeductions = this.taxInformation.healthInsurancePremium +
            this.taxInformation.employmentInsurancePremium +
            this.taxInformation.nationalPensionFee +
            this.taxInformation.earnedIncomeTax +
            this.taxInformation.localIncomeTax +
            this.taxInformation.longTermCareInsurancePremium;
      },

      updateSalary() {
        // 'yyyy-MM' 형식 검증을 위한 정규 표현식
        const datePattern = /^\d{4}-\d{2}$/;

        // salaryDate 값이 'yyyy-MM' 형식인지 확인
        if (!datePattern.test(this.selectedUsers.salaryDate)) {
          alert("salaryDate 값이 'yyyy-MM' 형식이 아닙니다. 올바른 형식으로 입력해주세요.");
          return;
        }

        let salaryDate = new Date(this.selectedUsers.salaryDate);
        let formattedDate = salaryDate.toISOString().split('T')[0];

        let updateInfo = {
          'empId': this.selectedUsers.empId,
          'totalSalary': this.totalWithMealFeeAndBonus,
          'salaryDate': formattedDate,
          'tax': this.taxInformation.totalDeductions,
          'payment': this.paymentAmount
        };

        this.$axios.put(this.$serverUrl + `/salary/id/${this.selectedUsers.id}`, updateInfo, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.data.resultCode === "OK") {
            alert("급여 정보 수정 성공")
          }
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      },
      selectEmployee(employee) {
        this.selectedEmployee = [employee];
      },
      returnEmpList() {
        this.search = '';
        this.fetchEmployees();
      },
      getRelativePath(path) {
        const fileSystemBasePath = 'C:/SDD/public/img/';
        const serverBasePath = 'http://localhost:3030/img/';

        if (path && typeof path === 'string') {
          if (path.startsWith(fileSystemBasePath)) {
            const newPath = serverBasePath + path.substring(fileSystemBasePath.length);
            console.log("Converted path:", newPath);
            return newPath;
          }
        }
        console.log("Unchanged path:", path);
        return path;
      },
    },
    computed: {
      totalWithMealFeeAndBonus() {
        let salary = parseFloat(this.selectedUsers.totalSalary);
        let fee = parseFloat(this.eatfee);
        let bonus = parseFloat(this.bonus);

        salary = isNaN(salary) ? 0 : salary;
        fee = isNaN(fee) ? 0 : fee;
        bonus = isNaN(bonus) ? 0 : bonus;

        return salary + fee + bonus;
      },
      paymentAmount() {
        let totalSalary = parseFloat(this.totalWithMealFeeAndBonus);
        let tax = parseFloat(this.selectedUsers.tax);

        totalSalary = isNaN(totalSalary) ? 0 : totalSalary;
        tax = isNaN(tax) ? 0 : tax;

        this.paymentAmount = totalSalary - tax;

        return totalSalary - tax;
      },

      getDeptName() {
        return (deptNo) => {
          switch (deptNo) {
            case 1:
              return '개발';
            case 2:
              return '인사';
            case 3:
              return '급여';
            case 4:
              return '총무';
            default:
              return '알 수 없음'; // deptNo가 예상 범위 외의 값을 가질 때
          }
        }
      },
      getEmpSpot() {
        return (empSpot) => {
          switch (empSpot) {
            case '11':
              return '사장';
            case '12':
              return '이사';
            case '13':
              return '부장';
            case '14':
              return '과장';
            case '15':
              return '대리';
            case '16':
              return '주임';
            case '17':
              return '사원';
            default:
              return '알 수 없음'; // empSpot가 예상 범위 외의 값을 가질 때
          }
        }
      },
    },

    components: {
      Button,
      Icon,
    },

};
</script>

