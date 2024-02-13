---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Anger om det här datumet infaller under den aktuella veckan, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet <code>dateTime</code> infaller under den aktuella veckan, baserat på systemets aktuella datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om den aktuella systemtiden infaller under den aktuella veckan.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
