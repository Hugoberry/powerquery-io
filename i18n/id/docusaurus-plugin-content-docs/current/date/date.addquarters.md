---
title: Date.AddQuarters
---

# Date.AddQuarters


Menambahkan kuartal yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Memberikan hasil `date`, `datetime`, atau `datetimezone` dari menambahkan `numberOfQuarters` kuartal ke nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menambahkan kuartal.
-   `numberOfQuarters`: Jumlah kuartal yang akan ditambahkan.


## Examples

### Example #1
Menambahkan 1 kuartal ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
