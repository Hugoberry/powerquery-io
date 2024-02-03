---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 다음 며칠 이내에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 며칠 이내에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>days</code>: 일수입니다.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간 이후의 일이 향후 2일 이내에 있는지 여부를 확인합니다.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
