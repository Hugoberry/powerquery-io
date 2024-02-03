---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Menunjukkan sama ada tarikh ini berlaku pada bilangan tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada tahun semasa.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada tahun semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikh</code>, <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>years</code>: Bilangan tahun.</li>      </ul>


## Examples

### Example #1 
Nyatakan jika  tahun selepas masa sistem semasa adalah dalam dua tahun seterusnya.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
