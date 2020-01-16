import request from '@/utils/request'

// 获取订单列表接口
export function getorderlist(query) {
  return request({
    url: '/Admin/Order/getList', // 假地址 自行替换
    method: 'post',
    data: query
  })
}

// 获取订单详情接口
export function getorderdetails(query) {
  return request({
    url: '/Admin/Order/getOrder', // 假地址 自行替换
    method: 'post',
    data: query
  })
}
