---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indikerar om denna datetime infaller under den föregående sekunden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under den föregående sekunden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om sekunden före den aktuella systemtiden motsvarar föregående sekund.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
