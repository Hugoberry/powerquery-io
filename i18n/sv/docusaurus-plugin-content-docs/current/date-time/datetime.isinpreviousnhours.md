---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indikerar om denna datetime infaller under det föregående antalet timmar enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella timmen.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under de närmast föregående timmarna enligt systemets datum och tid. Observera att den här funktionen returnerar falskt när den skickas ett värde som infaller under den aktuella timmen.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>hours</code>: Antalet timmar.</li>      </ul>


## Examples

### Example #1 
Fastställer om timman före den aktuella systemtiden motsvarar de närmast föregående timmarna.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
