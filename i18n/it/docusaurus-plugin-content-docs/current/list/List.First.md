---
title: List.First
---

# List.First


Restituisce il primo valore dell&#39;elenco o, se vuoto, il valore predefinito specificato.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Restituisce il primo elemento dell'elenco <code>list</code> o il valore predefinito facoltativo <code>defaultValue</code>, se l'elenco è vuoto.    Se l'elenco è vuoto e un valore predefinito non è specificato, la funzione restituisce <code>null</code>.


## Examples

### Example #1 
Trovare il primo valore dell&#39;elenco \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Trovare il primo valore dell&#39;elenco \{}. Se l&#39;elenco è vuoto, viene restituito -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
