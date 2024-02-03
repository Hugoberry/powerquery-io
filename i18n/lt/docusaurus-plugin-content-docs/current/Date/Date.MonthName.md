---
title: Date.MonthName
---

# Date.MonthName


## Description

Pateikiamas mėnesio pavadinimo komponentas.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Pateikiamas nurodytos <code>date</code> reikšmės mėnesio komponento pavadinimas. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite mėnesio pavadinimą.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
