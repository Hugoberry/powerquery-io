---
title: Date.Year
---

# Date.Year


## Description

Palauttaa vuosiosan.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Palauttaa annetun <code>datetime</code>-arvon <code>dateTime</code> vuosiosan.


## Examples

### Example #1 
Selvitä vuosi kohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
