---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Menunjukkan sama ada tarikh ini berlaku pada hari semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan `dateTime` berlaku pada hari semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa adalah dalam hari semasa.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
