---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während der vorherigen Anzahl von Tagen auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Tags auftritt.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während der vorherigen Anzahl von Tagen auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Tags auftritt.      <ul>      <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, der ausgewertet werden soll.</li>      <li><code>days</code>: Die Anzahl von Tagen.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob der Tag vor der aktuellen Systemzeit innerhalb der vergangenen zwei Tage liegt.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
