---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Anger om det här datumet infaller under det nästkommande antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella kvartalet.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa antal kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under aktuellt kvartal.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `quarters`: Antal kvartal.


## Examples

### Example #1
Fastställer om kvartalet efter aktuell systemtid infaller under de kommande två kvartalen.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
