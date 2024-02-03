---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saniyede olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saniyede olup olmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilmek üzere bir <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin, geçerli saniyede olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
