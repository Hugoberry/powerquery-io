---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Anger om det här datumet infaller under det nästkommande antalet dagar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella dagen.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under nästkommande antal dagar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuell dag.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>days</code>: Antalet dagar.</li>      </ul>


## Examples

### Example #1 
Fastställer om dagen efter aktuell systemtid infaller under de kommande två dagarna.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
