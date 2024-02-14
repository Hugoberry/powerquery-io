---
title: Date.Month
---

# Date.Month


Devuelve el componente del mes


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Devuelve el componente de mes del valor <code>datetime</code> proporcionado, <code>dateTime</code>.


## Examples

### Example #1 
Buscar el mes en #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
