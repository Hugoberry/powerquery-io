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

Restituisce un nuovo elenco di valori mediante l'applicazione della funzione di trasformazione <code>transform</code> all'elenco <code>list</code>.


## Examples

### Example #1 
Aggiungere 1 a ogni valore nell&#39;elenco \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
