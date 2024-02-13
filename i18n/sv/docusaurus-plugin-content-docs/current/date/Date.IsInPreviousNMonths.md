---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Anger om det här datumet infaller under det föregående antalet månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella månaden.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående antalet månader enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom den aktuella månaden.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>months</code>: Antalet månader.</li>      </ul>


## Examples

### Example #1 
Fastställer om månaden före aktuell systemtid infaller under de föregående två månaderna.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
