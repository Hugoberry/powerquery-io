---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während des nächsten Quartals auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Quartals auftritt.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während des nächsten Quartals auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Quartals auftritt.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.


## Examples

### Example #1
Bestimmt, ob das Quartal nach der aktuellen Systemzeit dem nächsten Quartal entspricht.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
