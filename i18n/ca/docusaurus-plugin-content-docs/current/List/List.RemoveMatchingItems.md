---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Suprimeix totes les aparicions dels valors d&#39;entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Suprimeix totes les aparicions dels valors donats a <code>list2</code> des de la llista <code>list1</code>. Si els valors de <code>list2</code> no existeixen a <code>list1</code>, es retorna la llista original.    Un valor de criteris d'equació opcional, <code>equationCriteria</code>, es pot especificar per controlar la prova d'igualtat. 


## Examples

### Example #1 
Crea una llista de \{1, 2, 3, 4, 5, 5} sense \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
