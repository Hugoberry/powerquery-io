---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Anger om det här datumet infaller under det aktuella året och på eller före dagens datum, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet `dateTime` infaller under det aktuella året och på eller före dagens datum, baserat på systemets aktuella datum och tid.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om den aktuella systemtiden infaller på ett datum hittills i år.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
