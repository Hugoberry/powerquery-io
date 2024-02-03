---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 다음 날짜에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 날짜에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간 이후의 날짜가 다음 날짜에 속하는지 여부를 확인합니다.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date