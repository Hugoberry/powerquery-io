---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Bu tarihin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli çeyrek sırasında oluşup oluşmadığını gösterir.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

<code>dateTime</code> verilen datetime değerinin sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, geçerli çeyrek sırasında oluşup oluşmadığını gösterir.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinin geçerli çeyrek içinde olup olmadığını belirler.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
