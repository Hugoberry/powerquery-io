---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


A negyedév végét adja vissza.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

A következőt tartalmazó negyedév végét adja vissza: `dateTime`. A rendszer megőrzi az időzónával kapcsolatos adatokat.

-   `dateTime`: Egy `date`, `datetime` vagy `datetimezone` típusú érték, amelyből a negyedév végének a számítása történik.


## Examples

### Example #1
A negyedév végének megállapítása 2011. október 10., 8:00 esetén.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
