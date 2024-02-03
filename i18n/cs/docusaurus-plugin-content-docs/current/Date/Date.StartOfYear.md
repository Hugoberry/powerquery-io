---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Vrátí začátek roku.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Vrátí začátek roku, který obsahuje <code>dateTime</code>.    <code>dateTime</code> musí být hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Najděte začátek roku pro 10. října 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
