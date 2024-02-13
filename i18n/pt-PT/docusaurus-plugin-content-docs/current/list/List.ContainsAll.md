---
title: List.ContainsAll
---

# List.ContainsAll


Indica se uma lista inclui todos os valores existentes noutra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista <code>list</code> inclui todos os valores existentes noutra lista, <code>values</code>.    Devolve true se o valor for encontrado na lista; caso contrário, devolve false. É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Determinar se a lista \{1, 2, 3, 4, 5} contém 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a lista \{1, 2, 3, 4, 5} contém 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
