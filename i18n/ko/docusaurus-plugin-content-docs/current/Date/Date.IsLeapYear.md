---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

이 날짜가 윤년에 속하는지 여부를 나타냅니다.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 윤년에 속하는지 여부를 나타냅니다. <ul>        <li><code>dateTime</code>: 평가할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;가 나타내는 2012년이 윤년인지 여부를 확인합니다.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
