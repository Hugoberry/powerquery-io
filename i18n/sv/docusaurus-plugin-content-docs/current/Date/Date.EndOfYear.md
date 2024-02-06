---
title: Date.EndOfYear
---

# Date.EndOfYear


Returnerar slutet på året.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Returnerar årets slut som innehåller <code>dateTime</code>, inklusive fraktionella sekunder. Informationen om tidszonen bevaras.      <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som årets slut beräknas från.</li>      </ul>


## Examples

### Example #1 
Hämta årets slut för den 14 maj 2011 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Hämta timmens slut för den 17 maj 2011 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
