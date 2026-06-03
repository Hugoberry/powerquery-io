---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Anger om det här datumet infaller aktuell dag, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller aktuell dag, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller under den aktuella dagen.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
