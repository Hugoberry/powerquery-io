---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


시스템의 현재 날짜 및 시간을 기준으로 이 날짜/시간이 다음 초에 속하는지 여부를 나타냅니다. 현재 초에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 초에 속하는지 여부를 나타냅니다. 현재 초에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
현재 시스템 시간 이후의 초가 다음 초에 포함되는지 여부를 확인합니다.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
