import request from '@/utils/request'

export function vehicle(data) {
  return request({
    url: '/Admin/Vehicle/getList', // 假地址 自行替换
    method: 'post',
	data  
  })
}

export function addVehicle(data) {
  return request({
    url: '/Admin/Vehicle/add', // 假地址 自行替换
    method: 'post',
	data
  })
}

export function delEte(data) {
  return request({
    url: '/Admin/Vehicle/delete', // 假地址 自行替换
    method: 'get',
	params: data
  })
}

export function detAils(data) {
  return request({
    url: '/Admin/Vehicle/details', // 假地址 自行替换
    method: 'post',
	params: data
  })
}

