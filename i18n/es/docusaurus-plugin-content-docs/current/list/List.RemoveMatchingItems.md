---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Quita todas las coincidencias de los valores de entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Quita todas las coincidencias de los valores proporcionados en <code>list2</code> de la lista <code>list1</code>. Si no existen los valores de <code>list2</code> en <code>list1</code>, se devuelve la lista original.    Se puede especificar un valor opcional de criterios de ecuación, <code>equationCriteria</code>, para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Crear una lista a partir de \{1, 2, 3, 4, 5, 5} sin \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
