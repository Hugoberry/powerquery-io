---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Returnerer slutningen af ugen.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Returnerer slutningen af den uge, der indeholder <code>dateTime</code>.      Denne funktion bruger en valgfri <code>Day</code>, <code>firstDayOfWeek</code>, til at angive som den første dag i ugen for denne relative beregning. Standardværdien er <code>Day.Sunday</code>.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som den sidste dag i ugen beregnes ud fra</li>      <li><code>firstDayOfWeek</code>:      <i>[Valgfri]</i> En <code>Day.Type</code> værdi, der repræsenterer den første dag i ugen. Mulige værdier er <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> og <code>Day.Saturday.</code> . Standardværdien er <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Hent ugens slutning for 14-05-2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Hent ugens slutning for 17-05-2011, 17:00:00-7:00, hvor søndag er den første dag i ugen.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
