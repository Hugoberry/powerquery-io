---
title: Date.StartOfYear
---

# Date.StartOfYear


Restituisce l&#39;inizio dell’anno.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Restituisce l'inizio dell’anno contenente<code>dateTime</code>.    <code>dateTime</code> deve essere un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Trovare l&#39;inizio dall&#39;anno per il 10 ottobre 2011, 8.10.32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
