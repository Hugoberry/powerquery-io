---
title: List.Single
---

# List.Single


Retorna l'element d'una única llista per a una llista de longitud u, altrament, produeix un error.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Si només hi ha un element a la llista `list`, el retorna. Si hi ha més d'un element a la llista, la funció retorna un error.


## Examples

### Example #1
Troba el valor senzill de la llista \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Troba el valor senzill de la llista \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
