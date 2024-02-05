---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Indikerar om denna datetime infaller under nästa antal minuter enligt systemets aktuella datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom den aktuella minuten.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indikerar om angivet datetime-värde <code>dateTime</code> infaller under de närmaste minuterna, enligt systemets datum och tid. Observera att den här funktionen returnerar falskt om den skickas ett värde som infaller inom aktuell minut.      <ul>      <li><code>dateTime</code>: Ett <code>datetime</code>- eller <code>datetimezone</code>-värde som ska utvärderas.</li>      <li><code>minutes</code>: Antalet minuter.</li>      </ul>


## Examples

### Example #1 
Fastställer om minuten efter den aktuella systemtiden infaller inom de närmaste två minuterna.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
