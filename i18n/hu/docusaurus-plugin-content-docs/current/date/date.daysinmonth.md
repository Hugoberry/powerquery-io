---
title: Date.DaysInMonth
---

# Date.DaysInMonth


A hónapban levő napok számát jelző, 28 és 31 közötti számot ad vissza.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

A(z) `dateTime` `date`, `datetime` vagy `datetimezone` értékben lévő hónap napjainak számát adja vissza.

-   `dateTime`: Egy `date`, `datetime` vagy `datetimezone` típusú érték, amely esetében a hónap napjainak száma vissza lesz adva.


## Examples

### Example #1
A `#date(2011, 12, 01)` által jelölt december hónap napjainak száma.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
