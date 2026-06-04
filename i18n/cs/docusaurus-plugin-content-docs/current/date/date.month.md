---
title: Date.Month
---

# Date.Month


Vrátí komponentu měsíce.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Vrátí komponentu měsíce předané hodnoty `datetime` `dateTime`.


## Examples

### Example #1
Vyhledá měsíc v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
