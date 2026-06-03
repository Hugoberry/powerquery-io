---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Anger om det här datumet infaller under den aktuella månaden, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller under den aktuella månaden, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller under den aktuella månaden.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
