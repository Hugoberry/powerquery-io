---
title: List.Distinct
---

# List.Distinct


Devolve uma lista de valores com os duplicados removidos.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devolve uma lista que contém todos os valores na lista especificada com duplicados removidos. Se a lista especificada estiver vazia, o resultado é uma lista vazia.

-   `list`: a lista a partir da qual são extraídos valores distintos.
-   `equationCriteria`: (opcional) especifica como a igualdade é determinada ao comparar valores. Este parâmetro pode ser uma função de seletor de chave, uma função de comparação ou uma lista que contenha tanto um seletor de chave como um comparador.


## Examples

### Example #1
Remover os duplicados da lista \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
A partir do fim da lista, selecione as frutas que têm um comprimento de texto único.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
A partir do início da lista, selecione as frutas únicas, ignorando maiúsculas e minúsculas.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Extraia de uma lista de listas as primeiras listas com nomes de países únicos, ignorando maiúsculas e minúsculas. Coloque as listas extraídas nas linhas de uma nova tabela.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
