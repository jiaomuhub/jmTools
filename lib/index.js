// 验证手机号
export function checkPhone(nums) {
    var reg = /^1[0-9]{10}$/
    if (!reg.test(nums)) {
        return false
    } else {
        return true
    }
}