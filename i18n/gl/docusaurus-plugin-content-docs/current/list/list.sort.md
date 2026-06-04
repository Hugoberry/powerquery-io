---
title: List.Sort
---

# List.Sort


Ordena unha lista de datos segundo o criterio especificado.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Ordena unha lista de datos, `list`, segundo os criterios opcionais especificados. Pódese especificar un parámetro opcional, `comparisonCriteria`, como criterio de comparación. Isto pode tomar os seguintes valores:

-   Para controlar a orde, o criterio de comparación pode ser un valor de enumeración de orde. (`Orde.Descendente`, `Orde.Ascendente`).
-   Para calcular unha clave que se empregará para a ordenación, pódese usar unha función dun argumento.
-   Para seleccionar unha clave e unha orde de control, o criterio de comparación pode ser unha lista que conteña a clave e a orde ( `{each 1 / _, Order.Descending}` ).
-   Para controlar completamente a comparación, pódese usar unha función de 2 argumentos (como Value.Compare). A esta función pasaranse dous elementos da lista (calquera dous elementos, en calquera orde). A función debería devolver un dos seguintes valores:
    -   `-1`: O primeiro elemento é menor que o segundo elemento.
    -   `0`: Os elementos son iguais.
    -   `1`: O primeiro elemento é maior que o segundo elemento.


## Examples

### Example #1
Ordenar a lista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ordenar a lista \{2, 3, 1\} en orde descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Ordenar a lista \{2, 3, 1\} en orde descendente utilizando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
