---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


시스템의 현재 날짜 및 시간을 기준으로 이 날짜/시간이 다음 주에 속하는지 여부를 나타냅니다. 현재 주에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 이전 몇 시간 이내에 속하는지 여부를 나타냅니다. 현재 시간에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `datetime` 또는 `datetimezone` 값입니다.
-   `hours`: 몇 시간인지 나타내는 수.


## Examples

### Example #1
현재 시스템 시간 이전의 시간이 이전 2시간 이내에 있는지 여부를 확인합니다.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
