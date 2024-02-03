---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Tentukan sama ada masa tarikh ini berlaku dalam saat semasa kerana ia ditentukan oleh tarikh dan masa semasa dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Tentukan sama ada nilai tarikh data <code>dateTime</code> yang ditentukan berlaku ketika saat semasa kerana ditentukan oleh tarikh dan masa semasa dalam sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code> atau <code>datetimezone</code> akan dinilai.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam saat semasa.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
