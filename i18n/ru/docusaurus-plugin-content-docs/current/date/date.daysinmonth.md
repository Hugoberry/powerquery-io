---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Возвращает число от 28 до 31, указывающее число дней в месяце.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Возвращает число дней в месяце в значении `date`, `datetime` или `datetimezone`: `dateTime`.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, для которого возвращается число дней в месяце.


## Examples

### Example #1
Число дней в декабре, представленное как `#date(2011, 12, 01)>`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
