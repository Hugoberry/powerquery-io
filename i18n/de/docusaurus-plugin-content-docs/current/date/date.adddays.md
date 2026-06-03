---
title: Date.AddDays
---

# Date.AddDays


Addiert die angegebenen Tage zum Datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Gibt das `date`\-, `datetime`\- oder `datetimezone`\-Ergebnis zurück, das sich aus der Addition von `numberOfDays` Tagen zum `datetime`\-Wert '`dateTime`' ergibt.

-   `dateTime`: Der `date`\-, `datetime`\- oder `datetimezone`\-Wert, zu dem Tage addiert werden.
-   `numberOfDays`: Die Anzahl der zu addierenden Tage.


## Examples

### Example #1
Addiert fünf Tage zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
