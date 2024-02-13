---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Returnerar slutet på veckan.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Returnerar slutet av veckan som innehåller <code>dateTime</code>.Funktionen använder ett valfritt <code>Day</code>, <code>firstDayOfWeek</code>, som anges som den första dagen i veckan för den här relativa beräkningen. Standardvärdet är <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som veckans sista dag beräknas från.</li>        <li><code>firstDayOfWeek</code>: <i>[Valfritt]</i> Ett <code>Day.Type</code>-värde som representerar den första dagen i veckan. Möjliga värden är <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> och <code>Day.Saturday.</code>. Standardvärdet är <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Hämta veckans slut för den 14 maj 2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Hämta veckans slut för den 17 maj 2011 17:00:00 -7:00, där söndag är den första dagen i veckan.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
