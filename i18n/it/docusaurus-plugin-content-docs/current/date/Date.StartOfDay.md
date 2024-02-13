---
title: Date.StartOfDay
---

# Date.StartOfDay


Restituisce l&#39;inizio del giorno.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Restituisce l’inizio del giorno rappresentato da <code>dateTime</code>.    <code>dateTime</code> deve essere un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Trovare l&#39;inizio del giorno per il 10 ottobre 2011, 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
