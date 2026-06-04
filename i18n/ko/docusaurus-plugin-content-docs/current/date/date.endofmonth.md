---
title: Date.EndOfMonth
---

# Date.EndOfMonth


월의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

`dateTime`이(가) 포함된 월말을 반환합니다.

-   `dateTime`: 월말이 계산되는 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
2011년 5월 14일에 대한 월의 끝을 가져옵니다.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
2011년 5월 17일 오후 05:00:00 -7:00에 대한 월의 끝을 가져옵니다.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
