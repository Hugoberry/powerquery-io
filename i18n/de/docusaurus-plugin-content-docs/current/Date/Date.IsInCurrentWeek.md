---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum in der aktuellen Woche liegt.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '<code>dateTime</code>' in der aktuellen Woche liegt.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob die aktuelle Systemzeit in der aktuellen Woche liegt.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
