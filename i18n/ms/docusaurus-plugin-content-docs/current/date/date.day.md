---
title: Date.Day
---

# Date.Day


Mengembalikan hari komponen.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Mengembalikan komponen hari bagi nilai `date`, `datetime` atau `datetimezone`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` daripada yang mana komponen hari diekstrak.


## Examples

### Example #1
Dapatkan komponen hari bagi `date`, `datetime` atau `datetimezone` mewakili tarikh dan masa 5/14/2011 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
