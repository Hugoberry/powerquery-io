---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Tentukan sama ada masa tarikh ini berlaku dalam saat semasa kerana ia ditentukan oleh tarikh dan masa semasa dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Tentukan sama ada nilai tarikh data `dateTime` yang ditentukan berlaku ketika saat semasa kerana ditentukan oleh tarikh dan masa semasa dalam sistem.

-   `dateTime`: Nilai `datetime` atau `datetimezone` akan dinilai.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa berada dalam saat semasa.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
