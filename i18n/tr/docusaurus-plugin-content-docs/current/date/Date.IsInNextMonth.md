---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde bir sonraki ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden bir sonraki ayın sonraki ay içinde olup olmadığını belirler.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
