---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki yıl içinde olup olmadığını gösterir. Geçerli yıl içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden bir önceki yılın önceki yıl içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
