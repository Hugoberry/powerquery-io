---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Atgriež skaitli no 1 līdz 366, kas norāda dienu gadā.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Atgriež skaitli, kas norāda gada dienu sniegtajā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtībā, <code>dateTime</code>.


## Examples

### Example #1 
Gada diena 2011. gada 1. martam.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
