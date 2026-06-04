---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 다음 몇 분기 이내에 속하는지 여부를 나타냅니다. 현재 분기에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 몇 분기 이내에 속하는지 여부를 나타냅니다. 현재 분기에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `quarters`: 분기 수입니다.


## Examples

### Example #1
현재 시스템 시간 이후의 분기가 향후 2분기 이내에 있는지 여부를 확인합니다.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
