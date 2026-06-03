---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Anger om det här datumet infaller under föregående år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under föregående år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om året före den aktuella systemtiden infaller föregående år.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
