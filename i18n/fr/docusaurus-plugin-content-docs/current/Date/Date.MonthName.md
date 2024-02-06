---
title: Date.MonthName
---

# Date.MonthName


Retourne le nom du mois.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Retourne le nom du composant month pour la <code>date</code> fournie. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenir le nom du mois.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
