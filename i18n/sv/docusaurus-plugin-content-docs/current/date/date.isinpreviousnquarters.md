---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Anger om det här datumet infaller under det föregående antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuellt kvartal.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under det föregående antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom det aktuella kvartalet.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `quarters`: Antal kvartal.


## Examples

### Example #1
Fastställer om kvartalet före aktuell systemtid infaller under de föregående två kvartalen.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
