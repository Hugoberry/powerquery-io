---
title: Date.Month
---

# Date.Month


## Description

Vráti komponent mesiaca.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Vráti komponent mesiaca uvedenej hodnoty <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Vyhľadajte mesiac v hodnote #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
