---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Anger om det här datumet infaller under det aktuella kvartalet, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Anger om det angivna datetime-värdet <code>dateTime</code> infaller under det aktuella kvartalet, baserat på systemets aktuella datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om den aktuella systemtiden infaller under det aktuella kvartalet.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
