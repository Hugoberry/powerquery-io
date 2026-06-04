---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Vráti názov dňa v týždni.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Vráti názov dňa v týždni pre zadaný `date`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte názov dňa v týždni.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
