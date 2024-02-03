---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Indica em que local uma lista inclui todos os valores em outra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se a lista <code>list</code> inclui todos os valores em outra lista, <code>values</code>.    Retornará true se o valor for encontrado na lista; do contrário, retornará false. Um valor de critérios de equação opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Descubra se a lista \{1, 2, 3, 4, 5} contém 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se a lista \{1, 2, 3, 4, 5} contém 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
