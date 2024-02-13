---
title: List.ContainsAll
---

# List.ContainsAll


Indica dónde incluye una lista todos los valores en otra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la lista <code>list</code> incluye todos los valores en otra lista <code>values</code>.    Devuelve true si el valor se encuentra en la lista y false en caso contrario. Se puede especificar un valor opcional de criterios de ecuación, <code>equationCriteria</code>, para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 3 y 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 5 y 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
