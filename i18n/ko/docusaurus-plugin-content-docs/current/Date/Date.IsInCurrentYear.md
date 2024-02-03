---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

이 날짜가 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 연도에 속하는지 여부를 나타냅니다.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 연도에 속하는지 여부를 나타냅니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간이 현재 연도에 속하는지 여부를 확인합니다.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
