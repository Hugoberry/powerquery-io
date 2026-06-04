---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Mengembalikan penghujung minggu.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Mengembalikan penghujung minggu yang mengandungi `dateTime`. Fungsi ini mengambil `Day` pilihan, `firstDayOfWeek`, untuk ditetapkan sebagai hari pertama dalam minggu bagi pengiraan relatif ini. Nilai lalai ialah `Day.Sunday`.

-   `dateTime`: `date`, `datetime` atau `datetimezone` daripada mana hari terakhir dalam minggu dikira
-   `firstDayOfWeek`: *(Pilihan)* `Day.Type` mewakili hari pertama dalam minggu. Nilai yang mungkin ialah `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` dan `Day.Saturday.`. Nilai lalai ialah `Day.Sunday`.


## Examples

### Example #1
Dapatkan penghujung minggu untuk 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Dapatkan hujung minggu untuk 5/17/2011 05:00:00 PM -7:00, dengan Ahad sebagai hari pertama dalam minggu.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
