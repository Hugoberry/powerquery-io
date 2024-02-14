---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Aplica cada reemplazo de \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Realiza los reemplazos dados a la lista <code>list</code>. Una operación de reemplazo <code>replacements</code> consta de una lista de dos valores, el valor anterior y un valor nuevo, proporcionado en una lista.    Se puede especificar un valor opcional de criterios de ecuación, <code>equationCriteria</code>, para controlar la igualdad de las pruebas.


## Examples

### Example #1 
Crear una lista de \{1, 2, 3, 4, 5} reemplazando el valor 5 por -5 y el valor 1 por -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
