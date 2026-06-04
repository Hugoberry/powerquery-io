---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Atgriež nedēļas beigas.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Atgriež nedēļas beigas, kas satur `dateTime`. Šī funkcija izmanto neobligātu `Day` vērtību, `firstDayOfWeek`, ko iestatīt kā nedēļas pirmo dienu šim relatīvajam aprēķinam. Noklusējuma vērtība ir `Day.Sunday`.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, no kuras tiek aprēķināta pēdējā nedēļas diena
-   `firstDayOfWeek`: *(Neobligāti)* `Day.Type` vērtība, kas norāda pirmo nedēļas dienu. Iespējamās vērtības ir `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` un `Day.Saturday`. Noklusējuma vērtība ir `Day.Sunday`.


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
