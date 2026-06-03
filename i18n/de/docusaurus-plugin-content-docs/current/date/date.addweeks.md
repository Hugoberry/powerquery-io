---
title: Date.AddWeeks
---

# Date.AddWeeks


Addiert die angegebenen Wochen zum Datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Gibt das `date`\-, `datetime`\- oder `datetimezone`\-Ergebnis zurück, das sich aus der Addition von `numberOfWeeks` Wochen zum `datetime`\-Wert '`dateTime`' ergibt.

-   `dateTime`: Der `date`\-, `datetime`\- oder `datetimezone`\-Wert, zu dem Wochen addiert werden.
-   `numberOfWeeks`: Die Anzahl der zu addierenden Wochen.


## Examples

### Example #1
Addiert zwei Wochen zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
