---
title: List.PositionOfAny
---

# List.PositionOfAny


Retorna o primeiro deslocamento de um valor em uma lista.


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

Retorna o deslocamento em que um item da lista de valores especificada aparece em uma lista. Retornará -1 se nenhuma ocorrência for encontrada.

-   `list`: A lista a ser pesquisada.
-   `values`: a lista de valores a serem localizados na lista original.
-   `occurrence`: (Opcional) A ocorrência específica a ser relatada. Esse valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se nenhum `occurrence` for especificado, `Occurrence.First` será usado.
-   `equationCriteria`: (Opcional) Especifica como a igualdade é determinada ao comparar valores. Esse parâmetro pode ser uma função de seletor de chave, uma função de comparador ou uma lista que contém um seletor de chave e um comparador.


## Examples

### Example #1
Localize a primeira posição na lista \{1, 2, 3\} em que o valor 2 ou 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Localize a posição na lista de todas as instâncias de datas de 2022 ou 2023.
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
Localize a posição na lista da última ocorrência da palavra cachorro ou gato, ignorando maiúsculas e minúsculas.
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
Localize qualquer posição na lista que esteja dentro de duas unidades do número 17 ou 28.
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
