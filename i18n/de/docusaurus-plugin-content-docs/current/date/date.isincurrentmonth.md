---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Monat liegt.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '`dateTime`' im aktuellen Monat liegt.

-   `dateTime`: Ein auszuwertender `date`\-, `datetime`\- oder `datetimezone`\-Wert.


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
