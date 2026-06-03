---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indikerar om denna datetime infaller under nästa antal minuter enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella minuten.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under de närmaste minuterna, enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuell minut.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.
-   `minutes`: Antalet minuter.


## Examples

### Example #1
Fastställer om minuten efter den aktuella systemtiden infaller inom de närmaste två minuterna.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
