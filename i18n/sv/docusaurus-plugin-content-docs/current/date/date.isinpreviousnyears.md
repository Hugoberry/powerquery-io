---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Anger om det här datumet infaller under det föregående antalet år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella året.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående antalet år enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom det aktuella året.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>years</code>: Antalet år.</li>      </ul>


## Examples

### Example #1 
Fastställer om året före aktuell systemtid infaller under de föregående två åren.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
