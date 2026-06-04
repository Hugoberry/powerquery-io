---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Menunjukkan sama ada tarikh ini berlaku pada bulan semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan `dateTime` berlaku pada bulan semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa adalah dalam bulan semasa.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
