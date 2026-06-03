---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Indikerar om denna datetime infaller under det föregående antalet minuter enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella minuten.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under de föregående minuterna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella minuten.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `minutes`: Antalet minuter.


## Examples

### Example #1
Fastställer om minuten före den aktuella systemtiden motsvarar de närmast föregående två minuterna.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
