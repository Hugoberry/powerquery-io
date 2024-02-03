---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Vrne konec ure.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Vrne konec ure, ki je prikazan kot <code>dateTime</code> in vključuje z ulomki izražene sekunde. Informacije o časovnem pasu so ohranjene.      <ul>        <li><code>dateTime</code>: vrednost <code>time</code>, <code>datetime</code> ali <code>datetimezone</code>, na podlagi katere je izračunan konec ure.</li>      </ul>


## Examples

### Example #1 
Poiščite konec ure za 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Poiščite konec ure za 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
