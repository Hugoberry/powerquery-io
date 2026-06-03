---
title: List.First
---

# List.First


Restituisce il primo valore dell'elenco o, se vuoto, il valore predefinito specificato.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Restituisce il primo elemento dell'elenco `list` o il valore predefinito facoltativo `defaultValue`, se l'elenco è vuoto. Se l'elenco è vuoto e un valore predefinito non è specificato, la funzione restituisce `null`.


## Examples

### Example #1
Trovare il primo valore dell'elenco \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Trovare il primo valore dell'elenco \{\}. Se l'elenco è vuoto, viene restituito -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
