---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Remove todas as ocorrências dos valores de entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Remove todas as ocorrências dos valores especificados em <code>list2</code> na lista <code>list1</code>. Se os valores em <code>list2</code> não existirem em <code>list1</code>, a lista original será retornada.    Um valor de critérios de equação opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Crie uma lista em \{1, 2, 3, 4, 5, 5} sem \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
