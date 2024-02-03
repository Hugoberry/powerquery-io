---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Vraća kraj sedmice.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vraća kraj sedmice koji sadrži <code>dateTime</code>.    Ova funkcija uzima opcionalnu vrednost <code>Day</code>, <code>firstDayOfWeek</code>, kako bi je postavila kao prvi dan u sedmici za ovo relativno izračunavanje. Podrazumevana vrednost je <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava poslednji dan u sedmici</li>        <li><code>firstDayOfWeek</code>: <i>[Opciono]</i> Vrednost <code>Day.Type</code> predstavlja prvi dan u sedmici. Moguće vrednosti su <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> i <code>Day.Saturday.</code>. Podrazumevana vrednost je <code>Day.Sunday</code>.</li>      </ul>


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
