---
title: List.Sort
---

# List.Sort


## Description

Ordena unha lista de datos segundo o criterio especificado.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Ordena unha lista de datos, <code>list</code>, segundo o criterio opcional especificado.    Tamén se pode especificar un parámetro opcional, <code>comparisonCriteria</code>, como o criterio de comparación. Isto pode ter os seguintes valores:    <ul>    <li> Para controlar a orde, o criterio de comparación pode ser un valor de enumeración Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>     <li> Para calcular unha clave que se vai utilizar na ordenación, pódese usar unha función de 1 argumento. </li>    <li> Para seleccionar unha clave e unha orde de control, o criterio de comparación pode ser unha lista que conteña a clave e a orde (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Para controlar por completo a comparación, pódese usar unha función de 2 argumentos. A esta función se lle pasarán dos elementos da lista (calquera dous elementos, en calquera orde). A función debería devolver un dos valores seguintes:        <ul>            <li> <code>-1</code>: O primeiro elemento é menos que o segundo.</li>            <li> <code>0</code>: Os elementos son iguais.</li>            <li> <code>1</code>: O primeiro elemento é maior có segundo.</li>        </ul>        Valor.A comparación é un método que se pode utilizar para delegar esta lóxica. </li>    </ul>


## Examples

### Example #1 
Ordenar a lista \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Ordenar a lista \{2, 3, 1} en orde descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Ordenar a lista \{2, 3, 1} en orde descendente utilizando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
