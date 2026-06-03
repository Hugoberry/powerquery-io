---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob dieses Datum im aktuellen Jahr liegt.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Gibt auf Grundlage des aktuellen Systemdatums und der aktuellen Systemzeit an, ob der angegebene datetime-Wert '`dateTime`' im aktuellen Jahr liegt.

-   `dateTime`: Ein auszuwertender `date`\-, `datetime`\- oder `datetimezone`\-Wert.


## Examples

### Example #1
Bestimmt, ob die aktuelle Systemzeit im aktuellen Jahr liegt.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
