---
title: List.Min
---

# List.Min


## Description

Retornará o valor mínimo ou o valor padrão, se a lista estiver vazia.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Retorna o item mínimo da lista <code>list</code> ou o valor padrão <code>default</code> opcional, caso a lista esteja vazia.    Um valor comparisonCriteria opcional <code>comparisonCriteria</code> pode ser especificado para determinar como comparar os itens na lista. Se esse parâmetro for nulo, o comparador padrão será usado.


## Examples

### Example #1 
Localize o item mínimo da lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Localize o item mínimo da lista \{} ou retorne -1, se ela estiver vazia. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
