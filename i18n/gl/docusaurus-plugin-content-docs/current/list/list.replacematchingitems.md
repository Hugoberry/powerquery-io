---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Aplica cada substitución de \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Realiza as substitucións indicadas na lista `list`. Unha operación de substitución `replacements` consta dunha lista de dous valores, o valor antigo e o valor novo, fornecidos nunha lista. Pódese indicar un valor de criterio de ecuación opcional, `equationCriteria`, para controlar probas de igualdade.


## Examples

### Example #1
Crear unha lista de \{1, 2, 3, 4, 5\} substituíndo o valor 5 con -5 e o valor 1 con -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
