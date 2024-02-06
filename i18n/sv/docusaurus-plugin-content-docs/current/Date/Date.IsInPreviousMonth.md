---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Anger om det här datumet infaller under den föregående månaden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella månaden.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under den föregående månaden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella månaden.      <ul>      <li><code>dateTime</code>: Ett <code>datum</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om månaden före den aktuella systemtiden infaller föregående månad.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
