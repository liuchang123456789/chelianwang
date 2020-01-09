import request from '@/utils/request'

export function orderList(query) {
  return request({
    url: '/Admin/Order/getList',
    method: 'get',
    params: query
  })
}