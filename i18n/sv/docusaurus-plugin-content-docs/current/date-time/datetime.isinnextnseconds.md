---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indikerar om denna datetime infaller under nästa antalet sekunder enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella sekunden.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under de nästa sekunderna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under aktuell sekund.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>seconds</code>: Antalet sekunder.</li>      </ul>


## Examples

### Example #1 
Fastställer om sekunden efter den aktuella systemtiden infaller inom de närmast följande två sekunderna.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
