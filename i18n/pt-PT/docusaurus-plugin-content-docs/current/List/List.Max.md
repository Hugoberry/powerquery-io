---
title: List.Max
---

# List.Max


## Description

Devolve o valor máximo ou o valor predefinido para uma lista vazia.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Devolve o item máximo existente na lista <code>list</code> ou o valor predefinido opcional <code>default</code> se a lista estiver vazia.    É possível especificar um valor de comparisonCriteria opcional, <code>comparisonCriteria</code>, para determinar o modo como os itens existentes na lista devem ser comparados. Se este parâmetro for nulo, será utilizado o comparador predefinido.


## Examples

### Example #1 
Determinar o máximo na lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Determinar o máximo na lista \{} ou devolver -1 se a lista estiver vazia. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
