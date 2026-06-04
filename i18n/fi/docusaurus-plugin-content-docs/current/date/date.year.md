---
title: Date.Year
---

# Date.Year


Palauttaa vuosiosan.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Palauttaa annetun `datetime`\-arvon `dateTime` vuosiosan.


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
