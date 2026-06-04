---
title: List.Min
---

# List.Min


Vrátí minimální hodnotu nebo výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Vrátí nejnižší položku v seznamu `list` nebo volitelnou výchozí hodnotu `default`, pokud je seznam prázdný. Lze zadat volitelnou hodnotu `comparisonCriteria` a určit její pomocí způsob porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač.


## Examples

### Example #1
Vyhledá nejnižší hodnotu v seznamu \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Vyhledá nejnižší hodnotu v seznamu \{\} nebo vrátí hodnotu -1, pokud je seznam prázdný.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
