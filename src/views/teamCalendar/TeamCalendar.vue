<template>
  <FullCalendar :options="calendarOptions" id="calendar" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        height: 650,
        initialView: 'dayGridMonth',
        events: [
          // { title: 'event 1', date: '2023-05-01' },
          // { title: 'event 2', date: '2023-05-02' }
        ],
        eventClick: this.handleEventClick
      }
    }
  },
  methods: {
    handleEventClick(arg) {
      // Handle event click and redirect to a page
      // Example: Redirect to a specific URL
      window.location.href = `/teamCalendarDetail/${arg.event.id}`;
    },
    getList() {
      let url = this.$serverUrl + "/employee/teamCalendar/"
      this.$axios
          .get(url, {
            params: this.requestBody,
            headers: {}
          })
          .then((res) => {
            this.calendarOptions.events = res.data; // Update events data
            console.log(this.calendarOptions.events);
          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
    }
  },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped>
#calendar {
  max-width: 1100px;
  margin: 40px auto;
}
</style>