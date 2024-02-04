---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum während des nächsten Jahrs auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert "<code>dateTime</code>" während des nächsten Jahrs auftritt. Beachten Sie, dass diese Funktion FALSE zurückgibt, wenn der übergebene Wert innerhalb des aktuellen Jahrs auftritt.      <ul>      <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, der ausgewertet werden soll.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob das Jahr nach der aktuellen Systemzeit dem nächsten Jahr entspricht.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
