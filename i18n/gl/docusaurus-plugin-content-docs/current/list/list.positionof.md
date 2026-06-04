---
title: List.PositionOf
---

# List.PositionOf


Devolve o(s) desprazamento(s) dun valor da lista.


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

Devolve o desprazamento no que aparece o valor especificado nunha lista. Devolve -1 se o valor non aparece.

-   `list` : A lista para buscar.
-   `value` : O valor que se vai atopar na lista.
-   `occurrence` : (Opcional) A ocorrencia específica que se vai notificar. Este valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se non se especifica ningún `occurrence`, úsase `Occurrence.First`.
-   `equationCriteria` : (Opcional) Especifica como se determina a igualdade ao comparar valores. Este parámetro pode ser unha función de selección de claves, unha función de comparación ou unha lista que conteña tanto un selector de claves como un comparador.


## Examples

### Example #1
Buscar a posición na lista \{1, 2, 3\} na que aparece o valor 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Atopa a posición na lista de todas as instancias de datas de 2022.
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
Atopa a posición na lista da última aparición da palabra can, ignorando maiúsculas e minúsculas.
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
Atopa a posición na lista que está dentro de dúas unidades do número 28.
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
