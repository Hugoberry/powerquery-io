---
title: Date.MonthName
---

# Date.MonthName


Restituisce il nome del componente mese.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Restituisce il nome del componente mese per il valore `date` specificato. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT".


## Examples

### Example #1
Ottiene il nome del mese.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
