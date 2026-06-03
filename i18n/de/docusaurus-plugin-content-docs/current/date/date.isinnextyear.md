---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während des nächsten Jahrs auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während des nächsten Jahrs auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.

-   `dateTime`: Ein `date`\-, `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.


## Examples

### Example #1
Bestimmt, ob das Jahr nach der aktuellen Systemzeit dem nächsten Jahr entspricht.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
