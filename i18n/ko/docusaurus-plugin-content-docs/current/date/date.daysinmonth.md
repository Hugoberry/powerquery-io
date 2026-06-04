---
title: Date.DaysInMonth
---

# Date.DaysInMonth


월간 일 수를 나타내는 28에서 31 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

`date`, `datetime` 또는 `datetimezone` 값 `dateTime`의 월간 일 수를 반환합니다.

-   `dateTime`: 월간 일 수를 반환할 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
`#date(2011, 12, 01)`로 표시된 12월의 일 수입니다.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
