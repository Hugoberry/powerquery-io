---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Anger om det här datumet infaller under föregående dag systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella dagen.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under föregående dag enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller den aktuella dagen.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om dagen före den aktuella systemtiden infaller föregående dag.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
