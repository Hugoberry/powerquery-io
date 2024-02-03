---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Menghasilkan angka dari 1 hingga 54 yang menunjukkan pekan jatuhnya tanggal ini dalam tahun.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Menghasilkan angka dari 1 hingga 54 yang menunjukkan pekan jatuhnya tanggal <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Nilai <code>tanggalwaktu</code> untuk pekan mana yang ditentukan pada tahun tersebut.</li>        <li><code>firstDayOfWeek</code>: Nilai <code>Day.Type</code> opsional yang menunjukkan hari sebagai awal dari minggu baru (misalnya, <code>Day.Sunday</code>). Jika tidak ditetapkan, default yang bergantung pada kultur akan digunakan.</li>      </ul>


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
