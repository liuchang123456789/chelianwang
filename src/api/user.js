import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/Admin/Login/login',
    method: 'post',
    data: {account: data.account, password: data.password},
	
  })
}

export function getInfo(token) {
  return request({
    url: '/Admin/Login/getInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/Admin/Login/logout',
    method: 'post'
  })
}
