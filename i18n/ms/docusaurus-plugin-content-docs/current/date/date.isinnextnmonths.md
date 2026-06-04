---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Menunjukkan sama ada tarikh ini berlaku pada bilangan bulan seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada bulan semasa.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada bilangan bulan seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada bulan semasa.

-   `dateTime`: Nilai `tarikh`, `tarikhmasa` atau `datetimezone` yang akan dinilai.
-   `months`: Bilangan bulan.


## Examples

### Example #1
Nyatakan jika bulan selepas masa sistem semasa adalah dalam dua bulan kemudian.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
