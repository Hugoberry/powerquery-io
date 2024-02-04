---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Gibt an, ob dieser datetime-Wert während der aktuellen Sekunde auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Gibt an, ob der angegebene datetime-Wert <code>dateTime</code> während der aktuellen Sekunde auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Ermittelt, ob die aktuelle Systemzeit die aktuelle Sekunde ist.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
