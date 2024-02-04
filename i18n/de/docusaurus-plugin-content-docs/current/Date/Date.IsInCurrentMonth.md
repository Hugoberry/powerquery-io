---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Monat liegt.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '<code>dateTime</code>' im aktuellen Monat liegt.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob die aktuelle Systemzeit im aktuellen Monat liegt.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
