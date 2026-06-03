---
title: List.Transform
---

# List.Transform


Restituisce un nuovo elenco di valori calcolati da questo elenco.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Restituisce un nuovo elenco di valori mediante l'applicazione della funzione di trasformazione `transform` all'elenco `list`.


## Examples

### Example #1
Aggiungere 1 a ogni valore nell'elenco \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
