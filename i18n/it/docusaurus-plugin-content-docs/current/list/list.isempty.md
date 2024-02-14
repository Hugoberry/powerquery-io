---
title: List.IsEmpty
---

# List.IsEmpty


Restituisce true se l&#39;elenco è vuoto.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Restituisce <code>true</code> se l'elenco <code>list</code> non contiene valori (lunghezza 0). Restituisce <code>false</code> se l'elenco contiene valori (lunghezza > 0).


## Examples

### Example #1 
Verificare se l&#39;elenco \{} è vuoto.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se l&#39;elenco \{1, 2} è vuoto.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
