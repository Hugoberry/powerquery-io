---
title: List.Contains
---

# List.Contains


Indica si la lista contiene el valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la lista <code>list</code> contiene el valor <code>value</code>.    Devuelve "true" si el valor se encuentra en la lista, y "false" en caso contrario. Se puede especificar un valor opcional de criterios de ecuación (<code>equationCriteria</code>) para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si la lista \{1, 2, 3, 4, 5} contiene 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
