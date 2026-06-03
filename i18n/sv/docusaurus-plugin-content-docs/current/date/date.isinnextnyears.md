---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Anger om det här datumet infaller under det nästkommande antalet år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under följande antal år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom det aktuella året.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `years`: Antalet år.


## Examples

### Example #1
Fastställer om året efter aktuell systemtid infaller under de kommande två åren.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
