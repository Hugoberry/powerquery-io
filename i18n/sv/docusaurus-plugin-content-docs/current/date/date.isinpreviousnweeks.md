---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Anger om det här datumet infaller under det föregående antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella veckan.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under det föregående antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom den aktuella veckan.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `weeks`: Antalet veckor.


## Examples

### Example #1
Fastställer om veckan före aktuell systemtid infaller under de föregående två veckorna.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
