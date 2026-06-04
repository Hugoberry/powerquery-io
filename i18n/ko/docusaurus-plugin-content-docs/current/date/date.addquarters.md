---
title: Date.AddQuarters
---

# Date.AddQuarters


날짜에 지정된 분기 수를 더합니다.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

`datetime` 값 `dateTime`에 `numberOfQuarters`분기를 더해 얻은 `date`, `datetime` 또는 `datetimezone` 결과를 반환합니다.

-   `dateTime`: 분기 수를 더할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `numberOfQuarters`: 더할 분기 수입니다.


## Examples

### Example #1
날짜 2011년 5월 14일을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 1분기를 더합니다.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
