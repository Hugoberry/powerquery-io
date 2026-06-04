---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Menghasilkan angka (dari 0 hingga 6) yang menunjukkan hari dalam sepekan yang ditempati oleh nilai yang diberikan.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Menghasilkan angka (dari 0 hingga 6) yang menunjukkan hari dalam sepekan yang ditempati oleh `dateTime` yang diberikan.

-   `dateTime`: Nilai `date`, `datetime`, atau `datetimezone`.
-   `firstDayOfWeek`: Nilai `Day` menunjukkan hari yang harus dianggap sebagai hari pertama dalam sepekan. Nilai yang diperbolehkan adalah Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, atau Day.Saturday. Jika tidak ditetapkan, default yang bergantung pada budaya akan digunakan.


## Examples

### Example #1
Mengambil hari dalam sepekan yang diwakili oleh Senin, 21 Februari 2011, menggunakan hari Minggu sebagai hari pertama dalam sepekan.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Mengambil hari dalam sepekan yang diwakili oleh Senin, 21 Februari 2011, menggunakan hari Senin sebagai hari pertama dalam sepekan.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
