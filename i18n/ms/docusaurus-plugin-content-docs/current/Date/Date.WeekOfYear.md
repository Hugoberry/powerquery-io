---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Mengembalikan nombor daripada 1 hingga 54 yang menunjukkan tarikh ini jatuh pada minggu yang mana dalam tahun.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Mengembalikan nombor dari 1 hingga 54 yang menunjukkan kedudukan minggu dalam setahun bagi tarikh, <code>dateTime</code>. <ul>        <li><code>dateTime</code>:Nilai <code>tarikhmasa</code> bagi minggu dalam setahun yang ditentukan.</li>        <li><code>firstDayOfWeek</code>: Nilai <code>Day.Type</code> pilihan yang menentukan hari yang dianggap sebagai bermulanya minggu baru (contohnya, <code>Day.Sunday</code>). Jika tidak ditentukan, nilai lalai bergantung pada budaya digunakan.</li>      </ul>


## Examples

### Example #1 
Tentukan minggu dalam tahun yang mengandungi 27 Mac 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Tentukan minggu dalam tahun yang mengandungi 27 Mac 2011, menggunakan Isnin sebagai permulaan minggu.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
