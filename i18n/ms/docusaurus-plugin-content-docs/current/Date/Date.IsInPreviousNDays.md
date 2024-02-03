---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Menunjukkan sama ada tarikh ini berlaku pada bilangan hari sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada hari semasa.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan hari sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada hari semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>days</code>: Bilangan hari.</li>      </ul>


## Examples

### Example #1 
Nyatakan jika hari sebelum masa sistem semasa adalah dalam dua hari sebelumnya.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
