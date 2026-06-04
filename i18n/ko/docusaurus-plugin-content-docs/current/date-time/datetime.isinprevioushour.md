---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


시스템의 현재 날짜 및 시간을 기준으로 이 날짜/시간이 이전 시간에 속하는지 여부를 나타냅니다. 현재 시간에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 이전 시간에 속하는지 여부를 나타냅니다. 현재 시간에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
현재 시스템 시간 이전의 시간이 이전 시간에 포함되는지 여부를 확인합니다.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
