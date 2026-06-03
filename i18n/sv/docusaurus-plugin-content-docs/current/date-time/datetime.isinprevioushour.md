---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indikerar om denna datetime infaller under den föregående timmen enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under föregående timme enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller under den aktuella timmen.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om timman före den aktuella systemtiden motsvarar föregående timma.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
