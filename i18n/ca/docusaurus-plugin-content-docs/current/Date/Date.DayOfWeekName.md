---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Retorna el nom del dia de la setmana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Retorna el nom del dia de la setmana per al valor <code>date</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté el nom del dia de la setmana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
