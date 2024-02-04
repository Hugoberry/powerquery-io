---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Quartal liegt.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '<code>dateTime</code>' im aktuellen Quartal liegt.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob die aktuelle Systemzeit im aktuellen Quartal liegt.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
