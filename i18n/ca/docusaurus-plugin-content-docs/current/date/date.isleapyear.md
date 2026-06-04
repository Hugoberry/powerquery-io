---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica si aquesta data cau en un any de traspàs.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` proporcionat s'escau en un any de traspàs.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'any 2012, representat per `#date(2012, 01, 01)`, és un any de traspàs.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
