---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Anger om det här datumet infaller under det nästkommande antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella veckan.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella veckan.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `weeks`: Antalet veckor.


## Examples

### Example #1
Fastställer om veckan efter aktuell systemtid infaller under de kommande två veckorna.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
