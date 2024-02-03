---
title: Date.Month
---

# Date.Month


## Description

Vrátí komponentu měsíce.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Vrátí komponentu měsíce předané hodnoty <code>datetime</code> <code>dateTime</code>.


## Examples

### Example #1 
Vyhledá měsíc v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
