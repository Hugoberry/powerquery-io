---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Menunjukkan sama ada tarikhmasa ini berlaku pada minit seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada minit seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam minit seterusnya.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
