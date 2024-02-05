---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Anger om det här datumet infaller under det föregående antalet dagar, enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller den aktuella dagen.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående antalet dagar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella dagen.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>days</code>: Antalet dagar.</li>      </ul>


## Examples

### Example #1 
Fastställer om dagen före aktuell systemtid infaller under de föregående två dagarna.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
