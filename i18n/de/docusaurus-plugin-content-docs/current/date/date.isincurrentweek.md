---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum in der aktuellen Woche liegt.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '`dateTime`' in der aktuellen Woche liegt.

-   `dateTime`: Ein auszuwertender `date`\-, `datetime`\- oder `datetimezone`\-Wert.


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
