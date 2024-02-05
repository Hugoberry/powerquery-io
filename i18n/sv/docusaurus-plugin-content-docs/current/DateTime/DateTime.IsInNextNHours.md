---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Indikerar om denna datetime infaller under nästa antalet timmar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under de närmast följande timmarna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuell timme.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>hours</code>: Antalet timmar.</li>      </ul>


## Examples

### Example #1 
Fastställer om timman efter den aktuella systemtiden motsvarar de närmast följande två timmarna.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
