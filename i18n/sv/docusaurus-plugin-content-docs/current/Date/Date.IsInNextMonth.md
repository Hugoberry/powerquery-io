---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Anger om det här datumet infaller under nästa månad enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella månaden.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under nästa månad enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella månaden.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om månaden efter den aktuella systemtiden infaller nästa månad.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
