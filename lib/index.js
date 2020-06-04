// 验证手机号
export function checkPhone(nums) {
    var reg = /^1[0-9]{10}$/
    if (!reg.test(nums)) {
        return false
    } else {
        return true
    }
}

// 去除字符串所有空格
export function trimAll(str) {
    return str.replace(/\s*/g,"");
}

// 去除字符串两遍空格
export function trimSides(str) {
    return str.replace(/^\s*|\s*$/g,"");
}

// 获取当前时间
export function getLocalTime (time, format) {
    time = new Date(time)
    let o = {
        'M+': time.getMonth() + 1, // month
        'D+': time.getDate(), // day
        'h+': time.getHours(), // hour
        'm+': time.getMinutes(), // minute
        's+': time.getSeconds(), // second
        'q+': Math.floor((time.getMonth() + 3) / 3), // quarter
        'S': time.getMilliseconds() // millisecond
    }
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return format
}

//  获取几天前的日期,几天后日期
export function getDay(day){
    var today = new Date();
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    let theHours = d.getHours();
    let theMinutes = d.getMinutes();
	var month = tMonth + 1
	if(month.toString().length == 1){
		month = "0" + month;
	}
	if(tDate.toString().length == 1){
		tDate = "0" + tDate;
	}
    if (theHours < 10) {
        theHours = '0' + theHours
    }
    if (theMinutes < 10) {
        theMinutes = '0' + theMinutes
    }
    tMonth = month;
    return tYear+"-"+tMonth+"-"+tDate + ' ' + theHours + ':' + theMinutes +':00';
}

// json数组根据key去重
export function uniqueArray (array, key) {
    var result = [array[0]];
    for(var i = 1; i < array.length; i++){
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
        if (item[key] == result[j][key]) {
            repeat = true;
            break;
        }
        }
        if (!repeat) {
        result.push(item);
        }
    }
    return result;
}

// json数组去重
export function removeRepeat(arr){
    let result = [];
    let temp = {}
    arr.forEach(item=>{
        if(!temp[item.a]){
            result.push(item)
            temp[item.a] = true;
        }
    })
    return result
}

// 两json数组交集
export function intersect(a, b){
    return result = b.filter(x=>{
        return a.some(y=>{
            return x.a==y.a;
        })
    })
}

//数组批量删除(arr1原数组，arr2需要删除的数组，str：id等字段)
export function arrDelete (arr1,arr2, str) {
    // arr1原数组
    let result = arr1.filter(function (item1) {
        return arr2.every(function (item2) {
            return item2[str] !== item1[str]
        })
    })
    return result
}

// 数组深拷贝
export function deepcopy(obj) {
    var out = [],
        i = 0,
        len = obj.length;
    for (; i < len; i++) {
        if (obj[i] instanceof Array) {
            out[i] = deepcopy(obj[i]);
        } else out[i] = obj[i];
    }
    return out;
}

// 数字转换成大写
export const toChinesNum = (num) => {
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
    let unit = ["", "十", "百", "千", "万"];
    num = parseInt(num);
    let getWan = (temp) => {
        let strArr = temp.toString().split("").reverse();
        let newNum = "";
        for (var i = 0; i < strArr.length; i++) {
            newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
        }
        return newNum;
    }
    let overWan = Math.floor(num / 10000);
    let noWan = num % 10000;
    if (noWan.toString().length < 4) noWan = "0" + noWan;
    return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
}

// UUID生成器
export const generateUUID = function () {
    let d = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
}

// 清空 空字符 查询条件
export const copySearchConditions = function (conditions) {
    let search = Object.assign({}, conditions)
    for (let key in search) {
        if (search[key] === undefined) {
            delete search[key]
        }
        if (String(search[key]).length === 0 || (typeof search[key] === 'number' && search[key] <= 0)) {
            delete search[key]
        }
    }
    return search
}