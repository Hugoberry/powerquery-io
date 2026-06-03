---
title: Date.EndOfDay
---

# Date.EndOfDay


Gibt das Ende des Tages zurück.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Gibt das Ende des Tages, das durch `dateTime` dargestellt wird, zurück. Zeitzoneninformationen werden beibehalten.

-   `dateTime`: A `date`\-, `datetime`\- oder `datetimezone`\-Wert, auf dessen Grundlage das Tagesende berechnet wird.


## Examples

### Example #1
Ruft das Ende des Tags für den 14.05.2011, 17:00:00 Uhr ab.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Ruft das Ende des Tags für den 17.05.2011, 17:00:00 Uhr (-7:00) ab.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
