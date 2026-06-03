---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während der vorherigen Anzahl von Quartalen auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Quartals auftritt.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der vorherigen Anzahl von Quartalen auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Quartals auftritt.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.
-   `quarters`: Die Anzahl von Quartalen.


## Examples

### Example #1
Bestimmt, ob das Quartal vor der aktuellen Systemzeit innerhalb der vergangenen zwei Quartale liegt.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
