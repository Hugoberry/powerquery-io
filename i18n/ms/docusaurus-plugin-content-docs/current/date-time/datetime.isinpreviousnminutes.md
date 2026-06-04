---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Menunjukkan sama ada tarikhmasa ini berlaku pada bilangan minit sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada bilangan minit sebelumnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada minit semasa.

-   `dateTime`: Nilai `tarikhmasa` atau `datetimezone` yang akan dinilai.
-   `minutes`: Bilangan minit.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam dua minit sebelumnya.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
