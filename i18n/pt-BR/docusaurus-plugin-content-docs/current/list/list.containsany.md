---
title: List.ContainsAny
---

# List.ContainsAny


Indica em que local uma lista inclui qualquer um dos valores em outra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista <code>list</code> inclui qualquer um dos valores em outra lista, <code>values</code>.        Retornará true se o valor for encontrado na lista; do contrário, retornará false. Um valor de critérios de equação opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Descubra se a lista \{1, 2, 3, 4, 5} contém 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se a lista \{1, 2, 3, 4, 5} contém 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
