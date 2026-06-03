---
title: List.PositionOfAny
---

# List.PositionOfAny


Devolve o primeiro desvio de um valor numa lista.


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

Devolve o deslocamento no qual um item da lista de valores especificada aparece numa lista. Devolve -1 se não for encontrada nenhuma ocorrência.

-   `list`: a lista na qual efetuar a pesquisa.
-   `values`: a lista de valores a localizar na lista original.
-   `occurrence`: (opcional) a ocorrência específica a devolver. Este valor pode ser `Occurrence.First`, `Occurrence.Last` ou `Occurrence.All`. Se `occurrence` não for especificado, é utilizado `Occurrence.First`.
-   `equationCriteria`: (opcional) especifica como a igualdade é determinada ao comparar valores. Este parâmetro pode ser uma função de seleção de chaves, uma função comparadora ou uma lista que contenha uma função de seleção de chaves e uma função comparadora.


## Examples

### Example #1
Determinar a primeira posição na lista \{1, 2, 3\} em que o valor 2 ou 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Localizar a posição na lista de todas as instâncias de datas a partir de 2022 ou 2023.
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
Encontre a posição na lista da última ocorrência da palavra cão ou gato, ignorando maiúsculas e minúsculas.
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
Encontre qualquer posição na lista que se encontre dentro de duas unidades do número 17 ou 28.
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
