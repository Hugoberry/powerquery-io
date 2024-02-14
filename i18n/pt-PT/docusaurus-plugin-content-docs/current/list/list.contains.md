---
title: List.Contains
---

# List.Contains


Indica se a lista contém o valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista <code>list</code> contém o valor <code>value</code>.    Devolve true se o valor for encontrado na lista; caso contrário, devolve false. É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Determinar se a lista \{1, 2, 3, 4, 5} contém 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a lista \{1, 2, 3, 4, 5} contém 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
