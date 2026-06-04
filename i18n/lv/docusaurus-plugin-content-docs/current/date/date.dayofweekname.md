---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Atgriež nedēļas dienas nosaukumu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Atgriež norādītā parametra `date` nedēļas dienas nosaukumu. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV").


## Examples

### Example #1
Saņemiet nedēļas dienas nosaukumu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
