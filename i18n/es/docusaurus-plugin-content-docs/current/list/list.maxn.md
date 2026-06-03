---
title: List.MaxN
---

# List.MaxN


Devuelve los valores máximos de la lista. Se debe especificar el número de valores que se van a devolver o una condición de filtro.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Devuelve los valores máximos de la lista especificada. Tras ordenar las filas, se pueden especificar parámetros opcionales para filtrar aún más el resultado.

-   `list`: la lista de valores.
-   `countOrCondition`: especifica el número de valores que se van a devolver o una condición de filtro. Si se especifica un número, se devuelve una lista de hasta `countOrCondition` elementos en orden descendente. Si se especifica una condición, la lista devuelta incluye todos los elementos que cumplen la condición.
-   `comparisonCriteria`: (Opcional) Función que se usa para transformar los valores antes de compararse. Si este parámetro es `null`, los valores se comparan sin ninguna transformación.
-   `includeNulls`: (Opcional) Indica si los valores `null` de la lista deben incluirse en la determinación del elemento máximo. El valor predeterminado es `true`.


## Examples

### Example #1
Busca los 5 valores principales de la lista especificada.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Busca las palabras con más de 3 caracteres.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Busca las tres fechas más recientes de una lista de fechas alemanas.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
