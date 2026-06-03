---
title: Date.StartOfYear
---

# Date.StartOfYear


Gibt den Beginn des Jahres zurück.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Gibt den Beginn des Jahres, der `dateTime` enthält, zurück. `dateTime` muss ein `date`\-, `datetime`\- oder `datetimezone`\-Wert sein.


## Examples

### Example #1
Suchen Sie den Beginn des Jahres für den 10. Oktober 2011, 8:10:32 Uhr.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
