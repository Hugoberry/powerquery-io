---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Jahr liegt und dem aktuellen Tag oder Vortag entspricht.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '<code>dateTime</code>' im aktuellen Jahr liegt und dem aktuellen Tag oder Vortag entspricht.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Bestimmt, ob die aktuelle Systemzeit im Jahr-bis-heute liegt.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
