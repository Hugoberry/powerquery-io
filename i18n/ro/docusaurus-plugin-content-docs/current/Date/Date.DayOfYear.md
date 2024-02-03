---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Returnează un număr de la 1 la 366, care reprezintă ziua din an.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Returnează un număr ce reprezintă ziua din an din valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> furnizată, <code>dateTime</code>.


## Examples

### Example #1 
Ziua din an pentru 1 martie 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
