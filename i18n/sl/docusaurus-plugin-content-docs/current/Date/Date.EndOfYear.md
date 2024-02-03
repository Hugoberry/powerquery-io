---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Vrne konec leta.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Vrne konec leta, ki vsebuje <code>dateTime</code> in vključuje z ulomki izražene sekunde. Informacije o časovnem pasu so ohranjene.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, na podlagi katere je izračunan konec leta.</li>      </ul>


## Examples

### Example #1 
Poiščite konec leta za 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Poiščite konec ure za 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
