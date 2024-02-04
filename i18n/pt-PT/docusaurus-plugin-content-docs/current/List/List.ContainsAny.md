---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indica se uma lista inclui qualquer um dos valores existentes noutra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se a lista <code>list</code> inclui qualquer um dos valores existentes noutra lista, <code>values</code>.        Devolve true se o valor for encontrado na lista; caso contrário, devolve false. É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Determinar se a lista \{1, 2, 3, 4, 5} contém 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a lista \{1, 2, 3, 4, 5} contém 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
