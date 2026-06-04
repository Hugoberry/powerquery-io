---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


A negyedév kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

A következőt tartalmazó negyedév kezdetét adja vissza: `dateTime`. A(z) `dateTime` csak `date`, `datetime` vagy `datetimezone` típusú érték lehet.


## Examples

### Example #1
A negyedév kezdetének megállapítása 2011. október 10., 8:00 esetén.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
