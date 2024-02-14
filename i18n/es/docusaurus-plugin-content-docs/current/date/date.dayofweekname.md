---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Devuelve el nombre del día de la semana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Devuelve el nombre del día de la semana para el valor <code>date</code> proporcionado. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Obtener el nombre del día de la semana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
