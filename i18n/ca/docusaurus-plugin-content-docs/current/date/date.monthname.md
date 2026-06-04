---
title: Date.MonthName
---

# Date.MonthName


Retorna el component del nom del mes.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Retorna el nom del component de mes per al valor `date` proporcionat. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el nom del mes.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
