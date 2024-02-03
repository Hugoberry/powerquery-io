---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Tentukan sama ada masa tarikh ini berlaku dalam minit semasa kerana ia ditentukan oleh tarikh dan masa semasa dalam sistem.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Tentukan sama ada nilai tarikh data <code>dateTime</code> yang ditentukan berlaku ketika minit semasa kerana ditentukan oleh tarikh dan masa semasa dalam sistem.      <ul>      <li><code>dateTime</code>: Nilai <code>datetime</code> atau <code>datetimezone</code> akan dinilai.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada masa sistem semasa berada dalam minit semasa.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
