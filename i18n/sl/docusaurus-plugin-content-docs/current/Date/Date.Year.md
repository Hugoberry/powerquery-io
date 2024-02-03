---
title: Date.Year
---

# Date.Year


## Description

Vrne komponento leta.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Vrne komponento leta podane vrednosti <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Poiščite vrednost leta v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
