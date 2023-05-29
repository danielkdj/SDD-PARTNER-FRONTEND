import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Valert from "../views/components/alert.vue";
import Vaccrodion from "../views/components/accordion.vue";
import Vbadges from "../views/components/badges.vue";
import Vbreadcumb from "../views/components/breadcumbs.vue";
import Vbutton from "../views/components/button.vue";
import Vcard from "../views/components/card.vue";
import Vdropdown from "../views/components/dropdown.vue";
import Vmodal from "../views/components/modal.vue";
import Login from "../views/layouts/auth/Login.vue";
import Register from "../views/layouts/auth/Register.vue";
import ForgotPassword from "../views/layouts/auth/forgot-password.vue";
import Blank from "../views/layouts/Blank.vue";
import Page404 from "../views/layouts/error/404.vue";
import Page500 from "../views/layouts/error/500.vue";
import PageMaintenance from "../views/layouts/error/maintenance.vue";
import Tables from "../views/tables.vue";
import MyInfo from "@/views/mypage/myInfo.vue";
import ChangePassword from "@/views/mypage/changePassword.vue";
import AppointmentInfo from "@/views/mypage/appointmentInfo.vue";
import RequestCounsel from "@/views/mypage/requestCounsel.vue";
import EaRequest from "@/views/ea/eaRequest.vue";
import EaRequestList from "@/views/ea/eaRequestList.vue";
import EaApprovalList from "@/views/ea/eaApprovalList.vue";
import AdminCreate from "@/views/admin/AdminCreate.vue";
import TeamCalendarWrite from "@/views/teamCalendar/TeamCalendarWrite.vue";
import AdminPermission from "@/views/admin/AdminPermission.vue";
import DocumentList from "@/views/document/DocumentList.vue";
import DocumentDetail from "@/views/document/DocumentDetail.vue";
import TeamCalendar from "@/views/teamCalendar/TeamCalendar.vue";
import DocumentWrite from "@/views/document/DocumentWrite.vue";
import attendance from "@/views/attendance/attendance.vue";
import searchemplyoee from "@/views/attendance/searchemplyoee.vue";
import Salary from "@/views/salary/salary.vue";
//import dayoff from "@/views/dayoff/dayoff.vue";
import Affairs from "../views/affair/Affairs.vue";
import NoticeList from "../views/affair/NoticeList.vue";
import NoticeDetail from "../views/affair/NoticeDetail.vue";
import NoticeWrite from "../views/affair/NoticeWrite.vue";
import RoomList from "../views/affair/RoomList.vue";
import RoomApprove from "../views/affair/RoomApprove.vue";
import RoomSchedule from "../views/affair/RoomSchedule.vue";
import CarList from "../views/affair/CarList.vue";
import CarApprove from "../views/affair/CarApprove.vue";
import CarSchedule from "../views/affair/CarSchedule.vue";
import DrvList from "../views/affair/DrvList.vue";
import DrvDetail from "../views/affair/DrvDetail.vue";
// import EduList from "../views/affair/EduList.vue";
// import EduDetail from "../views/affair/EduDetail.vue";
// import EduWrite from "../views/affair/EduWrite.vue";
import CompletionList from "../views/affair/CompletionList.vue";

