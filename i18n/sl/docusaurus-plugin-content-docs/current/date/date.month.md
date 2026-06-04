---
title: Date.Month
---

# Date.Month


Vrne komponento meseca.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Vrne komponento meseca podane vrednosti `datetime`, `dateTime`.


## Examples

### Example #1
Poiščite vrednost meseca v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
