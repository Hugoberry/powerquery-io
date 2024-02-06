---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indikerar om denna datetime infaller under det föregående antalet sekunderna enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under de föregående antalet sekunder enligt systemets datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom den aktuella sekunden.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>seconds</code>: Antalet sekunder.</li>      </ul>


## Examples

### Example #1 
Fastställer om sekunden före den aktuella systemtiden motsvarar de närmast föregående två sekunderna.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
