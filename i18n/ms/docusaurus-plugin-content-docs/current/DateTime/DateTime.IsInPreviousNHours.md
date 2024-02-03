---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Menunjukkan sama ada tarikhmasa ini berlaku pada bilangan jam sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Menunjukkan sama ada nilai tarikhmasa <code>dateTime</code> yang diberikan berlaku pada bilangan jam sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.      <ul>      <li><code>dateTime</code>: Nilai <code>tarikhmasa</code> atau <code>datetimezone</code> yang akan dinilai.</li>      <li><code>hours</code>: Bilangan jam.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam dua jam sebelumnya.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
