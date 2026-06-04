---
title: Date.Month
---

# Date.Month


Retorna el component mes.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Retorna el component mes del valor `datetime` proporcionat, `dateTime`.


## Examples

### Example #1
Troba el mes en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
