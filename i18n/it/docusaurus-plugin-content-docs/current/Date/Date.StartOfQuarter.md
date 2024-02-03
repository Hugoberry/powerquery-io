---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Restituisce l&#39;inizio del trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Restituisce l'inizio del trimestre contenente<code>dateTime</code>.      <code>dateTime</code> deve essere un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


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
