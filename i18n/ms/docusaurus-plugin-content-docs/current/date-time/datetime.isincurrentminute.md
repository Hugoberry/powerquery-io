---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Tentukan sama ada masa tarikh ini berlaku dalam minit semasa kerana ia ditentukan oleh tarikh dan masa semasa dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Tentukan sama ada nilai tarikh data `dateTime` yang ditentukan berlaku ketika minit semasa kerana ditentukan oleh tarikh dan masa semasa dalam sistem.

-   `dateTime`: Nilai `datetime` atau `datetimezone` akan dinilai.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam minit semasa.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
