---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Menunjukkan sama ada tarikhmasa ini berlaku pada jam seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada jam seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam jam seterusnya.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
