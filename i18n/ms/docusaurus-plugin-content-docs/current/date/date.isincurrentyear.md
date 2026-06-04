---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Menunjukkan sama ada tarikh ini berlaku pada tahun semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan `dateTime` berlaku pada tahun semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa adalah dalam tahun semasa.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
