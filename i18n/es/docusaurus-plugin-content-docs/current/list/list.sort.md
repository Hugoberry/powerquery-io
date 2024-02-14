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

Ordena una lista de datos, <code>list</code>, según los criterios opcionales especificados.    Se puede especificar un parámetro opcional, <code>comparisonCriteria</code>, como criterio de comparación. Esto puede tomar los siguientes valores:    <ul>    <li>Para controlar el orden, el criterio de comparación puede ser un valor de enumeración de orden. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li>  Para calcular una clave que se usará para la ordenación, se puede usar una función de 1 argumento. </li> <li>Para seleccionar una clave y un orden de control, el criterio de comparación puede ser una lista que contenga la clave y el orden (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Para controlar completamente la comparación, se puede usar una función de 2 argumentos. A esta función se le pasarán dos elementos de la lista (dos elementos cualquiera, en cualquier orden). La función debe devolver uno de los siguientes valores:        <ul>            <li> <code>-1</code>: el primer elemento es menor que el segundo elemento.</li>            <li> <code>0</code>: los elementos son iguales.</li>            <li> <code>1</code>: el primer elemento es mayor que el segundo elemento.</li>        </ul>        Value.Compare es un método que se puede usar para delegar esta lógica. </li>    </ul>


## Examples

### Example #1 
Ordenar la lista \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Ordenar la lista \{2, 3, 1} en orden descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Ordenar la lista \{2, 3, 1} en orden descendente mediante el método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
