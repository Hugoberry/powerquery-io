---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Menunjukkan sama ada tarikh ini berlaku pada bilangan suku tahun sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada bilangan suku tahun sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.

-   `dateTime`: Nilai `tarikh`, `tarikhmasa` atau `datetimezone` yang akan dinilai.
-   `quarters`: Bilangan suku tahun.


## Examples

### Example #1
Nyatakan jika suku tahun sebelum masa sistem semasa adalah dalam dua suku tahun yang sebelumnya.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
