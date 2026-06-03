---
title: List.IsDistinct
---

# List.IsDistinct


Gibt an, ob die Liste Duplikate enthält.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt einen logischen Wert zurück, der angibt, ob die Liste "`list`" Duplikate enthält: `true`, falls die Liste eindeutige Werte enthält, `false`, falls Duplikatwerte vorhanden sind.


## Examples

### Example #1
Ermittelt, ob die Liste "\{1, 2, 3\}" eindeutige Werte (also keine Duplikate) enthält.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Ermittelt, ob die Liste "\{1, 2, 3, 3\}" eindeutige Werte (also keine Duplikate) enthält.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
