---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Повертає число від 28 до 31, що представляє кількість днів у місяці.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Повертає кількість днів у місяці у значенні `date`, `datetime` або `datetimezone` `dateTime`.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, для якого повертається кількість днів у місяці.


## Examples

### Example #1
Кількість днів у місяці грудні, який представляється так: `#date(2011, 12, 01)>`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
