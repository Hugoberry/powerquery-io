---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli dakikada olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli dakikada olup olmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilmek üzere bir <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin, geçerli dakikada olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
