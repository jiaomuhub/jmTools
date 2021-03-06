## 用法举例
`npm install jmtools`  

`import { checkPhone, getLocalTime } from 'jmtools'`

### 手机号验证

`checkPhone(13611112222)  //返回值true  false`

### 正则校验合集

`checkStr(str,type)`

```bash
type参数说明：
手机号：phone
座机: tel
身份证: card
密码: pwd
邮编: postal
qq: QQ
邮箱: email
金额: money
网址: URL
IP: IP
日期: date
数字: number
英文: english
中文: chinese
小写: lower
大写: upper
HTML标记: HTML

```

### 去掉字符串中所有空格

`trimAll(' s d ')  //返回值 sd`

### 去掉字符串中两侧空格

`trimSides(' s d ')  //返回值 s d`

### 获取当前日期时间

`getLocalTime(new Date(), 'YYYY-MM-DD hh:mm:ss')`

### 获取几天前的日期（如下：3天前日期）

`getDay(-3)`

### 分钟转为天、时、分

`formatMinutes(60)`

### 根据某key值，json数组去重

```bash
let array = [{name: '张三',age: '12'},{name: '李四',age: '18'},{name: '张三',age: '12'}]
uniqueArray(array, 'age')
```

### json数组去重

```bash
let array = [{name: '张三',age: '12'},{name: '李四',age: '18'},{name: '张三',age: '12'}]
removeRepeat(array)
```

### 两json数组交集

```bash
let a = [{name: '张三',age: '12'},{name: '李四',age: '18'},{name: '王五',age: '15'}]
let b = [{name: '张三',age: '12'},{name: '张四',age: '18'},{name: '张五',age: '15'}]
intersect(a, b)
```

### 数组批量删除(a原数组，b需要删除的数组，name字段)

```bash
let a = [{name: '张三',age: '12'},{name: '李四',age: '18'},{name: '王五',age: '15'}]
let b = [{name: '张三',age: '12'},{name: '李四',age: '18'}]
arrDelete(a, b, 'name')
```

### 数组深拷贝

`deepcopy(arr)`

### 数字转换成大写

`toChinesNum(num)`

### UUID生成器

`generateUUID()`

### 清空 空字符 查询条件

`copySearchConditions(conditions)`
