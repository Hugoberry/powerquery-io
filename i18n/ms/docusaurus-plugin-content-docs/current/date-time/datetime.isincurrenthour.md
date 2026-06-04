---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Tentukan sama ada masa tarikh ini berlaku dalam jam semasa kerana ia ditentukan oleh tarikh dan masa semasa dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Tentukan sama ada nilai tarikh data `dateTime` yang ditentukan berlaku ketika jam semasa kerana ditentukan oleh tarikh dan masa semasa dalam sistem.

-   `dateTime`: Nilai `datetime` atau `datetimezone` akan dinilai.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam jam semasa.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
