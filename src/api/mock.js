import request from '@/plugin/axios'

export  function mock() {
    return request({
        url:'mock'
    })
}
