---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Bu tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saatte olup olmadığını gösterir.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin sistemdeki geçerli tarih ve saat tarafından belirlenen geçerli saatte olup olmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilmek üzere bir <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin, geçerli saatte olup olmadığını belirler.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
