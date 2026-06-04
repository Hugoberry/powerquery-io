---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Menunjukkan sama ada tarikhmasa ini berlaku pada jam sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada jam sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada jam semasa.

-   `dateTime`: Nilai `tarikhmasa` atau `datetimezone` yang akan dinilai.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam jam sebelumnya.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
