---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Anger om det här datumet infaller under det nästkommande antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella kvartalet.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under nästa antal kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under aktuellt kvartal.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>quarters</code>: Antal kvartal.</li>      </ul>


## Examples

### Example #1 
Fastställer om kvartalet efter aktuell systemtid infaller under de kommande två kvartalen.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
