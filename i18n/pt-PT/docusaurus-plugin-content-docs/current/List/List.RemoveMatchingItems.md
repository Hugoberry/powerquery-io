---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Remove todas as ocorrências dos valores introduzidos.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Remove todas as ocorrências dos valores especificados em <code>list2</code> a partir da lista <code>list1</code>. Se os valores existentes em <code>list2</code> não existirem em <code>list1</code>, é devolvida a lista original.    É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Criar uma lista a partir de \{1, 2, 3, 4, 5, 5} sem \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
