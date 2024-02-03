---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

시스템의 현재 날짜 및 시간을 기준으로 이 날짜/시간이 이전 몇 초 이내에 속하는지 여부를 나타냅니다. 현재 초에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 이전 몇 초 이내에 속하는지 여부를 나타냅니다. 현재 초에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>seconds</code>: 몇 초인지 나타내는 수.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간 이전의 초가 이전 2초 이내에 있는지 여부를 확인합니다.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
