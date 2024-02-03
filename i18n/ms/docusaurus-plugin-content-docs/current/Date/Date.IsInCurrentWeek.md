---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Menunjukkan sama ada tarikh ini berlaku pada minggu semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan <code>dateTime</code> berlaku pada minggu semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


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
