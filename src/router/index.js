import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import tableRouter from './modules/table'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () => import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    title: 'V1.0.0监控台',
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    affix: false
  }]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
  path: '/order',
  component: Layout,
  meta: {
    title: '订单管理',
    icon: 'order',
    affix: false
  },
  children: [{
    path: 'orderlist',
    component: () => import('@/views/order/orderlist'),
    name: 'orderlist',
    meta: {
      title: '订单列表'
    }
  },
  {
    path: 'orderdetails',
    component: () => import('@/views/order/orderdetails'),
    name: 'orderdetails',
    meta: {
      title: '列表详情'
    }
  },
  {
    path: 'orderreview',
    component: () => import('@/views/order/orderreview'),
    name: 'orderreview',
    meta: {
      title: '订单审核'
    }
  },
  {
    path: 'dispatch',
    component: () => import('@/views/order/dispatch'),
    name: 'dispatch',
    meta: {
      title: '调度页面'
    }
  },
  {
    path: 'abnormal',
    component: () => import('@/views/order/abnormal'),
    name: 'abnormal',
    meta: {
      title: '异常登记'
    }
  },
  {
    path: 'limitation',
    component: () => import('@/views/order/limitation'),
    name: 'limitation',
    meta: {
      title: '时效罚款'
    }
  },
  {
    path: 'index',
    component: () => import('@/views/order/index'),
    name: 'order',
    meta: {
      title: '订单录入',
      affix: false
    }
  },
  {
    path: 'rejectorder',
    component: () => import('@/views/order/rejectorder'),
    name: 'order',
    meta: {
      title: '短驳订单',
      affix: false
    }
  },
  {
    path: 'rejectdetails',
    component: () => import('@/views/order/rejectdetails'),
    name: 'order',
    meta: {
      title: '短驳订单详情',
      affix: false
    }
  },
  {
    path: 'abnormalaudit',
    component: () => import('@/views/order/abnormalaudit'),
    name: 'order',
    meta: {
      title: '异常审核',
      affix: false
    }
  },
  {
    path: 'limitationaudit',
    component: () => import('@/views/order/limitationaudit'),
    name: 'order',
    meta: {
      title: '时效审核',
      affix: false
    }
  },
  {
    path: 'review',
    component: () => import('@/views/order/review'),
    name: 'order',
    meta: {
      title: '订单审核',
      affix: false
    }
  },
  {
    path: 'reviewreceipt',
    component: () => import('@/views/order/reviewreceipt'),
    name: 'order',
    meta: {
      title: '回单审核',
      affix: false
    }
  }
  ]
},

{
	  path: '/customer',
	  component: Layout,
	  meta: {
	    title: '客户管理',
	    icon: 'kehu',
	    affix: false
	  },
	  children: [{
	    path: 'archives',
	    component: () => import('@/views/customer/archives'),
	    name: 'archives',
	    meta: {
	      title: '客户档案'
	    }
	  },
	  {
	    path: 'addcustomer',
	    component: () => import('@/views/customer/addcustomer'),
	    name: 'addcustomer',
	    meta: {
	      title: '新增客户档案'
	    }
	  },
	  {
	    path: 'details',
	    component: () => import('@/views/customer/details'),
	    name: 'details',
	    hidden: true,
	    meta: {
	      title: '客户档案详情'
	    }
	  },

	  {
	    path: 'modify_files',
	    component: () => import('@/views/customer/modify_files'),
	    name: 'modify_files',
	    hidden: true,
	    meta: {
	      title: '修改客户档案'
	    }
	  }
	  ]
},
{
	  path: '/vehicle',
	  component: Layout,
	  meta: {
	    title: '车辆管理',
	    icon: 'cheliang',
	    affix: false
	  },
	  children: [{
	    path: 'vehiclefiles',
	    component: () => import('@/views/vehicle/vehiclefiles'),
	    name: 'vehiclefiles',
	    meta: {
	      title: '车辆档案'
	    }
	  },
	  {
	    path: 'addvehicle',
	    component: () => import('@/views/vehicle/addvehicle'),
	    name: 'addvehicle',
	    meta: {
	      title: '新增车辆档案'
	    }
	  },
	  {
	    path: 'addtrailer',
	    component: () => import('@/views/vehicle/addtrailer'),
	    name: 'addtrailer',
	    meta: {
	      title: '新增车辆挂车档案'
	    }
	  },
	  {
	    path: 'maintenance',
	    component: () => import('@/views/vehicle/maintenance'),
	    name: 'maintenance',
	    meta: {
	      title: '维保提醒表'
	    }
	  },
	  {
	    path: 'vehicle_details',
	    component: () => import('@/views/vehicle/vehicle_details'),
	    name: 'vehicle_details',
	    hidden: true,
	    meta: {
	      title: '车辆详情档案'
	    }
	  },
	  {
	    path: 'vehicle_modification',
	    component: () => import('@/views/vehicle/vehicle_modification'),
	    name: 'vehicle_modification',
	    hidden: true,
	    meta: {
	      title: '车辆修改'
	    }
	  },
	  {
	    path: 'remindersheet',
	    component: () => import('@/views/vehicle/remindersheet'),
	    name: 'remindersheet',
	    meta: {
	      title: '提醒记录表'
	    }
	  }
	  ]
},

