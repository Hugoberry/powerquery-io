---
title: Date.AddMonths
---

# Date.AddMonths


날짜에 지정된 개월 수를 더합니다.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

`datetime` 값 `dateTime`에 `numberOfMonths`개월을 더해 얻은 `date`, `datetime` 또는 `datetimezone` 결과를 반환합니다.

-   `dateTime`: 개월 수를 더할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `numberOfMonths`: 더할 개월 수입니다.


## Examples

### Example #1
날짜 2011년 5월 14일을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 5개월을 더합니다.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
2011년 5월 14일 오전 08:15:22의 날짜 및 시간을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 18개월을 더합니다.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
