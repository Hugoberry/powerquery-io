---
title: Date.Day
---

# Date.Day


일 구성 요소를 반환합니다.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

`date`, `datetime` 또는 `datetimezone` 값의 일 구성 요소를 반환합니다.

-   `dateTime`: 일 구성 요소를 추출할 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
2011년 5월 14일 오후 05:00:00의 날짜 및 시간을 나타내는 `date`, `datetime` 또는 `datetimezone` 값의 일 구성 요소를 가져옵니다.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
