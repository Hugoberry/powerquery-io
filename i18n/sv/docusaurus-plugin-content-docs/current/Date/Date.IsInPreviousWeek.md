---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Anger om det här datumet infaller under föregående vecka enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under den aktuella veckan.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under föregående vecka enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella veckan.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om veckan före den aktuella systemtiden infaller föregående vecka.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
