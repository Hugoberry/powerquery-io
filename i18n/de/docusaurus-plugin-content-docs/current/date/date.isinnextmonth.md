---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während des nächsten Monats auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Monats auftritt.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während des nächsten Monats auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Monats auftritt.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.


## Examples

### Example #1
Bestimmt, ob der Monat nach der aktuellen Systemzeit dem nächsten Monat entspricht.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
