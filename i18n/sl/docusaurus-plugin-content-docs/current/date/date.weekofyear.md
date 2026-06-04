---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Vrne število od 1 do 54, ki kaže, v katerem tednu leta je datum.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vrne številko od 1 do 54, ki označuje, v katerem tednu leta je datum `dateTime`.

-   `dateTime`: vrednost `datetime`, za katero bo določen teden v letu.
-   `firstDayOfWeek`: izbirna vrednost `Day.Type`, ki označuje, kateri dan je uporabljen za začetek novega tedna (na primer `Day.Sunday`). Če je ne navedete, je uporabljena privzeta vrednost, značilna za kulturo.


## Examples

### Example #1
Določite, kateri teden v letu vsebuje 27. marec 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Ugotovite, v katerem tednu v letu je datum 27. marec 2011, pri tem pa uporabite ponedeljek kot začetek tedna.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
