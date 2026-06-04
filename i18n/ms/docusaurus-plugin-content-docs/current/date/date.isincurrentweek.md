---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Menunjukkan sama ada tarikh ini berlaku pada minggu semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan `dateTime` berlaku pada minggu semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa adalah dalam minggu semasa.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
