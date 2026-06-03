---
title: List.Distinct
---

# List.Distinct


Retorna uma lista de valores com as duplicatas removidas.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retorna uma lista que contém todos os valores na lista especificada com duplicatas removidas. Se a lista especificada estiver vazia, o resultado será uma lista vazia.

-   `list`: a lista da qual valores distintos são extraídos.
-   `equationCriteria`: (Opcional) Especifica como a igualdade é determinada ao comparar valores. Esse parâmetro pode ser uma função de seletor de chave, uma função de comparador ou uma lista que contém um seletor de chave e um comparador.


## Examples

### Example #1
Remova as duplicatas da lista \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Começando no final da lista, selecione as frutas que têm um comprimento de texto exclusivo.
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
Começando no início da lista, selecione as frutas exclusivas, ignorando maiúsculas e minúsculas.
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
Extraia de uma lista de listas as primeiras listas com nomes de país/região exclusivos, ignorando maiúsculas e minúsculas. Coloque as listas extraídas nas linhas de uma nova tabela.
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
