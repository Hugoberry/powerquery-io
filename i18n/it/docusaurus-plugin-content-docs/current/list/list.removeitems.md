---
title: List.RemoveItems
---

# List.RemoveItems


Elimina da list1 gli elementi che sono presenti nell'elenco.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Rimuove tutte le occorrenze dei valori specificati in `list2` da `list1`. Se i valori di `list2` non esistono in `list1`, viene restituito l'elenco originale.


## Examples

### Example #1
Eliminare gli elementi dell'elenco \{2, 4, 6\} dall'elenco \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