{
	  path: '/driver',
	  component: Layout,
	  meta: {
	    title: '司机管理',
	    icon: 'siji',
	    affix: false
	  },
	  children: [{
	    path: 'driverfiles',
	    component: () => import('@/views/driver/driverfiles'),
	    name: 'driverfiles',
	    meta: {
	      title: '司机档案'
	    }
	  },
	  {
	    path: 'driver_details',
	    component: () => import('@/views/driver/driver_details'),
	    name: 'driver_details',
	    hidden: true,
	    meta: {
	      title: '司机详情'
	    }
	  },
	  {
	    path: 'modify_driver',
	    component: () => import('@/views/driver/modify_driver'),
	    name: 'modify_driver',
	    hidden: true,
	    meta: {
	      title: '司机详情'
	    }
	  },
	  {
	    path: 'adddriverfiles',
	    component: () => import('@/views/driver/adddriverfiles'),
	    name: 'adddriverfiles',
	    meta: {
	      title: '新增司机档案'
	    }
	  },
	  {
	    path: 'timesheet',
	    component: () => import('@/views/driver/timesheet'),
	    name: 'timesheet',
	    meta: {
	      title: '司机考勤表'
	    }
	  },
	  {
	    path: 'calendar',
	    component: () => import('@/views/driver/calendar'),
	    name: 'calendar',
	    meta: {
	      title: '考勤月历表'
	    }
	  }
	  ]
},

