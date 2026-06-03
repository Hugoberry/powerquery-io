---
title: List.IsEmpty
---

# List.IsEmpty


Restituisce true se l'elenco è vuoto.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Restituisce `true` se l'elenco `list` non contiene valori (lunghezza 0). Restituisce `false` se l'elenco contiene valori (lunghezza > 0).


## Examples

### Example #1
Verificare se l'elenco \{\} è vuoto.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Verificare se l'elenco \{1, 2\} è vuoto.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
