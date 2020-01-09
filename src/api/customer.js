import request from '@/utils/request'

export function customerUser(query) {
  return request({
    url: '/Admin/CustomerUser/index',
    method: 'get',
    params: query  
  })
}


export function setAdd(query) {
  return request({
    url: '/Admin/CustomerUser/setAdd',
    method: 'get',
    params: query
  })
}

export function getDetails(query) {
  return request({
    url: '/Admin/CustomerUser/getDetails',
    method: 'get',
    params: query
  })
}
export function setEdit(query) {
  return request({
    url: '/Admin/CustomerUser/setEdit',
    method: 'get',
    params: query
  })
}