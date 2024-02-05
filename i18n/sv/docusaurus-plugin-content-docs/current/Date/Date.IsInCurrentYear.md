---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Anger om det här datumet infaller under det aktuella året, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Anger om det angivna datetime-värdet <code>dateTime</code> infaller under det aktuella året, baserat på systemets aktuella datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om den aktuella systemtiden infaller under det aktuella året.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
