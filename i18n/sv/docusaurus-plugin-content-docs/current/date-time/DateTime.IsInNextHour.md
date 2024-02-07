---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indikerar om denna datetime infaller under nästa timme enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indikerar om det angivna datetime-värde <code>dateTime</code> infaller under nästa timme enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false när den skickas ett värde som infaller den aktuella timmen.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Fastställer om timman efter den aktuella systemtiden motsvarar nästa timma.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
