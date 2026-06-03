---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, sonraki üç aylık dönemlerde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki üç aylık dönemlerde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.
-   `quarters`: Üç aylık dönem sayısı.


## Examples

### Example #1
Geçerli sistem saatinden sonraki üç aylık dönemin, sonraki iki üç aylık dönem içinde olup olmadığını belirler.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
