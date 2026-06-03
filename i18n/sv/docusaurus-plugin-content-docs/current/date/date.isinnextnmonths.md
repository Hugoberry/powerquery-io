---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Anger om det här datumet infaller under det nästkommande antalet månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella månaden.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa antal månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella månaden.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `months`: Antalet månader.


## Examples

### Example #1
Fastställer om månaden efter aktuell systemtid infaller under de kommande två månaderna.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
