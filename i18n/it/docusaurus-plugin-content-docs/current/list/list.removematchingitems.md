---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Rimuove tutte le occorrenze dei valori di input.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Rimuove tutte le occorrenze dei valori specificati in `list2` dall'elenco `list1`. Se i valori di `list2` non esistono in `list1`, viene restituito l'elenco originale. È possibile specificare un valore dei criteri di equazione facoltativo, `equationCriteria`, per verificare il test di uguaglianza.


## Examples

### Example #1
Creare un elenco da \{1, 2, 3, 4, 5, 5\} senza \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
