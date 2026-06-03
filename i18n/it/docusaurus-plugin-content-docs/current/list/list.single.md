---
title: List.Single
---

# List.Single


Restituisce un elemento per un elenco di lunghezza uno; in caso contrario genera un errore.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Se è presente un solo elemento nell'elenco `list`, restituisce tale elemento. Se è presente più di un elemento o se l'elenco è vuoto, la funzione genera un errore.


## Examples

### Example #1
Trovare il valore singolo nell'elenco \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Trovare il valore singolo nell'elenco \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
