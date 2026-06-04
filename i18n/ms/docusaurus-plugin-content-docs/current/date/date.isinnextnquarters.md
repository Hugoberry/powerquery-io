---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Menunjukkan sama ada tarikh ini berlaku pada bilangan suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada bilangan suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.

-   `dateTime`: Nilai `tarikh`, `tarikhmasa` atau `datetimezone` yang akan dinilai.
-   `quarters`: Bilangan suku tahun.


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
