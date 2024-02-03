---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Vráti začiatok štvrťroka.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Vráti začiatok štvrťroka, ktorý obsahuje hodnotu <code>dateTime</code>.    <code>dateTime</code> musí byť hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Nájdite začiatok štvrťroka pre dátum 10. október 2011 a čas 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
