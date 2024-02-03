---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Palauttaa vuoden päivää edustavan luvun 1–366


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Palauttaa luvun, joka edustaa vuoden päivää annetussa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvossa <code>dateTime</code>.


## Examples

### Example #1 
Vuoden päivä 1. maaliskuulle 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
