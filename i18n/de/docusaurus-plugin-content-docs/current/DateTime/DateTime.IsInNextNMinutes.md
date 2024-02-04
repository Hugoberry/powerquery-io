---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der nächsten Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während der nächsten Anzahl von Minuten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Minute auftritt.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      <li><code>minutes</code>: Die Anzahl der Minuten.</li>      </ul>


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