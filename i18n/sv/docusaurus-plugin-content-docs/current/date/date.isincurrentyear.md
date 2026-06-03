---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Anger om det här datumet infaller under det aktuella året, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller under det aktuella året, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller under det aktuella året.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
