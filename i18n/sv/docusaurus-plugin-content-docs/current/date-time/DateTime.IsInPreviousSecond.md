---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indikerar om denna datetime infaller under den föregående sekunden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under den föregående sekunden enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Fastställer om sekunden före den aktuella systemtiden motsvarar föregående sekund.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
