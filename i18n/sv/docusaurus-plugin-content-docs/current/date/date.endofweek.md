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

Returnerar slutet av veckan som innehåller `dateTime`. Funktionen använder ett valfritt `Day`, `firstDayOfWeek`, som anges som den första dagen i veckan för den här relativa beräkningen. Standardvärdet är `Day.Sunday`.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som veckans sista dag beräknas från
-   `firstDayOfWeek`: *\[Valfritt\]* Ett `Day.Type`\-värde som representerar den första dagen i veckan. Möjliga värden är `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` and `Day.Saturday`. Standardvärdet är `Day.Sunday`.


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
