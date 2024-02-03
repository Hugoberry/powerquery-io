---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Palauttaa vuoden alun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>sisältävän vuoden alun. <code>dateTime</code> on oltava <code>date</code>, <code>datetime</code> tai <code>datetimezone</code> arvo.


## Examples

### Example #1 
Selvitä vuoden alku kohteelle 10. lokakuuta 2011 klo 8.10.32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
