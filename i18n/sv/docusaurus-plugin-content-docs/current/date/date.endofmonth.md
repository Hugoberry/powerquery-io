---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Returnerar slutet på månaden.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Returnerar  slutet av månaden som innehåller <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som månadens slut beräknas från.</li>      </ul>


## Examples

### Example #1 
Hämta månadens slut för den 14 maj 2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Hämta månadens slut för den 17 maj 2011 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
