---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Vraća ime dana u nedelji.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Vraća ime dana u sedmici za navedeni `date`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Preuzmite ime dana u nedelji.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
