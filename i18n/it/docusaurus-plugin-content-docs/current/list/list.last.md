---
title: List.Last
---

# List.Last


Restituisce l'ultimo valore dell'elenco o, se vuoto, il valore predefinito specificato.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Restituisce l'ultimo elemento nell'elenco specificato o il valore predefinito facoltativo se l'elenco è vuoto.

-   `list`: elenco da esaminare.
-   `defaultValue`: (Facoltativo) valore da restituire se l'elenco è vuoto. Se l'elenco è vuoto e non viene specificato un valore predefinito, la funzione restituisce `null`.


## Examples

### Example #1
Trovare l'ultimo valore dell'elenco \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Trovare l'ultimo valore dell'elenco \{\} o -1 se è vuoto.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
