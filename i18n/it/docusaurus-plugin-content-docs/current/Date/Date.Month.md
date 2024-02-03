---
title: Date.Month
---

# Date.Month


## Description

Restituisce il componente mese.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Restituisce il componente mese del valore <code>datetime</code> specificato <code>dateTime</code>.


## Examples

### Example #1 
Trovare il mese in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
