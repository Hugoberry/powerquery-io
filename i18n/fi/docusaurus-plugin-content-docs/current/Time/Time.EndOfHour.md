---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Palauttaa tunnin lopun.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>edustaman tunnin lopun, murto-osa sekunnit mukaan lukien. Aikavyöhyketiedot säilytetään. <ul> <li><code>dateTime</code>: <code>time</code> <code>datetime</code> tai <code>datetimezone</code> arvo, josta tunnin loppu lasketaan.</li> </ul>


## Examples

### Example #1 
Hae tunnin loppu kohteelle 14.5.2011 17.00.00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Hae tunnin loppu kohteelle 17.5.2011 17.00.00 -7.00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
