---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, sonraki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>months</code>: Ay sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden sonraki ayın, sonraki iki ay içinde olup olmadığını belirler.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
