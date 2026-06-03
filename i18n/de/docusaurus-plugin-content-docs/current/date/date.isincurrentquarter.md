---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Quartal liegt.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '`dateTime`' im aktuellen Quartal liegt.

-   `dateTime`: Ein auszuwertender `date`\-, `datetime`\- oder `datetimezone`\-Wert.


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
