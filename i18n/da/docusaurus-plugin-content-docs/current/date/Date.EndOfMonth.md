---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Returnerer slutningen af måneden.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Returnerer slutningen af den måned, der indeholder <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som slutningen af måneden beregnes ud fra</li>      </ul>


## Examples

### Example #1 
Hent månedens slutning for 14-05-2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Hent månedens slutning for 17-05-2011, 17:00:00-7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
