---
title: Date.MonthName
---

# Date.MonthName


## Description

Atgriež mēneša komponenta nosaukumu.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Atgriež norādītā parametra <code>date</code> mēneša komponenta nosaukumu. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


## Examples

### Example #1 
Saņemiet mēneša nosaukumu.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