var appname = " - SDD Partner";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },

  // Components based Routes
  {
    path: "/component/alert",
    name: "Valert",
    component: Valert,
    meta: { title: "Alert" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: Vaccrodion,
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: Vbadges,
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: Vbreadcumb,
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: Vbutton,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: Vcard,
    meta: { title: "Card" + appname },
  },
  {
    path: "/component/dropdown",
    name: "Vdropdown",
    component: Vdropdown,
    meta: { title: "Dropdown" + appname },
  },
  {
    path: "/component/modal",
    name: "Vmodal",
    component: Vmodal,
    meta: { title: "Modal" + appname },
  },
  // layouts

  {
    path: "/Blank",
    name: "Blank Page",
    component: Blank,
    meta: { title: "Blank Page" + appname },
  },

  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: { title: "Login" + appname, hideNav: true },
  },
  {
    path: "/auth/register",
    name: "Register",
    component: Register,
    meta: { title: "Register" + appname, hideNav: true },
  },
  {
    path: "/auth/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { title: "i Forgot Password" + appname, hideNav: true },
  },
  // layout/error
  // default page 404
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: Page404,
    meta: { title: "Upps! 404" + appname, hideNav: true },
  },
  {
    path: "/500",
    name: "Page500",
    component: Page500,
    meta: { title: "Server internal Error" + appname, hideNav: true },
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: PageMaintenance,
    meta: {
      title: "Sorry the app has been Maintenance" + appname,
      hideNav: true,
    },
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      title: "Tables" + appname,
    },
  },
  {
    path: "/HR/employee",
    name: "Employee",
    component: () => import("../views/HR/Employee.vue"),
    meta: {
        title: "Employee" + appname,
    }
  },
  {
    path: "/HR/counseling",
    name: "Counseling",
    component: () => import("../views/HR/Counseling.vue"),
    meta: {
        title: "Counseling" + appname,
    }
  },
  {
    path: "/HR/AD",
    name: "AD",
    component: () => import("../views/HR/AD.vue"),
    meta: {
        title: "AD" + appname,
    }
  },
  {
    path: "/HR/insurance",
    name: "Insurance",
    component: () => import("../views/HR/Insurance.vue"),
    meta: {
        title: "Insurance" + appname,
    }
  },
  {
    path: "/HR/dispatch",
    name: "Dispatch",
    component: () => import("../views/HR/Dispatch.vue"),
    meta: {
        title: "Dispatch" + appname,
    }
  },
        //mypage (김영우 5/4일 추가)
  {
    path: "/mypage/myInfo",
    name: "MyInfo",
    component: MyInfo,
    meta: {
      title: "MyInfo" + appname,
    },
  },
  {
    path: "/mypage/changePassword",
    name: "ChangePassword",
    component: ChangePassword,
    meta: {
      title: "ChangePassword" + appname,
    },
  },
  {
    path: "/mypage/appointmentInfo",
    name: "AppointmentInfo",
    component: AppointmentInfo,
    meta: {
      title: "AppointmentInfo" + appname,
    },
  },
  {
    path: "/mypage/requestCounsel",
    name: "RequestCounsel",
    component: RequestCounsel,
    meta: {
      title: "RequestCounsel" + appname,
    },
  },
    // 전자결재 항목 (김영우 5/9일 추가)
  {
    path: "/ea/eaRequest",
    name: "EaRequest",
    component: EaRequest,
    meta: {
      title: "EaRequest" + appname,
    },
  },
  {
    path: "/ea/eaRequestList",
    name: "EaRequestList",
    component: EaRequestList,
    meta: {
      title: "EaRequestList" + appname,
    },
  },
  {
    path: "/ea/eaApprovalList",
    name: "EaApprovalList",
    component: EaApprovalList,
    meta: {
      title: "EaApprovalList" + appname,
    },
  },
  // {
  //   path: "/dayoff",
  //   name: "dayoff",
  //   component: dayoff,
  //
  // },
  {
    path: "/salary",
    name: "Salary",
    component: Salary,


  },
  {
    path: "/attendance",
    name: "attendance",
    component: attendance,

  },
  {
    path: "/searchemplyoee",
    name: "searchemplyoee",
    component: searchemplyoee,

  },
  {
    path: "/document",
    name: "document",
    component: DocumentList
  },
  {
    path: "/documentDetail/:id",
    name: "documentDetail",
    component: DocumentDetail
  },
  {
    path: "/teamCalendar",
    name: "teamCalendar",
    component: TeamCalendar
  },
  {
    path: "/documentWrite",
    name: "documentWrite",
    component: DocumentWrite
  },
  {
    path: "/adminPermission",
    name: "adminPermission",
    component: AdminPermission
  },
  {
    path: "/teamCalendarWrite",
    name: "teamCalendarWrite",
    component: TeamCalendarWrite
  },
  {
    path: "/adminCreate",
    name: "adminCreate",
    component: AdminCreate
  },
      {
    path: "/Affairs",
    name: "Affairs",
    component: Affairs,
    meta: { title: "Affairs " + appname },
  },  {
    path: "/NoticeList",
    name: "NoticeList",
    component: NoticeList,
    meta: { title: "NoticeList " + appname },
  },  {
    path: "/NoticeDetail",
    name: "NoticeDetail",
    component: NoticeDetail,
    meta: { title: "NoticeDetail " + appname },
  },  {
    path: "/NoticeWrite",
    name: "NoticeWrite",
    component: NoticeWrite,
    meta: { title: "NoticeWrite " + appname },
  },  {
    path: "/RoomList",
    name: "RoomList",
    component: RoomList,
    meta: { title: "RoomList " + appname },
  },  {
    path: "/RoomApprove",
    name: "RoomApprove",
    component: RoomApprove,
    meta: { title: "RoomApprove " + appname },
  },  {
    path: "/RoomSchedule",
    name: "RoomSchedule",
    component: RoomSchedule,
    meta: { title: "RoomSchedule " + appname },
  },  {
    path: "/CarList",
    name: "CarList",
    component: CarList,
    meta: { title: "CarList " + appname },
  },  {
    path: "/CarApprove",
    name: "CarApprove",
    component: CarApprove,
    meta: { title: "CarApprove " + appname },
  },  {
    path: "/CarSchedule",
    name: "CarSchedule",
    component: CarSchedule,
    meta: { title: "CarSchedule " + appname },
  },  {
    path: "/DrvList",
    name: "DrvList",
    component: DrvList,
    meta: { title: "DrvList " + appname },
  },  {
    path: "/DrvDetail",
    name: "DrvDetail",
    component: DrvDetail,
    meta: { title: "DrvDetail " + appname },
  },
  // {
  //   path: "/EduList",
  //   name: "EduList",
  //   component: EduList,
  //   meta: { title: "EduList " + appname },
  // },  {
  //   path: "/EduDetail",
  //   name: "EduDetail",
  //   component: EduDetail,
  //   meta: { title: "EduDetail " + appname },
  // },  {
  //   path: "/EduWrite",
  //   name: "EduWrite",
  //   component: EduWrite,
  //   meta: { title: "EduWrite " + appname },
  // },
  {
    path: "/CompletionList",
    name: "CompletionList",
    component: CompletionList,
    meta: { title: "CompletionList " + appname },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
//
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
