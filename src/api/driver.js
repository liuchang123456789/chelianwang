import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/Admin/Driver/getList',
    method: 'get',
    params: query
  })
}

export function setDriver(query) {
  return request({
    url: '/Admin/Driver/setDriver',
    method: 'get',
    params: query
  })
}

export function getDetails(query) {
  return request({
    url: '/Admin/Driver/getDetails',
    method: 'get',
    params: query
  })
}
export function setEdit(query) {
  return request({
    url: '/Admin/Driver/setEdit',
    method: 'get',
    params: query
  })
}

