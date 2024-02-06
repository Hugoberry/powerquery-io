---
title: Date.EndOfDay
---

# Date.EndOfDay


Returnerar slutet på dagen.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Returnerar slutet av dagen som representeras av <code>dateTime</code>. Tidszonsinformation bevaras.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som dagens slut beräknas från.</li>      </ul>


## Examples

### Example #1 
Hämta dagens slut för den 14 maj 2011 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Hämta dagens slut för den 17 maj 2011 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
