---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Vráti číslo od 1 do 366 predstavujúce deň v roku.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Vráti číslo medzi predstavujúce deň v roku v rámci uvedenej hodnoty <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> <code>dateTime</code>.


## Examples

### Example #1 
Deň v roku pre 1. marec 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
