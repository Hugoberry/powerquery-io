---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


이 날짜가 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 연도에 속하고 현재 날짜 또는 그 이전인지 여부를 나타냅니다.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 연도에 속하고 현재 날짜 또는 그 이전인지 여부를 나타냅니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
현재 시스템 시간이 연간 누계에 속하는지 여부를 확인합니다.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
