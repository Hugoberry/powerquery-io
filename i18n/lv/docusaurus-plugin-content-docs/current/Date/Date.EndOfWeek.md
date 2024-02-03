---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Atgriež nedēļas beigas.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Atgriež nedēļas beigas, kas satur <code>dateTime</code>. Šī funkcija izmanto neobligātu <code>Day</code> vērtību, <code>firstDayOfWeek</code>, ko iestatīt kā nedēļas pirmo dienu šim relatīvajam aprēķinam. Noklusējuma vērtība ir <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, no kuras tiek aprēķināta pēdējā nedēļas diena</li>        <li><code>firstDayOfWeek</code>: <i>[Neobligāti]</i> <code>Day.Type</code> vērtība, kas norāda pirmo nedēļas dienu. Iespējamās vērtības: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> un <code>Day.Saturday.</code>. Noklusējuma vērtība ir <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Iegūstiet nedēļas beigas vērtībai 14.05.2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Noskaidrojiet nedēļas beigas vērtībai 17.05.2011 plkst. 17:00:00 -7:00, ja nedēļas pirmā diena ir svētdiena.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
