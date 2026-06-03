---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indikerar om denna datetime inträffar under den aktuella sekunden, så som den anges av systemets aktuella datum och tid.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indikerar om det givna datetime-värdet `dateTime` inträffar under den aktuella sekunden så som den anges av systemets datum och tid.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om den aktuella systemtiden motsvarar den aktuella sekunden.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
