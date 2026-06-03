---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Gibt eine Zahl zwischen 28 und 31 zurück, um die Anzahl von Tagen des Monats anzugeben.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Gibt die Anzahl von Tagen im Monat für den `date`\-, `datetime`\- oder `datetimezone`\-Wert "`dateTime`" zurück.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, für den die Anzahl von Tagen im Monat zurückgegeben wird.


## Examples

### Example #1
Die Anzahl von Tagen im Monat Dezember (dargestellt als `#date(2011, 12, 01)>`).
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
