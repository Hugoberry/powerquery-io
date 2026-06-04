---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Mengembalikan nombor daripada 28 hingga 31 yang menunjukkan bilangan hari dalam bulan.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Mengembalikan bilangan hari dalam bulan dalam nilai `date`, `datetime` atau `datetimezone` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk yang mana bilangan hari dalam bulan dikembalikan.


## Examples

### Example #1
Bilangan hari dalam bulan Disember seperti yang diwakili oleh `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
