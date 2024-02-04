---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während der nächsten Anzahl von Monaten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Monats auftritt.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während der nächsten Anzahl von Monaten auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Monats auftritt.      <ul>      <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, der ausgewertet werden soll.</li>      <li><code>months</code>: Die Anzahl von Monaten.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob der Monat nach der aktuellen Systemzeit innerhalb der nächsten zwei Monate liegt.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
