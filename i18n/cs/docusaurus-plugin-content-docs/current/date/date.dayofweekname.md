---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Vrátí název dne v týdnu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Vrátí název dne v týdnu pro poskytnuté `date`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Získejte název dne v týdnu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
