---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indikerar om denna datetime infaller under det föregående antalet timmar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under de närmast föregående timmarna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller under den aktuella timmen.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `hours`: Antalet timmar.


## Examples

### Example #1
Fastställer om timman före den aktuella systemtiden motsvarar de närmast föregående timmarna.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
