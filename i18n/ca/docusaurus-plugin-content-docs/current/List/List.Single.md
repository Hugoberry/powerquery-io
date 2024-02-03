---
title: List.Single
---

# List.Single


## Description

Retorna l&#39;element d&#39;una única llista per a una llista de longitud u, altrament, produeix una excepció.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Si només hi ha un element a la llista <code>list</code>, el retorna.    Si hi ha més d'un element a la llista, la funció retorna una excepció.


## Examples

### Example #1 
Troba el valor senzill de la llista \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Troba el valor senzill de la llista \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
