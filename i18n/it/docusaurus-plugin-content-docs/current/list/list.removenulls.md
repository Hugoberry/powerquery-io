---
title: List.RemoveNulls
---

# List.RemoveNulls


Rimuove tutti i valori &#34;null&#34; dall&#39;elenco specificato.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Rimuove tutte le occorrenze di valori "null" in <code>list</code>. Se nell'elenco non esistono valori "null", viene restituito l'elenco originale.


## Examples

### Example #1 
Rimuovere i valori &#34;null&#34; dall&#39;elenco \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
