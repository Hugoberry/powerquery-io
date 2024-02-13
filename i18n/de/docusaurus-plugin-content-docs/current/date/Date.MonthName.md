---
title: Date.MonthName
---

# Date.MonthName


Gibt den Namen der Monatskomponente zurück.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Gibt den Namen der Monatskomponente für die Angabe "<code>date</code>" zurück. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1 
Ruft den Namen des Monats ab.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
