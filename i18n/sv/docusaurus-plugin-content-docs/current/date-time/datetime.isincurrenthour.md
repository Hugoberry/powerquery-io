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

Indikerar om det givna datetime-värdet <code>dateTime</code> inträffar under den aktuella timman så som den anges av systemets datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


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
