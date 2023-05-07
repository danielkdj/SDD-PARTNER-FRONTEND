<template>
<p>CarApprove : {{doc_no}}</p>
</template>

<script>
export default {
    name: "CarApprove",
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            doc_no: this.$route.query.doc_no,
            sub_category: '항목구분',
            title: '제목',
            writer: '작성자',
            dept_name: '소속부서',
            created_at:'2023-05-04 23:24:00',
            start_date:'2023-05-05 23:24:00',
            end_date:'2023-05-05 23:24:00',
            status: '승인전',
        }
    },
}
</script>

<style scoped>

</style>