---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

시스템의 현재 날짜 및 시간을 기준으로 이 날짜/시간이 다음 몇 시간 이내에 속하는지 여부를 나타냅니다. 현재 시간에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 몇 시간 이내에 속하는지 여부를 나타냅니다. 현재 시간에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>hours</code>: 몇 시간인지 나타내는 수.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간 이후의 시간이 향후 2시간 이내에 있는지 여부를 확인합니다.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
