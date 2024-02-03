---
title: Date.Month
---

# Date.Month


## Description

Pateikiamas mėnesio komponentas.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Pateikiamas nurodytos <code>datetime</code> reikšmės mėnesio komponentas, <code>dateTime</code>.


## Examples

### Example #1 
Rasti mėnesį #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
