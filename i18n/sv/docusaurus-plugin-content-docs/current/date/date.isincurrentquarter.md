---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Anger om det här datumet infaller under det aktuella kvartalet, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller under det aktuella kvartalet, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller under det aktuella kvartalet.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
