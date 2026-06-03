---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der nächsten Stunde auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der nächsten Stunde auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.

-   `dateTime`: Ein `datetime`\- oder `datetimezone`\-Wert, der ausgewertet werden soll.


## Examples

### Example #1
Ermittelt, ob die Stunde nach der aktuellen Systemzeit in der nächsten Stunde liegt.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
