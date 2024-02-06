---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Devuelve el final del trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Devuelve el final del trimestre que contiene <code>dateTime</code>. Se conserva la información de zona horaria.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir del cual se calcula el final del trimestre.</li>      </ul>


## Examples

### Example #1 
Buscar el final del trimestre del 10 de octubre de 2011, 8:00 a.m.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
