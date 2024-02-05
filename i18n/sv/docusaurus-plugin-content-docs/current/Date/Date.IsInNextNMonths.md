---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Anger om det här datumet infaller under det nästkommande antalet månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella månaden.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under nästa antal månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella månaden.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>months</code>: Antalet månader.</li>      </ul>


## Examples

### Example #1 
Fastställer om månaden efter aktuell systemtid infaller under de kommande två månaderna.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
