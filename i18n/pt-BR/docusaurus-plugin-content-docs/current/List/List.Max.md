---
title: List.Max
---

# List.Max


Retornará o valor máximo ou o valor padrão, se a lista estiver vazia.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retorna o item máximo da lista <code>list</code> ou o valor padrão <code>default</code> opcional, caso a lista esteja vazia.    Um valor opcional de comparisonCriteria, <code>comparisonCriteria</code>, pode ser especificado para determinar como comparar os itens na lista. Se esse parâmetro for nulo, o comparador padrão será usado.


## Examples

### Example #1 
Localize o item máximo da lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Localize o item máximo da lista \{} ou retorne -1, se ela estiver vazia. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
