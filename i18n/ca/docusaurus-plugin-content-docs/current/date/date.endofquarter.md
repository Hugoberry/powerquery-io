---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Retorna el final del trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Retorna el final del trimestre que conté el dia `dateTime`. Es conserva la informació del fus horari.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` a partir del qual es calcula el final del trimestre.


## Examples

### Example #1
Cerca el final del trimestre per al 10 d'octubre de 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
