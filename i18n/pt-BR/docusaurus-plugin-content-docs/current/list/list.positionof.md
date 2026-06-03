---
title: List.PositionOf
---

# List.PositionOf


Retorna os deslocamentos de um valor em uma lista.


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

Retorna o deslocamento no qual o valor especificado aparece em uma lista. Retornará -1 se o valor não aparecer.

-   `list`: A lista a ser pesquisada.
-   `value`: o valor a ser localizado na lista.
-   `occurrence`: (Opcional) A ocorrência específica a ser relatada. Esse valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se nenhum `occurrence` for especificado, `Occurrence.First` será usado.
-   `equationCriteria`: (Opcional) Especifica como a igualdade é determinada ao comparar valores. Esse parâmetro pode ser uma função de seletor de chave, uma função de comparador ou uma lista que contém um seletor de chave e um comparador.


## Examples

### Example #1
Localize a posição na lista \{1, 2, 3\} em que o valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Localize a posição na lista de todas as instâncias de datas de 2022.
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
Localize a posição na lista da última ocorrência da palavra cachorro, ignorando maiúsculas e minúsculas.
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
Localize que posição na lista está dentro de duas unidades do número 28.
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
