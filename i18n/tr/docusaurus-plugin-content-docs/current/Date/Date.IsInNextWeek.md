---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde bir sonraki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki hafta içinde olup olmadığını gösterir. Geçerli hafta içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden bir sonraki haftanın sonraki hafta içinde olup olmadığını belirler.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
