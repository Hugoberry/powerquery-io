---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der vorherigen Stunde auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der vorherigen Stunde auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.

-   `dateTime`: Ein `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.


## Examples

### Example #1
Ermittelt, ob die Stunde vor der aktuellen Systemzeit in der vorherigen Stunde liegt.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