{
  path: '/administration',
  component: Layout,
  meta: {
    title: '站点管理',
    icon: 'zhandian',
    affix: false
  },
  children: [{
    path: 'sitefiles',
    component: () => import('@/views/administration/sitefiles'),
    name: 'sitefiles',
    meta: {
      title: '站点档案'
    }
  },
  {
    path: 'addsite',
    component: () => import('@/views/administration/addsite'),
    name: 'addsite',
    meta: {
      title: '新增站点'
    }
  },
  {
    path: 'vehicleaccess',
    component: () => import('@/views/administration/vehicleaccess'),
    name: 'vehicleaccess',
    meta: {
      title: '站点车辆出入'
    }
  },
  {
    path: 'driveraccess',
    component: () => import('@/views/administration/driveraccess'),
    name: 'driveraccess',
    meta: {
      title: '站点司机出入'
    }
  },
  {
    path: 'sitemanage',
    component: () => import('@/views/administration/sitemanage'),
    name: 'sitemanage',
    meta: {
      title: '站点接驳管理'
    }
  },
  {
    path: 'shuttleconfirmation',
    component: () => import('@/views/administration/shuttleconfirmation'),
    name: 'shuttleconfirmation',
    meta: {
      title: '接驳确认'
    }
  }
  ]
},
{
	  path: '/facilitator',
	  component: Layout,
	  meta: {
	    title: '服务商管理',
	    icon: 'fuwushang',
	    affix: false
	  },
	  children: [{
	    path: 'facilitatorfiles',
	    component: () => import('@/views/facilitator/facilitatorfiles'),
	    name: 'facilitatorfiles',
	    meta: {
	      title: '服务商档案'
	    }
	  },
	  {
	    path: 'addfacilitator',
	    component: () => import('@/views/facilitator/addfacilitator'),
	    name: 'addfacilitator',
	    meta: {
	      title: '新增服务商'
	    }
	  },
  {
		  path: 'service_details',
		  component: () => import('@/views/facilitator/service_details'),
		  name: 'service_details',
    hidden: true,
		  meta: {
		    title: '服务商详情'
		  }
  },
  {
		  path: 'service_modify',
		  component: () => import('@/views/facilitator/service_modify'),
		  name: 'service_modify',
    hidden: true,
		  meta: {
		    title: '修改服务商'
		  }
  },
	  {
	    path: 'newproduct',
	    component: () => import('@/views/facilitator/newproduct'),
	    name: 'newproduct',
	    meta: {
	      title: '新增产品'
	    }
	  },
	  {
	    path: 'ect',
	    component: () => import('@/views/facilitator/ECT'),
	    name: 'ect',
	    meta: {
	      title: 'ECT管理'
	    }
	  },
	  {
	    path: 'addect',
	    component: () => import('@/views/facilitator/addect'),
	    name: 'addect',
	    meta: {
	      title: '新增ECT'
	    }
	  },
	  {
	    path: 'oilcard',
	    component: () => import('@/views/facilitator/oilcard'),
	    name: 'oilcard',
	    meta: {
	      title: '油卡管理'
	    }
	  },
	  {
	    path: 'addoil',
	    component: () => import('@/views/facilitator/addoil'),
	    name: 'addoil',
	    meta: {
	      title: '新增油卡'
	    }
	  },
	  {
	    path: 'maintenance',
	    component: () => import('@/views/facilitator/maintenance'),
	    name: 'maintenance',
	    meta: {
	      title: '维修保养管理'
	    }
	  },
	  {
	    path: 'newmaintenance',
	    component: () => import('@/views/facilitator/newmaintenance'),
	    name: 'newmaintenance',
	    meta: {
	      title: '新增维保'
	    }
	  }
	  ]
},
{
  path: '/finance',
  component: Layout,
  meta: {
    title: '财务管理',
    icon: 'caiwu',
    affix: false
  },
  children: [{
    path: 'customer',
    component: () => import('@/views/finance/customer'),
    name: 'customer',
    meta: {
      title: '客户对账单'
    }
  },
  {
    path: 'invoice',
    component: () => import('@/views/finance/invoice'),
    name: 'invoice',
    meta: {
      title: '开票'
    }
  },
  {
    path: 'moneyback',
    component: () => import('@/views/finance/moneyback'),
    name: 'moneyback',
    meta: {
      title: '回款'
    }
  },
  {
    path: 'writeoff',
    component: () => import('@/views/finance/writeoff'),
    name: 'writeoff',
    meta: {
      title: '核销'
    }
  },
  {
    path: 'driverbill',
    component: () => import('@/views/finance/driverbill'),
    name: 'driverbill',
    meta: {
      title: '司机对账单'
    }
  },
  {
    path: 'facilitatorbill',
    component: () => import('@/views/finance/facilitatorbill'),
    name: 'facilitatorbill',
    meta: {
      title: '服务商对账单'
    }
  },
  {
    path: 'reimbursement',
    component: () => import('@/views/finance/reimbursement'),
    name: 'reimbursement',
    meta: {
      title: '报销处理'
    }
  },
  {
    path: 'newreimbursement',
    component: () => import('@/views/finance/newreimbursement'),
    name: 'newreimbursement',
    meta: {
      title: '新增报销'
    }
  },
  {
    path: 'penalty',
    component: () => import('@/views/finance/penalty'),
    name: 'penalty',
    meta: {
      title: '违规罚款处理'
    }
  },
  {
    path: 'newviolations',
    component: () => import('@/views/finance/newviolations'),
    name: 'newviolations',
    meta: {
      title: '新增违规罚款'
    }
  },
  {
    path: 'financialfield',
    component: () => import('@/views/finance/financialfield'),
    name: 'financialfield',
    meta: {
      title: '财务字段设置'
    }
  }
  ]
},

