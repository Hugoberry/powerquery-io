---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Gibt an, ob dieser datetime-Wert während der aktuellen Stunde auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Gibt an, ob der angegebene datetime-Wert <code>dateTime</code> während der aktuellen Stunde auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.      <ul>      <li><code>dateTime</code>: Ein auszuwertender <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>      </ul>


## Examples

### Example #1 
Ermittelt, ob die aktuelle Systemzeit die aktuelle Stunde ist.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
