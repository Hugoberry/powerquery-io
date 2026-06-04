---
title: Date.Month
---

# Date.Month


Returnează componenta month.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Returnează componenta month a valorii `datetime` specificate, `dateTime`.


## Examples

### Example #1
Găsiţi luna din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