{
  path: '/datareport',
  component: Layout,
  meta: {
    title: '数据管理',
    icon: 'shuju',
    affix: false
  },
  children: [{
    path: 'doubledrive',
    component: () => import('@/views/datareport/doubledrive'),
    name: 'doubledrive',
    meta: {
      title: '运营明细表(双驾)'
    }
  },
  {
    path: 'singlevehicle',
    component: () => import('@/views/datareport/singlevehicle'),
    name: 'singlevehicle',
    meta: {
      title: '运营明细表(接驳)'
    }
  },
  {
    path: 'orderaging',
    component: () => import('@/views/datareport/orderaging'),
    name: 'orderaging',
    meta: {
      title: '时效表(订单)'
    }
  },
  {
    path: 'driveraging',
    component: () => import('@/views/datareport/driveraging'),
    name: 'driveraging',
    meta: {
      title: '时效表(司机)'
    }
  },
  {
    path: 'drawdispatch',
    component: () => import('@/views/datareport/drawdispatch'),
    name: 'drawdispatch',
    meta: {
      title: '调度列表(双驾)'
    }
  },
  {
    path: 'shuttleschedule',
    component: () => import('@/views/datareport/shuttleschedule'),
    name: 'shuttleschedule',
    meta: {
      title: '调度列表(接驳)'
    }
  },
  {
    path: 'oilwear',
    component: () => import('@/views/datareport/oilwear'),
    name: 'oilwear',
    meta: {
      title: '油耗表'
    }
  },
  {
    path: 'connectionOilwear',
    component: () => import('@/views/datareport/connectionOilwear'),
    name: 'connectionOilwear',
    meta: {
      title: '油耗表(接驳)'
    }
  },
  {
    path: 'profitstatement',
    component: () => import('@/views/datareport/profitstatement'),
    name: 'profitstatement',
    meta: {
      title: '单车单趟利润表'
    }
  }
  ]
},
{
  path: '/system',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'xitong',
    affix: false
  },
  children: [{
    path: 'usercontrol',
    component: () => import('@/views/system/usercontrol'),
    name: 'usercontrol',
    meta: {
      title: '用户管理'
    }
  },
  {
    path: 'newaccount',
    component: () => import('@/views/system/newaccount'),
    name: 'newaccount',
    meta: {
      title: '新增账号'
    }
  },
  {
    path: 'role',
    component: () => import('@/views/system/role'),
    name: 'role',
    meta: {
      title: '角色管理'
    }
  },
  {
    path: 'newrole',
    component: () => import('@/views/system/newrole'),
    name: 'newrole',
    meta: {
      title: '新增角色'
    }
  },
  {
    path: 'organizational',
    component: () => import('@/views/system/organizational'),
    name: 'organizational',
    meta: {
      title: '组织管理'
    }
  },
  {
    path: 'audit',
    component: () => import('@/views/system/audit'),
    name: 'audit',
    meta: {
      title: '审核管理'
    }
  },
  {
    path: 'operationlog',
    component: () => import('@/views/system/operationlog'),
    name: 'operationlog',
    meta: {
      title: '操作日志'
    }
  },
  {
    path: 'notification',
    component: () => import('@/views/system/notification'),
    name: 'notification',
    meta: {
      title: '通知公告'
    }
  }
  ]
},
{
  path: '/alarmcenter',
  component: Layout,
  meta: {
    title: '报警中心',
    icon: 'baojin',
    affix: false
  },
  children: [{
    path: 'driveralarm',
    component: () => import('@/views/alarmcenter/driveralarm'),
    name: 'driveralarm',
    meta: {
      title: '司机证件报警'
    }
  },
  {
    path: 'caralarm',
    component: () => import('@/views/alarmcenter/caralarm'),
    name: 'caralarm',
    meta: {
      title: '车辆证件报警'
    }
  },
  {
    path: 'safealarm',
    component: () => import('@/views/alarmcenter/safealarm'),
    name: 'safealarm',
    meta: {
      title: '安全驾驶报警'
    }
  },
  {
    path: 'vehiclealarm',
    component: () => import('@/views/alarmcenter/vehiclealarm'),
    name: 'vehiclealarm',
    meta: {
      title: '车辆行驶报警'
    }
  }
  ]
},
{
  path: '/setting',
  component: Layout,
  hidden: true,
  children: [{
    path: 'basic',
    component: () => import('@/views/setting/basic'),
    name: 'basic',
    meta: {
      title: '基本信息'
    }
  },
  {
    path: 'changephone',
    component: () => import('@/views/setting/changephone'),
    name: 'changephone',
    meta: {
      title: '更换手机号'
    }
  },
  {
    path: 'changephone2',
    component: () => import('@/views/setting/changephone2'),
    name: 'changephone2',
    meta: {
      title: '更换手机号2'
    }
  },
  {
    path: 'changepassword',
    component: () => import('@/views/setting/changepassword'),
    name: 'changepassword',
    meta: {
      title: '修改登录密码'
    }
  },
  {
    path: 'review',
    component: () => import('@/views/setting/review'),
    name: 'review',
    meta: {
      title: '我的审核'
    }
  },
  {
    path: 'reviewDetails',
    component: () => import('@/views/setting/reviewDetails'),
    name: 'reviewDetails',
    meta: {
      title: '审核详情'
    }
  }
  ]
},

