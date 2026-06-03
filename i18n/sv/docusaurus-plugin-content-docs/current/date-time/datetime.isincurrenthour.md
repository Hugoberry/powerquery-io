---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indikerar om denna datetime inträffar under den aktuella timman, så som den anges av systemets aktuella datum och tid.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indikerar om det givna datetime-värdet `dateTime` inträffar under den aktuella timman så som den anges av systemets datum och tid.

-   `dateTime`: Ett `datetime`\- eller `datetimezone`\-värde som ska utvärderas.


## Examples

### Example #1
Fastställer om den aktuella systemtiden motsvarar den aktuella timman.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
