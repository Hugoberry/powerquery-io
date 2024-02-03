---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Menunjukkan sama ada tarikh ini berlaku pada hari seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada hari semasa.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada hari seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada hari semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada hari selepas masa sistem semasa adalah dalam hari seterusnya.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
