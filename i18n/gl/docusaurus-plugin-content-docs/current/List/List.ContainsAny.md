---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indica onde a lista inclúe calquera dos valores doutra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se a lista <code>list</code> inclúe calquera dos valores doutra lista, <code>values</code>.        Devolve verdadeiro se o valor está na lista, se non, devolve falso. Pódese indicar un valor de criterio de ecuación opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Descubrir se a lista \{1, 2, 3, 4, 5} contén 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Descubrir se a lista \{1, 2, 3, 4, 5} contén 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
