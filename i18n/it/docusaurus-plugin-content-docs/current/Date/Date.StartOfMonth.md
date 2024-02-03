---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Restituisce l&#39;inizio del mese.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Restituisce l'inizio del mese contenente <code>dateTime</code>.    <code>dateTime</code> deve essere un valore <code>date</code> o <code>datetime</code>.


## Examples

### Example #1 
Trovare l&#39;inizio del mese per il 10 ottobre 2011, 8.10.32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
