---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Mengembalikan nombor (dari 0 hingga 6) yang menunjukkan hari dalam minggu diduduki oleh nilai yang disediakan.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Mengembalikan nombor (dari 0 hingga 6) yang menunjukkan hari dalam minggu diduduki oleh <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>datetime</code>, atau <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: Nilai <code>hari</code> yang menunjukkan hari yang harus dipertimbangkan sebagai hari pertama dalam minggu. Nilai yang dibenarkan ialah Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday atau Day.Saturday. Jika tidak ditentukan, nilai lalai bergantung kepada budaya digunakan.</li>      </ul>


## Examples

### Example #1 
Dapatkan hari dalam minggu yang diwakili oleh Isnin, 21hb Februari 2011, dengan menganggap Ahad sebagai hari pertama dalam minggu.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Dapatkan hari dalam minggu yang diwakili oleh Isnin, 21hb Februari 2011, dengan menganggap Isnin sebagai hari pertama dalam minggu.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
