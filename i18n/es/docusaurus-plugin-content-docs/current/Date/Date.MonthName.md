---
title: Date.MonthName
---

# Date.MonthName


Devuelve el nombre del componente del mes.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Devuelve el nombre del componente de mes para el valor <code>date</code> proporcionado. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el nombre del mes.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
