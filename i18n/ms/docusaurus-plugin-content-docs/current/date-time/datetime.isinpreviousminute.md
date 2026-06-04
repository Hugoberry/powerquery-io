---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Menunjukkan sama ada tarikhmasa ini berlaku pada minit sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada minit sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.

-   `dateTime`: Nilai `tarikhmasa` atau `datetimezone` yang akan dinilai.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam minit sebelumnya.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
