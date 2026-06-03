---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica si esta fecha cae en año bisiesto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime especificado `dateTime` cae en año bisiesto.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se evaluará.


## Examples

### Example #1
Determinar si el año 2012, según se representa en `#date(2012, 01, 01)`, es un año bisiesto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
