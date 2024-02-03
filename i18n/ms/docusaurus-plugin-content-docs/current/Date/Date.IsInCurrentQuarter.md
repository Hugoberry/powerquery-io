---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Menunjukkan sama ada tarikh ini berlaku pada suku semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan <code>dateTime</code> berlaku pada suku semasa, seperti yang ditentukan oleh tarikh dan masa semasa pada sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


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
