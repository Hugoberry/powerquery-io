---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Returnerar namnet på veckodagen.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Returnerar veckonamnet för angivet <code>date</code>. En valfri <code>culture</code> kan även anges (till exempel "en-US").


## Examples

### Example #1 
Hämta namnet på veckodagen.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
