---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, sonraki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç ay içinde olup olmadığını gösterir. Geçerli ay içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.
-   `months`: Ay sayısı.


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
