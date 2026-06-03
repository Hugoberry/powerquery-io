---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Gibt an, ob dieser datetime-Wert während der aktuellen Minute auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Gibt an, ob der angegebene datetime-Wert `dateTime` während der aktuellen Minute auftritt, die vom aktuellen Datum und der aktuellen Uhrzeit des Systems festgelegt wird.

-   `dateTime`: Ein auszuwertender `datetime`\- oder `datetimezone`\-Wert.


## Examples

### Example #1
Ermittelt, ob die aktuelle Systemzeit die aktuelle Minute ist.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
