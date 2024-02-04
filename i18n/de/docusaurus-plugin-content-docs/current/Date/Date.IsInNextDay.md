---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während des nächsten Tags auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Tags auftritt.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während des nächsten Tags auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Tags auftritt.      <ul>      <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, der ausgewertet werden soll.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob der Tag nach der aktuellen Systemzeit dem nächsten Tag entspricht.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
