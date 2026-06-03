---
title: List.PositionOfAny
---

# List.PositionOfAny


Devuelve el primer desplazamiento de un valor en una lista.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve el desplazamiento en el que un elemento de la lista de valores especificada aparece en una lista. Devuelve -1 si no se encuentra ninguna ocurrencia.

-   `list`: la lista en la que se va a buscar.
-   `values`: la lista de valores que se van a buscar en la lista original.
-   `occurrence`: (opcional) la repetición específica de la que se va a informar. Este valor puede ser `Occurrence.First`, `Occurrence.Last` o `Occurrence.All`. Si no se especifica `occurrence`, se usa `Occurrence.First`.
-   `equationCriteria`: (opcional) especifica cómo se determina la igualdad al comparar valores. Este parámetro puede ser una función de selector de claves, una función de comparador o una lista que contenga un selector de claves y un comparador.


## Examples

### Example #1
Buscar la primera posición en la lista \{1, 2, 3\} en la que el valor 2 o 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Busque la posición en la lista de todas las instancias de fechas de 2022 o 2023.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Busque la posición en la lista de la última aparición de la palabra perro o gato, ignorando el uso de mayúsculas y minúsculas.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
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
Busca cualquier posición en la lista que esté dentro de dos unidades del número 17 o 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
