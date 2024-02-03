---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Menunjukkan sama ada tarikh ini berlaku pada bilangan suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>quarters</code>: Bilangan suku tahun.</li>      </ul>


## Examples

### Example #1 
Nyatakan jika suku tahun selepas masa sistem semasa adalah dalam dua suku tahun yang seterusnya.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
