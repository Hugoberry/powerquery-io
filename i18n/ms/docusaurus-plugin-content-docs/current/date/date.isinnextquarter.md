---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Menunjukkan sama ada tarikh ini berlaku pada suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada suku tahun seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada suku tahun semasa.

-   `dateTime`: Nilai `tarikh`, `tarikhmasa` atau `datetimezone` yang akan dinilai.


## Examples

### Example #1
Tentukan sama ada suku selepas masa sistem semasa adalah dalam suku seterusnya.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
