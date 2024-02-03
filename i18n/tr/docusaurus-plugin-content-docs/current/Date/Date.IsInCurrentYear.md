---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli yıl sırasında oluşup oluşmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin geçerli yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
