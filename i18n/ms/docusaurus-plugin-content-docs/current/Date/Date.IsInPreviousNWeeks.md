---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Menunjukkan sama ada tarikh ini berlaku pada bilangan minggu sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minggu semasa.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan minggu sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minggu semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>weeks</code>: Bilangan minggu.</li>      </ul>


## Examples

### Example #1 
Nyatakan jika minggu sebelum masa sistem semasa adalah dalam dua minggu yang sebelumnya.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
