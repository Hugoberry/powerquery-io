---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Restituisce la fine del trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Restituisce la fine del trimestre contenente `dateTime`. Le informazioni sul fuso orario vengono mantenute.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da cui viene calcolata la fine del trimestre.


## Examples

### Example #1
Trovare la fine del trimestre per il 10 ottobre 2011, 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
