---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Anger om det här datumet infaller under det aktuella året och på eller före dagens datum, baserat på systemets aktuella datum och tid.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Anger om det angivna datetime-värdet <code>dateTime</code> infaller under det aktuella året och på eller före dagens datum, baserat på systemets aktuella datum och tid.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om den aktuella systemtiden infaller på ett datum hittills i år.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
