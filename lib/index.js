// 验证手机号
export function checkPhone(nums) {
    var reg = /^1[0-9]{10}$/
    if (!reg.test(nums)) {
        return false
    } else {
        return true
    }
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

// json数组去重
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