---
title: Date.Month
---

# Date.Month


Pateikiamas mėnesio komponentas.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Pateikiamas nurodytos `datetime` reikšmės mėnesio komponentas, `dateTime`.


## Examples

### Example #1
Rasti mėnesį #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
