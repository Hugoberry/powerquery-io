---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Vraća kraj sedmice.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Vraća kraj sedmice koji sadrži `dateTime`. Ova funkcija uzima opcionalnu vrednost `Day`, `firstDayOfWeek`, kako bi je postavila kao prvi dan u sedmici za ovo relativno izračunavanje. Podrazumevana vrednost je `Day.Sunday`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na osnovu koje se izračunava poslednji dan u sedmici
-   `firstDayOfWeek`: *(opcionalno)* Vrednost `Day.Type` predstavlja prvi dan u sedmici. Moguće vrednosti su `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` i `Day.Saturday.`. Podrazumevana vrednost je `Day.Sunday`.


## Examples

### Example #1
Izračunavanje kraja sedmice za 14.5.2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Izračunavanje kraja sedmice za 17.5.2011, 17:00:00 -7:00, pri čemu je nedelja prvi dan u sedmici.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
