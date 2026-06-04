---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 이전 며칠 이내에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 이전 며칠 이내에 속하는지 여부를 나타냅니다. 현재 날짜에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `days`: 일수입니다.


## Examples

### Example #1
현재 시스템 시간 이전의 일이 이전 2일 이내에 있는지 여부를 확인합니다.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
