---
title: List.PositionOf
---

# List.PositionOf


Devolve o(s) desvio(s) de um valor numa lista.


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

Devolve o deslocamento no qual o valor especificado aparece numa lista. Devolve -1 se o valor não aparecer.

-   `list`: a lista na qual efetuar a pesquisa.
-   `value`: o valor a localizar na lista.
-   `occurrence`: (opcional) a ocorrência específica a devolver. Este valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se `occurrence` não for especificado, é utilizado `Occurrence.First`.
-   `equationCriteria`: (opcional) especifica como a igualdade é determinada ao comparar valores. Este parâmetro pode ser uma função de seleção de chaves, uma função comparadora ou uma lista que contenha uma função de seleção de chaves e uma função comparadora.


## Examples

### Example #1
Determinar a posição na lista \{1, 2, 3\} em que o valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Localizar a posição na lista de todas as instâncias de datas a partir de 2022.
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
Localizar a posição na lista da última ocorrência da palavra "dog" sem considerar maiúsculas e minúsculas.
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
Localiza a posição na lista que está a duas unidades do número 28.
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
