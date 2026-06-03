---
title: Date.StartOfDay
---

# Date.StartOfDay


Gibt den Beginn des Tages zurück.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Gibt den Beginn des Tags, der durch `dateTime` dargestellt wird, zurück. `dateTime` muss ein `date`\-, `datetime`\- oder `datetimezone`\-Wert sein.


## Examples

### Example #1
Suchen Sie dem Beginn des Tages für den 10. Oktober 2011, 8:00 Uhr.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
