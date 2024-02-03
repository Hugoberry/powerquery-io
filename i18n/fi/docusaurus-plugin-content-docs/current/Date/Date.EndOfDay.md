---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Palauttaa päivän lopun.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>edustaman päivän lopun. Aikavyöhyketiedot säilytetään. <ul> <li><code>dateTime</code>: <code>päivämäärä</code> <code>datetime</code> tai <code>datetimezone</code> arvo, josta päivän loppu lasketaan.</li> </ul>


## Examples

### Example #1 
Hae päivän loppu kohteelle 14.5.2011 17.00.00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Hae päivän loppu kohteelle 17.5.2011 17.00.00 -7.00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
