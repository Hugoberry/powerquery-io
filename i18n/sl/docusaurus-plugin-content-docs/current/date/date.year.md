---
title: Date.Year
---

# Date.Year


Vrne komponento leta.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Vrne komponento leta podane vrednosti `datetime`, `dateTime`.


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
