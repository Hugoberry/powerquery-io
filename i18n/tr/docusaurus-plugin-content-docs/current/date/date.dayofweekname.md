---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Günün adını döndürür.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Sağlanan `date` için hafta gününün adını döndürür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR").


## Examples

### Example #1
Günün adını alır.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
