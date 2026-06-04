---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


이 날짜/시간이 시스템의 현재 날짜 및 시간을 기준으로 현재 시간에 포함되는지 여부를 나타냅니다.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 현재 시간에 포함되는지 여부를 나타냅니다.

-   `dateTime`: 평가할 `datetime` 또는 `datetimezone` 값입니다.


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
