---
title: List.RemoveNulls
---

# List.RemoveNulls


Rimuove tutti i valori "null" dall'elenco specificato.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Rimuove tutte le occorrenze di valori "null" in `list`. Se nell'elenco non esistono valori "null", viene restituito l'elenco originale.


## Examples

### Example #1
Rimuovere i valori "null" dall'elenco \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
