---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indica dónde incluye una lista alguno de los valores de otra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica si la lista <code>list</code> incluye alguno de los valores de otra lista <code>values</code>.        Devuelve true si el valor se encuentra en la lista y false en caso contrario. Se puede especificar un valor opcional de criterios de ecuación, <code>equationCriteria</code>, para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
