---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Anger om det här datumet infaller aktuell dag, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet <code>dateTime</code> infaller aktuell dag, baserat på systemets aktuella datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om den aktuella systemtiden infaller under den aktuella dagen.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
