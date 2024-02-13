---
title: List.Max
---

# List.Max


Restituisce il valore massimo o il valore predefinito per un elenco vuoto.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Restituisce l'elemento massimo dell'elenco <code>list</code> o il valore predefinito facoltativo <code>default</code>, se l'elenco è vuoto.    È possibile specificare un valore facoltativo comparisonCriteria <code>comparisonCriteria</code> per determinare come confrontare gli elementi nell'elenco. Se questo parametro è Null, si usa l'operatore di confronto predefinito.


## Examples

### Example #1 
Trovare il valore massimo dell&#39;elenco \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Trovare il valore massimo dell&#39;elenco \{} o restituire -1 se è vuoto. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
