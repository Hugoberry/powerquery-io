---
title: List.Union
---

# List.Union


## Description

Devuelve la unión de los valores de lista encontrados en la entrada.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Toma una lista de listas <code>lists</code>, combina los elementos de las listas individuales y los devuelve en la lista de salida. Como resultado, la lista devuelta contiene todos los elementos de cualquiera de las listas de entrada.    Esta operación mantiene la semántica multiconjunto tradicional, por lo que los valores duplicados se buscan como parte de la unión.    Se puede especificar un valor opcional de criterios de ecuación (<code>equationCriteria</code>) para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Crear una combinación de la lista \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
