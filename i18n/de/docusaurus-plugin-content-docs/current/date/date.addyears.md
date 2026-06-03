---
title: Date.AddYears
---

# Date.AddYears


Addiert die angegebenen Jahre zum Datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Gibt das `date`\-, `datetime`\- oder `datetimezone`\-Ergebnis der Addition von `numberOfYears` Jahr(en) zum `datetime`\-Wert "`dateTime`" zurück.

-   `dateTime`: Der `date`\-, `datetime`\- oder `datetimezone`\-Wert, zu dem Jahre addiert werden.
-   `numberOfYears`: Die Anzahl der zu addierenden Jahre.


## Examples

### Example #1
Addiert vier Jahre zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Addiert 10 Jahre zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011, 08:15:22 Uhr.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
