---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Palauttaa neljänneksen lopun.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>sisältävän vuosineljänneksen lopun. Aikavyöhyketiedot säilytetään. <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> tai <code>datetimezone</code> arvo, josta vuosineljänneksen loppu lasketaan.</li> </ul>


## Examples

### Example #1 
Selvitä vuosineljänneksen loppu kohteelle 10. lokakuuta 2011 klo 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
