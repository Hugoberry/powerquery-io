---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Anger om det här datumet infaller under det föregående antalet dagar, enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella dagen.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under det föregående antalet dagar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella dagen.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `days`: Antalet dagar.


## Examples

### Example #1
Fastställer om dagen före aktuell systemtid infaller under de föregående två dagarna.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
