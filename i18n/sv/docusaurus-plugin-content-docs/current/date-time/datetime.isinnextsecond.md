---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Indikerar om denna datetime infaller under nästa sekund enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde `dateTime` infaller under nästa sekund enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller inom den aktuella sekunden.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om sekunden efter den aktuella systemtiden infaller inom nästa sekund.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
