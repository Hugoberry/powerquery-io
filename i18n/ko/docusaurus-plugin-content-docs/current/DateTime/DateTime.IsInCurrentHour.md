---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

이 날짜/시간이 시스템의 현재 날짜 및 시간을 기준으로 현재 시간에 포함되는지 여부를 나타냅니다.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 현재 시간에 포함되는지 여부를 나타냅니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간이 현재 시간에 포함되는지 여부를 확인합니다.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
