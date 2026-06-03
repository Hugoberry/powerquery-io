---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der nächsten Anzahl von Sekunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Sekunde auftritt.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der nächsten Anzahl von Sekunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Sekunde auftritt.

-   `dateTime`: Ein auszuwertender `datetime`\- oder `datetimezone`\-Wert.
-   `seconds`: Die Anzahl der Sekunden.


## Examples

### Example #1
Ermittelt, ob die Sekunde nach der aktuellen Systemzeit in den nächsten zwei Sekunden liegt.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
