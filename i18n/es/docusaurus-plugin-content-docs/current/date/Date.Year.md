---
title: Date.Year
---

# Date.Year


Devuelve el componente de año.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Devuelve el componente de año del valor <code>datetime</code> proporcionado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar el año en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
