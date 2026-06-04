---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 이전 몇 년 이내에 속하는지 여부를 나타냅니다. 현재 연도에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간을 기준으로 이전 몇 년 이내에 속하는지 여부를 나타냅니다. 현재 연도에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `years`: 년도 수입니다.


## Examples

### Example #1
현재 시스템 시간 이전의 년도가 이전 2년 이내에 있는지 여부를 확인합니다.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
