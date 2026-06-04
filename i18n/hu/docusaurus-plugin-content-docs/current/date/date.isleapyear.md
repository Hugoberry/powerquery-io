---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Azt jelzi, hogy ez a dátum szökőévre esik-e.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Azt jelzi, hogy a megadott `dateTime` datetime érték szökőévre esik-e.

-   `dateTime`: A kiértékelendő `date`, `datetime` vagy `datetimezone` érték.


## Examples

### Example #1
Annak megállapítása, hogy a `#date(2012, 01, 01)` érték által jelölt 2012-es év szökőév-e
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
