---
title: Date.MonthName
---

# Date.MonthName


## Description

Vrátí komponentu názvu měsíce.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Vrátí název složky měsíce pro poskytnuté <code>date</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Získejte název měsíce.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
