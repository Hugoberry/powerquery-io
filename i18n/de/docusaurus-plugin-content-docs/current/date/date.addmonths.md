---
title: Date.AddMonths
---

# Date.AddMonths


Addiert die angegebenen Monate zum Datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Gibt das `date`\-, `datetime`\- oder `datetimezone`\-Ergebnis der Addition von `numberOfMonths` Monaten zum `datetime`\-Wert "`dateTime`" zurück.

-   `dateTime`: Der `date`\-, `datetime`\- oder `datetimezone`\-Wert, zu dem Monate addiert werden.
-   `numberOfMonths`: Die Anzahl der zu addierenden Monate.


## Examples

### Example #1
Addiert fünf Monate zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Addiert 18 Monate zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011, 08:15:22 Uhr.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
