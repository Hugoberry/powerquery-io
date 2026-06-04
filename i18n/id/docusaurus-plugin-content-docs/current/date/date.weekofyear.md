---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Menghasilkan angka dari 1 hingga 54 yang menunjukkan pekan jatuhnya tanggal ini dalam tahun.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Menghasilkan angka dari 1 hingga 54 yang menunjukkan pekan jatuhnya tanggal `dateTime`.

-   `dateTime`: Nilai `tanggalwaktu` untuk pekan mana yang ditentukan pada tahun tersebut.
-   `firstDayOfWeek`: Nilai `Day.Type` opsional yang menunjukkan hari sebagai awal dari minggu baru (misalnya, `Day.Sunday`). Jika tidak ditetapkan, default yang bergantung pada kultur akan digunakan.


## Examples

### Example #1
Tentukan minggu mana dalam setahun yang berisi 27 Maret 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Tentukan minggu mana dalam setahun yang berisi 27 Maret 2011, menggunakan hari Senin sebagai awal minggu.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
