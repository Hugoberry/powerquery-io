---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli hafta sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli hafta sırasında oluşup oluşmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin geçerli hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
