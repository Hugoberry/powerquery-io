---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der nächsten Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "`dateTime`" während der nächsten Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.

-   `dateTime`: Ein auszuwertender `datetime`\- oder `datetimezone`\-Wert.
-   `minutes`: Die Anzahl der Minuten.


## Examples

### Example #1
Ermittelt, ob die Minute nach der aktuellen Systemzeit in den nächsten zwei Minuten liegt.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
