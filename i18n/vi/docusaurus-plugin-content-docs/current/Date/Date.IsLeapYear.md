---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Cho biết ngày này có rơi vào năm nhuận hay không.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị datetime cho sẵn <code>dateTime</code> có rơi vào năm nhuận hay không. <ul>        <li><code>dateTime</code>: Một giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định năm 2012, như được biểu thị bằng &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; có phải là năm nhuận hay không.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
