---
title: List.PositionOfAny
---

# List.PositionOfAny


Devolve o primeiro desprazamento dun valor da lista.


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

Devolve o desprazamento no que aparece un elemento da lista de valores especificada nunha lista. Devolve -1 se non se atopa ningunha ocorrencia.

-   `list` : A lista para buscar.
-   `values` : A lista de valores que se atoparán na lista orixinal.
-   `occurrence` : (Opcional) A ocorrencia específica que se vai notificar. Este valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se non se especifica ningún `occurrence`, úsase `Occurrence.First`.
-   `equationCriteria` : (Opcional) Especifica como se determina a igualdade ao comparar valores. Este parámetro pode ser unha función de selección de claves, unha función de comparación ou unha lista que conteña tanto un selector de claves como un comparador.


## Examples

### Example #1
Buscar a primeira posición na lista \{1, 2, 3\} na que aparece o valor 2 ou 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Atopa a posición na lista de todas as instancias de datas de 2022 ou 2023.
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
Atopa a posición na lista da última aparición da palabra can ou gato, ignorando maiúsculas.
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
Atopa calquera posición na lista que estea dentro de dúas unidades do número 17 ou 28.
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
