---
title: List.RemoveItems
---

# List.RemoveItems


Elimina da list1 gli elementi che sono presenti nell&#39;elenco.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Rimuove tutte le occorrenze dei valori specificati in <code>list2</code> da <code>list1</code>. Se i valori di <code>list2</code> non esistono in <code>list1</code>, viene restituito l'elenco originale.


## Examples

### Example #1 
Eliminare gli elementi dell&#39;elenco \{2, 4, 6} dall&#39;elenco \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
