---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Menunjukkan sama ada tarikh ini berlaku pada tahun semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan <code>dateTime</code> berlaku pada tahun semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


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
