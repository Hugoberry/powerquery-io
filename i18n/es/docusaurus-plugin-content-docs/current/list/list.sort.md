---
title: List.Sort
---

# List.Sort


Ordena una lista de datos según los criterios especificados.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Ordena una lista de datos, `list`, según los criterios opcionales especificados. Se puede especificar un parámetro opcional, `comparisonCriteria`, como criterio de comparación. Esto puede tomar los siguientes valores:

-   Para controlar el orden, el criterio de comparación puede ser un valor de enumeración Order. (`Order.Descending`, `Order.Ascending`).
-   Para calcular una clave que se usará para la ordenación, se puede usar una función de 1 argumento.
-   Para seleccionar una clave y un orden de control, el criterio de comparación puede ser una lista que contenga la clave y el orden (`{each 1 / _, Order.Descending}`).
-   Para controlar completamente la comparación, se puede usar una función de 2 argumentos (como Value.Compare). A esta función se le pasarán dos elementos de la lista (dos elementos cualquiera, en cualquier orden). La función debe devolver uno de los siguientes valores:
    -   `-1`: el primer elemento es menor que el segundo.
    -   `0`: los elementos son iguales.
    -   `1`: el primer elemento es mayor que el segundo.


## Examples

### Example #1
Ordenar la lista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ordenar la lista \{2, 3, 1\} en orden descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Ordenar la lista \{2, 3, 1\} en orden descendente mediante el método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
