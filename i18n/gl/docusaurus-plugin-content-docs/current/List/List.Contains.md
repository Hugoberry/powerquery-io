---
title: List.Contains
---

# List.Contains


## Description

Indica se a lista contén o valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Indica se a lista <code>list</code> contén o valor <code>value</code>.    Devolve true se o valor está na lista, se non, devolve false. Pódese indicar un valor de criterio de ecuación opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Buscar se a lista \{1, 2, 3, 4, 5} contén 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Buscar se a lista \{1, 2, 3, 4, 5} contén 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
