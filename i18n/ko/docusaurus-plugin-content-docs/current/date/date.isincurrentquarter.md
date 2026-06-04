---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


이 날짜가 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 분기에 속하는지 여부를 나타냅니다.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 시스템의 현재 날짜 및 시간에 따라 결정되는 현재 분기에 속하는지 여부를 나타냅니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
현재 시스템 시간이 현재 분기에 속하는지 여부를 확인합니다.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
