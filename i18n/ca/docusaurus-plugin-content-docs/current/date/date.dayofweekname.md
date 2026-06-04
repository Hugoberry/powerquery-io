---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Retorna el nom del dia de la setmana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Retorna el nom del dia de la setmana per al valor `date` proporcionat. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el nom del dia de la setmana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
