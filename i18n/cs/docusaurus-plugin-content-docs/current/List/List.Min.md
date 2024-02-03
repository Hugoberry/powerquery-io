---
title: List.Min
---

# List.Min


## Description

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


## Details

Vrátí nejnižší položku v seznamu <code>list</code> nebo volitelnou výchozí hodnotu <code>default</code>, pokud je seznam prázdný.    Lze zadat volitelnou hodnotu <code>comparisonCriteria</code> a určit její pomocí způsob porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač.


## Examples

### Example #1 
Vyhledá nejnižší hodnotu v seznamu \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Vyhledá nejnižší hodnotu v seznamu \{} nebo vrátí hodnotu -1, pokud je seznam prázdný. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
