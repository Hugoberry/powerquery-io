---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, sonraki birkaç yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>years</code>: Yıl sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden sonraki yılın, sonraki iki yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
