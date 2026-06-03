---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Restituisce l'inizio del trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Restituisce l'inizio del trimestre contenente`dateTime`. `dateTime` deve essere un valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Trovare l’inizio del trimestre per il 10 ottobre 2011, 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
