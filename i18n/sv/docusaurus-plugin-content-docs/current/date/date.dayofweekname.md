---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Returnerar namnet på veckodagen.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returnerar veckonamnet för angivet `date`. En valfri `culture` kan även anges (till exempel "en-US").


## Examples

### Example #1
Hämta namnet på veckodagen.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
