---
title: Date.StartOfYear
---

# Date.StartOfYear


Az év kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

A következőt tartalmazó év kezdetét adja vissza: `dateTime`. A(z) `dateTime` csak `date`, `datetime` vagy `datetimezone` típusú érték lehet.


## Examples

### Example #1
Az év kezdetének megállapítása 2011. október 10., 8:10:32 esetén.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
