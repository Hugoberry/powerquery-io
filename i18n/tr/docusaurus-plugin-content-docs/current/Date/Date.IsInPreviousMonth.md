---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden bir önceki ayın önceki ay içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
