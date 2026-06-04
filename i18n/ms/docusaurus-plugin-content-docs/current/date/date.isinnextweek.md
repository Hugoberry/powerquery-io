---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Menunjukkan sama ada tarikh ini berlaku pada minggu seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minggu semasa.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada minggu seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minggu semasa.

-   `dateTime`: Nilai `tarikh`, `tarikhmasa` atau `datetimezone` yang akan dinilai.


## Examples

### Example #1
Tentukan sama ada minggu selepas masa sistem semasa adalah dalam minggu seterusnya.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
