---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Anger om det här datumet infaller under nästa vecka enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella veckan.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under nästa vecka enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar false om den skickas ett värde som infaller den aktuella veckan.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om veckan efter den aktuella systemtiden infaller nästa vecka.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
