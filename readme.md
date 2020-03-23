## 用法举例
`npm install jmtools`  

`import { checkPhone, getLocalTime } from 'jmtools'`

### 手机号验证

`checkPhone(13611112222)  //返回值true  false`

### 获取当前日期时间

`getLocalTime(new Date(), 'YYYY-MM-DD hh:mm:ss')`

### 根据某参数，json数组去重

`let array = [{name: '张三',age: '12'},{name: '李四',age: '18'},{name: '张三',age: '12'}]`
`uniqueArray(array, 'age')`
