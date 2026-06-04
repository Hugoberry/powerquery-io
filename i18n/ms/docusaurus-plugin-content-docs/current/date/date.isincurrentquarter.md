---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Menunjukkan sama ada tarikh ini berlaku pada suku semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Menunjukkan sama ada nilai datetime yang ditentukan `dateTime` berlaku pada suku semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.

-   `dateTime`: Nilai `date`, `datetime` atau `datetimezone` untuk dinilaikan.


## Examples

### Example #1
Tentukan sama ada masa sistem semasa adalah dalam suku semasa.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
