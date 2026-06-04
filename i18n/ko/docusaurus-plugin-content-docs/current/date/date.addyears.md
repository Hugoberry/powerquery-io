---
title: Date.AddYears
---

# Date.AddYears


날짜에 지정된 연 수를 더합니다.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

`datetime` 값 `dateTime`에 `numberOfYears`년을 더해 얻은 `date`, `datetime` 또는 `datetimezone` 결과를 반환합니다.

-   `dateTime`: 연 수를 더할 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `numberOfYears`: 더할 연 수입니다.


## Examples

### Example #1
날짜 2011년 5월 14일을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 4년을 더합니다.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
2011년 5월 14일 오전 08:15:22의 날짜 및 시간을 나타내는 `date`, `datetime` 또는 `datetimezone` 값에 10년을 더합니다.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
