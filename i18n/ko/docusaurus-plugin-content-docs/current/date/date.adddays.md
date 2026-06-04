---
title: Date.AddDays
---

# Date.AddDays


날짜에 지정된 일 수를 더합니다.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

`datetime` 값 `dateTime`에 `numberOfDays`일을 더해 얻은 `date`, `datetime` 또는 `datetimezone` 결과를 반환합니다.

-   `dateTime`: 일 수를 더할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `numberOfDays`: 더할 일 수입니다.


## Examples

### Example #1
날짜 2011년 5월 14일을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 5일을 더합니다.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
