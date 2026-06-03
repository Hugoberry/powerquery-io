---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Restituisce l'inizio del mese.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Restituisce l'inizio del mese contenente `dateTime`. `dateTime` deve essere un valore `date` o `datetime`.


## Examples

### Example #1
Trovare l'inizio del mese per il 10 ottobre 2011, 8.10.32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
