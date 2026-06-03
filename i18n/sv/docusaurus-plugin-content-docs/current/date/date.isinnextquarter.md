---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Anger om det här datumet infaller under nästa kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella kvartalet.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller under aktuellt kvartal.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om kvartalet efter den aktuella systemtiden infaller nästa kvartal.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
