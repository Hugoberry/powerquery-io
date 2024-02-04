---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum dem aktuellen Tag entspricht.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '<code>dateTime</code>' dem aktuellen Tag entspricht.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob die aktuelle Systemzeit im aktuellen Tag liegt.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
