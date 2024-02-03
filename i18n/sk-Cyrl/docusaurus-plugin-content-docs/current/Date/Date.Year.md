---
title: Date.Year
---

# Date.Year


## Description

Vráti komponent roka.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Vráti komponent roka uvedenej hodnoty <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Vyhľadajte rok v hodnote #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
