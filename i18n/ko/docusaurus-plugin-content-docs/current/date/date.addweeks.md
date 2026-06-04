---
title: Date.AddWeeks
---

# Date.AddWeeks


날짜에 지정된 주 수를 더합니다.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

`datetime` 값 `dateTime`에 `numberOfWeeks`주를 더해 얻은 `date`, `datetime` 또는 `datetimezone` 결과를 반환합니다.

-   `dateTime`: 주 수를 더할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `numberOfWeeks`: 더할 주 수입니다.


## Examples

### Example #1
날짜 2011년 5월 14일을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 2주를 더합니다.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
