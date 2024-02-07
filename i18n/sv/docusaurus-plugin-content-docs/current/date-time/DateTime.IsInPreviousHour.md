---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indikerar om denna datetime infaller under den föregående timmen enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under föregående timme enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller under den aktuella timmen.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Fastställer om timman före den aktuella systemtiden motsvarar föregående timma.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
