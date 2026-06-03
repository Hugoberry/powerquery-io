---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Anger om det här datumet infaller under den aktuella veckan, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller under den aktuella veckan, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller under den aktuella veckan.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
