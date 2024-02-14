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

Rimuove tutte le occorrenze dei valori specificati in <code>list2</code> dall'elenco <code>list1</code>. Se i valori di <code>list2</code> non esistono in <code>list1</code>, viene restituito l'elenco originale.    È possibile specificare un valore dei criteri di equazione facoltativo, <code>equationCriteria</code>, per verificare il test di uguaglianza. 


## Examples

### Example #1 
Creare un elenco da \{1, 2, 3, 4, 5, 5} senza \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
