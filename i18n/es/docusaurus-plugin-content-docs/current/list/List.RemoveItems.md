---
title: List.RemoveItems
---

# List.RemoveItems


Quita los elementos de list1 que estén presentes en la lista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Quita todas las coincidencias de los valores proporcionados en <code>list2</code> de <code>list1</code>. Si no existen los valores de <code>list2</code> en <code>list1</code>, se devuelve la lista original.


## Examples

### Example #1 
Quitar de la lista \{1, 2, 3, 4, 2, 5, 5} los elementos de la lista \{2, 4, 6}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
