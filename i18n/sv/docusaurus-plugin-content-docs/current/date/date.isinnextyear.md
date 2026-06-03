---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Anger om det här datumet infaller under nästa år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom det aktuella.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om året efter den aktuella systemtiden infaller nästa år.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
