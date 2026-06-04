---
title: Date.AddWeeks
---

# Date.AddWeeks


Menambahkan pekan yang ditetapkan ke tanggal.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Memberikan hasil `date`, `datetime`, atau `datetimezone` dari menambahkan `numberOfWeeks` pekan ke nilai `datetime` `dateTime`.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone` yang menambahkan pekan.
-   `numberOfWeeks`: Jumlah pekan yang akan ditambahkan.


## Examples

### Example #1
Menambahkan 2 pekan ke nilai `date`, `datetime`, atau `datetimezone` yang menunjukkan tanggal 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
