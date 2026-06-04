---
title: Date.MonthName
---

# Date.MonthName


Vraća komponentu imena meseca.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Vraća ime komponente meseca za navedeni `date`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Preuzmite ime meseca.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
