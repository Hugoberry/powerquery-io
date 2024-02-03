---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Indica onde a lista inclúe todos os valores doutra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se a lista <code>list</code> inclúe todos os valores doutra lista, <code>values</code>.    Devolve verdadeiro se o valor está na lista, se non, devolve falso. Pódese indicar un valor de criterio de ecuación opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Descubrir se a lista \{1, 2, 3, 4, 5} contén 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Descubrir se a lista \{1, 2, 3, 4, 5} contén 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
