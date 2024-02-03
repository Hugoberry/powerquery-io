---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Anger om det här datumet infaller under det föregående antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuellt kvartal.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under det föregående antalet kvartal enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller inom det aktuella kvartalet.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>quarters</code>: Antal kvartal.</li>      </ul>


## Examples

### Example #1 
Fastställer om kvartalet före aktuell systemtid infaller under de föregående två kvartalen.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
