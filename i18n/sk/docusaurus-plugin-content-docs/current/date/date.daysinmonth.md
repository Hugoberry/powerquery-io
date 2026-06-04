---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Vráti číslo od 28 do 31 udávajúce počet dní v mesiaci.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Vráti počet dní v mesiaci v rámci hodnoty `date`, `datetime` alebo `datetimezone` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, pre ktorú sa vráti počet dní v mesiaci.


## Examples

### Example #1
Počet dní v mesiaci december reprezentovanom hodnotou `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