// {
//   path: '/permission',
//   component: Layout,
//   redirect: '/permission/page',
//   alwaysShow: false, // will always show the root menu
//   name: 'Permission',
//   meta: {
//     title: 'Permission',
//     icon: 'lock',
//     roles: ['admin', 'editor'] // you can set roles in root nav
//   },
//   children: [
//     {
//       path: 'page',
//       component: () => import('@/views/permission/page'),
//       name: 'PagePermission',
//       meta: {
//         title: 'Page Permission',
//         roles: ['admin'] // or you can only set roles in sub nav
//       }
//     },
//     {
//       path: 'directive',
//       component: () => import('@/views/permission/directive'),
//       name: 'DirectivePermission',
//       meta: {
//         title: 'Directive Permission'
//         // if do not set roles, means: this page does not require permission
//       }
//     },
//     {
//       path: 'role',
//       component: () => import('@/views/permission/role'),
//       name: 'RolePermission',
//       meta: {
//         title: 'Role Permission',
//         roles: ['admin']
//       }
//     }
//   ]
// },

// {
//   path: '/icon',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/icons/index'),
//       name: 'Icons',
//       meta: { title: 'Icons', icon: 'icon', noCache: true }
//     }
//   ]
// },

// /** when your routing map is too long, you can split it into small modules **/
// componentsRouter,
// tableRouter,

// {
//   path: '/example',
//   component: Layout,
//   redirect: '/example/list',
//   name: 'Example',
//   meta: {
//     title: 'Example',
//     icon: 'example'
//   },
//   children: [
//     {
//       path: 'create',
//       component: () => import('@/views/example/create'),
//       name: 'CreateArticle',
//       meta: { title: 'Create Article', icon: 'edit' }
//     },
//     {
//       path: 'edit/:id(\\d+)',
//       component: () => import('@/views/example/edit'),
//       name: 'EditArticle',
//       meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
//       hidden: true
//     },
//     {
//       path: 'list',
//       component: () => import('@/views/example/list'),
//       name: 'ArticleList',
//       meta: { title: 'Article List', icon: 'list' }
//     }
//   ]
// },

// {
//   path: '/tab',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/tab/index'),
//       name: 'Tab',
//       meta: { title: 'Tab', icon: 'tab' }
//     }
//   ]
// },

// {
//   path: '/error',
//   component: Layout,
//   redirect: 'noRedirect',
//   name: 'ErrorPages',
//   meta: {
//     title: 'Error Pages',
//     icon: '404'
//   },
//   children: [
//     {
//       path: '401',
//       component: () => import('@/views/error-page/401'),
//       name: 'Page401',
//       meta: { title: '401', noCache: true }
//     },
//     {
//       path: '404',
//       component: () => import('@/views/error-page/404'),
//       name: 'Page404',
//       meta: { title: '404', noCache: true }
//     }
//   ]
// },

// {
//   path: '/error-log',
//   component: Layout,
//   children: [
//     {
//       path: 'log',
//       component: () => import('@/views/error-log/index'),
//       name: 'ErrorLog',
//       meta: { title: 'Error Log', icon: 'bug' }
//     }
//   ]
// },

// {
//   path: '/excel',
//   component: Layout,
//   redirect: '/excel/export-excel',
//   name: 'Excel',
//   meta: {
//     title: 'Excel',
//     icon: 'excel'
//   },
//   children: [
//     {
//       path: 'export-excel',
//       component: () => import('@/views/excel/export-excel'),
//       name: 'ExportExcel',
//       meta: { title: 'Export Excel' }
//     },
//     {
//       path: 'export-selected-excel',
//       component: () => import('@/views/excel/select-excel'),
//       name: 'SelectExcel',
//       meta: { title: 'Export Selected' }
//     },
//     {
//       path: 'export-merge-header',
//       component: () => import('@/views/excel/merge-header'),
//       name: 'MergeHeader',
//       meta: { title: 'Merge Header' }
//     },
//     {
//       path: 'upload-excel',
//       component: () => import('@/views/excel/upload-excel'),
//       name: 'UploadExcel',
//       meta: { title: 'Upload Excel' }
//     }
//   ]
// },

// {
//   path: '/pdf',
//   component: Layout,
//   redirect: '/pdf/index',
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/pdf/index'),
//       name: 'PDF',
//       meta: { title: 'PDF', icon: 'pdf' }
//     }
//   ]
// },
// {
//   path: '/pdf/download',
//   component: () => import('@/views/pdf/download'),
//   hidden: true
// },

// {
//   path: '/theme',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/theme/index'),
//       name: 'Theme',
//       meta: { title: 'Theme', icon: 'theme' }
//     }
//   ]
// },

// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
