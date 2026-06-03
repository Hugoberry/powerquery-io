---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Retourne le nom du jour de la semaine.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Retourne le jour du nom de la semaine pour le `date` fourni. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenir le nom du jour de la semaine.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
