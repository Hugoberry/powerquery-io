---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Anger om det här datumet infaller under det nästkommande antalet år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under följande antal år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom det aktuella året.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>years</code>: Antalet år.</li>      </ul>


## Examples

### Example #1 
Fastställer om året efter aktuell systemtid infaller under de kommande två åren.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
