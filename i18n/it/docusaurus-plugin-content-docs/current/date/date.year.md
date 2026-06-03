---
title: Date.Year
---

# Date.Year


Restituisce il componente anno.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Restituisce il componente anno del valore `datetime` specificato `dateTime`.


## Examples

### Example #1
Trovare l'anno in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
