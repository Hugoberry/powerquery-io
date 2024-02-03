---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Vráti číslo udávajúce štvrťrok v roku, do ktorého spadá príslušný dátum.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Vráti číslo od 1 do 4 udávajúce štvrťrok v roku, do ktorého spadá dátum <code>dateTime</code>. <code>dateTime</code> môže byť hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Nájdite štvrťrok v roku, do ktorého spadá dátum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
