---
title: Date.Day
---

# Date.Day


Gibt die Tageskomponente zurück.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Gibt die Tageskomponente eines `date`\-, `datetime`\- oder `datetimezone`\-Werts zurück.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, aus dem die Tageskomponente extrahiert wird.


## Examples

### Example #1
Ruft die Tageskomponente eines `date`\-, `datetime`\- oder `datetimezone`\-Werts für den 14.05.2011, 17:00:00 Uhr ab.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
