---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Vraća ime dana u nedelji.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Vraća ime dana u sedmici za navedeni <code>date</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


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
