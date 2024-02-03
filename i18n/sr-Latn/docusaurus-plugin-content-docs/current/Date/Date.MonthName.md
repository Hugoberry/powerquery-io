---
title: Date.MonthName
---

# Date.MonthName


## Description

Vraća komponentu imena meseca.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Vraća ime komponente meseca za navedeni <code>date</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


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
