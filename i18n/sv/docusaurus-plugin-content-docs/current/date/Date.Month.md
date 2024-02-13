---
title: Date.Month
---

# Date.Month


Returnerar månadskomponenten.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Returnerar månadskomponenten för angivet <code>datetime</code>-värde, <code>dateTime</code>.


## Examples

### Example #1 
Hitta månaden i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
