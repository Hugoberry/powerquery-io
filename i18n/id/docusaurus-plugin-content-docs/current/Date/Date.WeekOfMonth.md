---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Mengembalikan angka dari 1 hingga 6 yang menunjukkan pekan jatuhnya tanggal ini dalam bulan.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Mengembalikan angka dari 1 hingga 6 yang menunjukkan pekan jatuhnya tanggal <code>dateTime</code> dalam bulan. <ul>        <li><code>dateTime</code>: Nilai <code>datetime</code> yang digunakan untuk menentukan pekan dalam bulan.</li>      </ul>


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
