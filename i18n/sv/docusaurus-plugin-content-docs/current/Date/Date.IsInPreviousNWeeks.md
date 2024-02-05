---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Anger om det här datumet infaller under det föregående antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella veckan.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående antalet veckor enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom den aktuella veckan.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>weeks</code>: Antalet veckor.</li>      </ul>


## Examples

### Example #1 
Fastställer om veckan före aktuell systemtid infaller under de föregående två veckorna.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
