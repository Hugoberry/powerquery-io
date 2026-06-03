---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indikerar om denna datetime inträffar under den aktuella minuten, så som den anges av systemets aktuella datum och tid.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indikerar om det givna datetime-värdet `dateTime` inträffar under den aktuella minuten så som den anges av systemets datum och tid.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om den aktuella systemtiden motsvarar den aktuella minuten.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
