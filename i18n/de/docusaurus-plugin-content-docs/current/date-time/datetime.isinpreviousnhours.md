---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der vorherigen Anzahl von Stunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der vorherigen Anzahl von Stunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.

-   `dateTime`: Ein auszuwertender `datetime`\- oder `datetimezone`\-Wert.
-   `hours`: Die Anzahl der Stunden.


## Examples

### Example #1
Ermittelt, ob die Stunde vor der aktuellen Systemzeit in den vorherigen zwei Stunden liegt.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
