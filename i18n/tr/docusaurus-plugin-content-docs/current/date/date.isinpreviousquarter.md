---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Bu tarihin, sistemdeki geçerli tarih saat tarafından belirlendiği şekilde, önceki üç aylık dönem içinde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki üç aylık dönem içinde olup olmadığını gösterir. Geçerli üç aylık dönem içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden bir önceki çeyreğin önceki çeyrek içinde olup olmadığını belirler.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
