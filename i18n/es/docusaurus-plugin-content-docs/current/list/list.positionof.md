---
title: List.PositionOf
---

# List.PositionOf


Devuelve los desplazamientos de un valor en una lista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve el desplazamiento en el que el valor especificado aparece en una lista. Devuelve -1 si el valor no aparece.

-   `list`: la lista en la que se va a buscar.
-   `value`: valor que se va a buscar en la lista.
-   `occurrence`: (opcional) la repetición específica de la que se va a informar. Este valor puede ser `Occurrence.First`, `Occurrence.Last` o `Occurrence.All`. Si no se especifica `occurrence`, se usa `Occurrence.First`.
-   `equationCriteria`: (opcional) especifica cómo se determina la igualdad al comparar valores. Este parámetro puede ser una función de selector de claves, una función de comparador o una lista que contenga un selector de claves y un comparador.


## Examples

### Example #1
Buscar la posición en la lista \{1, 2, 3\} en la que el valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Busque la posición en la lista de todas las instancias de fechas de 2022.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Busque la posición en la lista de la última aparición de la palabra perro, omitiendo mayúsculas y minúsculas.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Busque la posición en la lista que se encuentre a dos unidades del número 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
