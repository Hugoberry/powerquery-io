---
title: Date.Year
---

# Date.Year


Pateikiamas metų komponentas.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Pateikiamas nurodytos `datetime` reikšmės metų komponentas, `dateTime`.


## Examples

### Example #1
Rasti metus #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
