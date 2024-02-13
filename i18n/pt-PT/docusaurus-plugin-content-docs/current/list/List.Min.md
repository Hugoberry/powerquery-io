---
title: List.Min
---

# List.Min


Devolve o valor mínimo ou o valor predefinido para uma lista vazia.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Devolve o item mínimo existente na lista <code>list</code> ou o valor predefinido opcional <code>default</code> se a lista estiver vazia.    É possível especificar um valor comparisonCriteria opcional, <code>comparisonCriteria</code>, para determinar o modo como os itens existentes na lista devem ser comparados. Se este parâmetro for nulo, será utilizado o comparador predefinido.


## Examples

### Example #1 
Determinar o mínimo na lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Determinar o mínimo na lista \{} ou devolver -1 se a lista estiver vazia. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
