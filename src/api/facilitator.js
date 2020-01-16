import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/Admin/ServiceName/getList', // 假地址 自行替换
    method: 'post',
    data
  })
}

export function setAdd(data) {
  return request({
    url: '/Admin/ServiceName/setAdd', // 假地址 自行替换
    method: 'post',
    data
  })
}

export function getDetails(data) {
  return request({
    url: '/Admin/ServiceName/getDetails', // 假地址 自行替换
    method: 'post',
    data
  })
}
export function setEdit(data) {
  return request({
    url: '/Admin/ServiceName/setEdit', // 假地址 自行替换
    method: 'post',
    data
  })
}
