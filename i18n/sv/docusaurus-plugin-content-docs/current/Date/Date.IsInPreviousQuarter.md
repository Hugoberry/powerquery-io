---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Anger om det här datumet infaller under det föregående kvartalet enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella kvartalet.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående kvartalet enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller under det aktuella kvartalet.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      </ul>


## Examples

### Example #1 
Kontrollera om kvartalet före den aktuella systemtiden infaller föregående kvartal.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
