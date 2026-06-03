---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Anger om det här datumet infaller under nästa dag enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella dagen.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indikerar om det angivna datetime-värde `dateTime` infaller under nästa dag enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som inträffar under den aktuella dagen.

-   `dateTime`: Ett `date`\-, `datetime`\-, eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Kontrollera om dagen efter den aktuella systemtiden infaller nästa dag.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
