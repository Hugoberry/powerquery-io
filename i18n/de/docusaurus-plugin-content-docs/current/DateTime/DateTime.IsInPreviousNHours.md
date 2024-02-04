---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieser datetime-Wert während der vorherigen Anzahl von Stunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während der vorherigen Anzahl von Stunden auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb der aktuellen Stunde auftritt.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      <li><code>hours</code>: Die Anzahl der Stunden.</li>      </ul>


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
