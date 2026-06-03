---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der vorherigen Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert `dateTime` während der vorherigen Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.

-   `dateTime`: Ein auszuwertender `datetime`\- oder `datetimezone`\-Wert.
-   `minutes`: Die Anzahl der Minuten.


## Examples

### Example #1
Ermittelt, ob die Minute vor der aktuellen Systemzeit in den vorherigen zwei Minuten liegt.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
