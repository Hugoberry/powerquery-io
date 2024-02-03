---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Vrátí název dne v týdnu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Vrátí název dne v týdnu pro poskytnuté <code>date</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Získejte název dne v týdnu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
