---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Menunjukkan sama ada tarikh ini berlaku pada bulan semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan <code>dateTime</code> berlaku pada bulan semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


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
