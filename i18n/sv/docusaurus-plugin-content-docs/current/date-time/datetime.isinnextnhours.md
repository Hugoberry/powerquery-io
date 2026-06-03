---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indikerar om denna datetime infaller under nästa antalet timmar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under de närmast följande timmarna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuell timme.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `hours`: Antalet timmar.


## Examples

### Example #1
Fastställer om timman efter den aktuella systemtiden motsvarar de närmast följande två timmarna.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
