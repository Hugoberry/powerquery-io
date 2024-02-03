---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Palauttaa vuoden lopun.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Palauttaa vuoden lopun, joka sisältää <code>dateTime</code>, mukaan lukien murtoluvun sekunnit. Aikavyöhyketiedot säilytetään. <ul> <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> tai <code>datetimezone</code> arvo, josta vuoden loppu lasketaan.</li> </ul>


## Examples

### Example #1 
Hae vuoden loppu kohteelle 14.5.2011 17.00.00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Hae tunnin loppu kohteelle 17.5.2011 17.00.00 -7.00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
