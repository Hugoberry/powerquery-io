---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Mengembalikan angka dari 1 hingga 6 yang menunjukkan pekan jatuhnya tanggal ini dalam bulan.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Mengembalikan angka dari 1 hingga 6 yang menunjukkan pekan jatuhnya tanggal `dateTime` dalam bulan.

-   `dateTime`: Nilai `datetime` yang digunakan untuk menentukan pekan dalam bulan.


## Examples

### Example #1
Tentukan minggu mana tanggal 15 Maret yang jatuh pada tahun 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
