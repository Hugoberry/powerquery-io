---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica se la data cade in un anno bisestile.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` cade in un anno bisestile.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'anno 2012, come rappresentato da `#date(2012, 01, 01)` è un anno bisestile.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
