---
title: List.Max
---

# List.Max


## Description

Vrátí maximální hodnotu nebo výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Vrátí nejvyšší položku v seznamu <code>list</code> nebo volitelnou výchozí hodnotu <code>default</code>, pokud je seznam prázdný.    Lze zadat volitelnou hodnotu <code>comparisonCriteria</code> a určit její pomocí způsob porovnání položek v seznamu. Pokud má parametr hodnotu null, použije se výchozí porovnávač.


## Examples

### Example #1 
Vyhledá nejvyšší hodnotu v seznamu \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Vyhledá nejvyšší hodnotu v seznamu \{} nebo vrátí hodnotu -1, pokud je seznam prázdný. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
