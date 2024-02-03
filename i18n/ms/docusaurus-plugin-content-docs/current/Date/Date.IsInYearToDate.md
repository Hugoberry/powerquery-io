---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Menunjukkan sama ada tarikh ini berlaku semasa tahun semasa dan adalah pada atau sebelum hari semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan <code>dateTime</code> berlaku semasa tahun semasa dan adalah pada atau sebelum hari semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa adalah dalam tahun terkini.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
