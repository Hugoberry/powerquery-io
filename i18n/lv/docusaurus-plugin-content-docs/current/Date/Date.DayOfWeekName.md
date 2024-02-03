---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Atgriež nedēļas dienas nosaukumu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Atgriež norādītā parametra <code>date</code> nedēļas dienas nosaukumu. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


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
