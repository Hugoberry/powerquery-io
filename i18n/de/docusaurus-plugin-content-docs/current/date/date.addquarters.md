---
title: Date.AddQuarters
---

# Date.AddQuarters


Addiert die angegebenen Quartale zum Datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Gibt das `date`\-, `datetime`\- oder `datetimezone`\-Ergebnis zurück, das sich aus der Addition von `numberOfQuarters` Quartalen zum `datetime`\-Wert '`dateTime`' ergibt.

-   `dateTime`: Der `date`\-, `datetime`\- oder `datetimezone`\-Wert, zu dem Quartale addiert werden.
-   `numberOfQuarters`: Die Anzahl der zu addierenden Quartale.


## Examples

### Example #1
Addiert ein Quartal zum `date`\-, `datetime`\- oder `datetimezone`\-Wert für den 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
