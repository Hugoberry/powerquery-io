---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Menunjukkan sama ada tarikhmasa ini berlaku pada bilangan minit seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan minit seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>minutes</code>: Bilangan minit.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam dua minit seterusnya.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
