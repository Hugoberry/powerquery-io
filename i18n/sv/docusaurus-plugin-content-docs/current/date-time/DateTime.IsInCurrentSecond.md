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

Indikerar om det givna datetime-värdet <code>dateTime</code> inträffar under den aktuella sekunden så som den anges av systemets datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


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
