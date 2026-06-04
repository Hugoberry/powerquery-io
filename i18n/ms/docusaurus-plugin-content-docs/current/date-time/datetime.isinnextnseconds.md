---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Menunjukkan sama ada tarikhmasa ini berlaku pada bilangan saat seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada saat semasa.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai tarikhmasa `dateTime` yang diberikan berlaku pada bilangan saat seterusnya, seperti yang ditentukan oleh tarikh dan masa pada sistem. Ambil perhatian bahawa fungsi ini akan mengembalikan false apabila dihantar nilai yang berlaku pada saat semasa.

-   `dateTime`: Nilai `tarikhmasa` atau `datetimezone` yang akan dinilai.
-   `seconds`: Bilangan saat.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam dua saat seterusnya.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
