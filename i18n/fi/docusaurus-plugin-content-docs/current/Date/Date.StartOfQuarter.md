---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Palauttaa vuosineljänneksen alun.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>sisältävän vuosineljänneksen alun. <code>dateTime</code> on oltava <code>date</code>, <code>datetime</code> tai <code>datetimezone</code> arvo.


## Examples

### Example #1 
Selvitä vuosineljänneksen alku kohteelle 10. lokakuuta 2011 klo 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
